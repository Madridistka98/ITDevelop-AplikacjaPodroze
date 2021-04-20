<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Models\Destination;

class HotelsController extends Controller
{
    public function getHotels(string $cities)
    {
        $cities = explode("--", $cities);

        $destinations = Destination::select('city')->whereIn("city", $cities)->get();

        // $citiesNames = array_map(function ($item) {
        //     return $item['name'];
        // }, $destinations);
        $hotels = [];
        foreach ($destinations as $dest) {
            $city = $dest->city;
            $hotels[$city] = [];
             $hotels["errors"] = [];
            if (Cache::has($city)) {
                $hotels[$city] = Cache::get($city);
            } else {
                $response = Http::withHeaders([
                'x-rapidapi-key' => env("HOTELS_API_KEY"),
                'x-rapidapi-host' => 'hotels4.p.rapidapi.com',
                ])->get('https://hotels4.p.rapidapi.com/locations/search', [
                'locale' => 'en_US',
                'query' => $city,
                ]);
                if (!$response->ok()) {
                    array_push($hotels["errors"], $city);
                } else {
                    $res =  $response->json()['suggestions'][1]['entities'];
                    $resHotels = array_map(function ($hotel) {
                        $data['name'] = $hotel['name'];
                        $data['latitude'] = $hotel['latitude'];
                        $data['longitude'] = $hotel['longitude'];
                        return $data;
                    }, $res);
                    $hotels[$city] = $resHotels;
                    Cache::put($city, $resHotels, now()->addMonths(3));
                }
            }
        }
        return json_encode($hotels);
    }
}
