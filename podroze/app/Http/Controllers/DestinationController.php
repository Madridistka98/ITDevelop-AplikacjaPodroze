<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    public function getNames(string $text)
    {
        if($text == "")
        {
            return "noResults";
        }
        $destinations = Destination::select("ID", "city", "country")->where("city", "like", "$text%")->orWhere("country", "like", "$text%")->get();
        $destinationsJson = $destinations->toJson();
        return $destinationsJson;

    }

    public function getDestinations(string $start, string $destination)
    {
        if($start == "" || $destination == "")
        {
            return "noResults";
        }
        $mapStart = Destination::select("ID", "city",  "latitude", "longitude")->where("city", "=", $start)->get();
        $mapDestination = Destination::select("ID", "city",  "latitude", "longitude")->where("city", "=", $destination)->get();
        $destinationsJson = $mapStart->concat($mapDestination)->toJson();
        return $destinationsJson;
    }
}
