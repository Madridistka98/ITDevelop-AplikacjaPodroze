<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    function destinations()
    {
        return $this->belongsToMany(Destination::class, 'trip_destinations')->withPivot('sort_order')->as('destinations');
    }
}
