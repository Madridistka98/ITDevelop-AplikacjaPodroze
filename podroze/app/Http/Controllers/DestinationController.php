<?php

namespace App\Http\Controllers;

use App\Models\{Destination,Trip,User};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class DestinationController extends Controller
{
    public function getNames(string $text)
    {
        if ($text == "") {
            return "noResults";
        }
        $destinations = Destination::select("ID", "city", "country")->where("city", "like", "$text%")
        ->orWhere("country", "like", "$text%")->get();
        $destinationsJson = $destinations->toJson();
        return $destinationsJson;
    }

    public function getDestinations(string $start, string $destination)
    {
        if ($start == "" || $destination == "") {
            return "noResults";
        }
        $mapStart = Destination::select("ID", "city", "latitude", "longitude")->where("city", "=", $start)->get();
        $mapDestination = Destination::select("ID", "city", "latitude", "longitude")
        ->where("city", "=", $destination)->get();
        if ($mapStart->count() > 0 && $mapDestination->count() > 0) {
            $destinationsJson = $mapStart->concat($mapDestination)->toJson();
            return $destinationsJson;
        }
        return "";
    }
    public function getMultipleDestinations(string $destinationsSring)
    {
        if ($destinationsSring == "") {
            return "noResults";
        }
        $destinations = explode("--", $destinationsSring);
        $mapDestinations = Destination::select("ID", "city", "latitude", "longitude")
            ->whereIn("city", $destinations)->get();
        if ($mapDestinations->count() > 0 && $mapDestinations->count() > 0) {
            $destinationsJson = $mapDestinations->toJson();
            return $destinationsJson;
        }
        return "";
    }

    public function createTrip(Request $request)
    {
        $name = $request->input('name');
        $locations = $request->input('mainDestinations');
        $additionalStops = $request->input('additionalStops');
        $transport = $request->input('transport');
        $date = $request->input('date');
        $start = $locations[0];
        $destination = $locations[1];
        $user = User::find($request->input("user"));

        $destIDs = array_map(function ($item) {
            return $item['ID'];
        }, $additionalStops);
        $startDest = Destination::find($start['ID']);
        $endDest = Destination::find($destination['ID']);
        $destinations = Destination::whereIn("ID", $destIDs)->get();

        $trip = Trip::where("user_id", $user->id)->where("trip_date", $date)->first();
        if (!isset($trip->id)) {
            $trip = new Trip();
        }
        $trip->name = $name;
        $trip->trip_date = $date;
        $trip->transport = $transport;
        $trip->user()->associate($user);
        $trip->save();
        $count = 1;
        $trip->destinations()->detach();
        $trip->destinations()->attach($startDest, ['sort_order' => $count]);
        $count++;
        foreach ($destinations as $dest) {
            $trip->destinations()->attach($dest, ['sort_order' => $count]);
            $count++;
        }
        $trip->destinations()->attach($endDest, ['sort_order' => $count]);
        $count++;
        return "Done";
    }
    public function getTrip($userID, $date)
    {
        $trip = Trip::where("user_id", $userID)->where("trip_date", $date)->first();
        if ($trip == null) {
            return "";
        }
        //$trip->start;
        // $trip->destination;

        /**
         *  @var Illuminate\Support\Collection
         */
        $sortedDestinations = $trip->destinations->sortBy(function ($dest, $key) {
            return $dest->pivot->sort_order;
        });
        $response = collect([
            "start" => $sortedDestinations->shift(),
            "destination" => $sortedDestinations->pop(),
            "destinations" => $sortedDestinations,
            "id" => $trip->id,
            "name" => $trip->name,
            "transport" => $trip->transport,
        ]);
        return $response->toJson();
    }
}
