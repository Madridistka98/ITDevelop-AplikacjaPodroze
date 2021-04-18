<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HotelsController extends Controller
{
    public function getHotels(string $cities)
    {
        $cities = explode("--", $cities);

        $destinations = Destination::whereIn("ID", $cities)->get();

        $citiesNames = array_map(function ($item) {
            return $item['name'];
        }, $destinations);

        
    }
}
