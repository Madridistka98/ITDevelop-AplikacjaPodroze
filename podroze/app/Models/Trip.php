<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;
    public function start()
    {
        return $this->belongsTo(Destination::class);
    }
    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    function destinations()
    {
        return $this->belongsToMany(Destination::class, 'trip_destinations')->withPivot('sort_order');
    }
}
