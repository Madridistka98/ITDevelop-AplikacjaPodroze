<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class HotelsController extends Controller
{
    public function getHotels(string $cities)
    {
        $cities = explode("--", $cities);

        $destinations = Destination::select('city')->whereIn("ID", $cities)->get();

        // $citiesNames = array_map(function ($item) {
        //     return $item['name'];
        // }, $destinations);

        $hotels = [];
        foreach ($destinations as $dest) {
            $hotels[$dest->city] = [];
            if (Cache::has($dest->city)) {
                $hotels[$dest->city] = Cache::get($dest->city);
            } else {
                $response = Http::withHeaders([
                'x-rapidapi-key' => env("HOTELS_API_KEY"),
                'x-rapidapi-host' => 'hotels4.p.rapidapi.com',
                ])->get('https://hotels4.p.rapidapi.com/locations/search'. [
                'locale' => 'en_US',
                'query' => $dest->city,
                ]);
                if (!$response->ok()) {
                    if (!$hotels["errors"]) {
                        $hotels["errors"] = [];
                    }
                    array_push($hotels["errors"], $dest->city);
                } else {
                    $res =  $response->json()['suggestions'][1]['entities'];
                    $resHotels = array_map(function ($hotel) {
                        $data['name'] = $hotel['name'];
                        $data['latitude'] = $hotel['latitude'];
                        $data['longitude'] = $hotel['longitude'];
                        return $data;
                    });
                    $hotels[$dest->city] = $resHotels;
                    Cache::tags(['hotels'])->put($dest->city, $resHotels, now()->addMonths(3));
                }
            }
        }
        return json_encode($hotels);
    }
}
