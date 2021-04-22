<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class TripDestination extends Pivot
{
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'name', 'hotel_name');
    }
}
