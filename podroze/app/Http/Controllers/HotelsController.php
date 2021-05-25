<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Models\Destination;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class HotelsController extends Controller
{
    public function getHotels(string $cities)
    {
        $cities = explode("--", $cities);
        $destinations = Destination::select('city')->whereIn("city", $cities)->get();
        $hotels = [];
        foreach ($destinations as $dest) {
            $city = $dest->city;
            $hotels["cities"][$city] = [];
            $hotels["errors"] = [];
            if (Cache::has($city)) {
                $hotels["cities"][$city] = Cache::get($city);
            } else {
                $response = Http::withHeaders([
                'x-rapidapi-key' => env("HOTELS_API_KEY"),
                'x-rapidapi-host' => 'hotels-com-provider.p.rapidapi.com',
                ])->get('https://hotels-com-provider.p.rapidapi.com/v1/destinations/search', [
                'locale' => 'en_US',
                'query' => $city,
                "currency" => "USD",
                ]);
                if (!$response->ok()) {
                    array_push($hotels["errors"], $city);
                } else {
                    $res =  $response->json()['suggestions'][1]['entities'];
                    $tempHotels = array_map(function ($hotel) {
                        $data['name'] = $hotel['name'];
                        $data['latitude'] = $hotel['latitude'];
                        $data['longitude'] = $hotel['longitude'];
                        $data['id'] = $hotel['destinationId'];
                        return $data;
                    }, $res);
                    $resHotels = array_map(function ($hotel) {
                        $data = $hotel;
                        try {
                            $data['image'] = asset($this->getHotelImage($data['id']));
                        } catch (\Exception $e) {
                            Log::info($e->getMessage());
                            $data['image'] = asset("storage/default.jpg");
                        }
                        return $data;
                    }, $tempHotels);

                    $hotels['cities'][$city] = $resHotels;
                    Cache::put($city, $resHotels, now()->addMonths(3));
                }
            }
        }
        
        return json_encode($hotels);
    }

    private function getHotelImage(int $id)
    {
        $response = Http::withHeaders([
            'x-rapidapi-key' => env("HOTELS_API_KEY"),
            'x-rapidapi-host' => 'hotels-com-provider.p.rapidapi.com',
            ])->get('https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos', [
            'hotel_id' => $id,
        ]);
        if (!$response->ok()) {
            throw new \Exception("Unable to get hotel picture: $id");
        }

        $arrContextOptions=array(
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
        );  
        Storage::disk('public')->put("$id.jpg", file_get_contents($response[0]['mainUrl'], false, stream_context_create($arrContextOptions)));
        return "storage/$id.jpg";
    }
}
