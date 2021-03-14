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
}
