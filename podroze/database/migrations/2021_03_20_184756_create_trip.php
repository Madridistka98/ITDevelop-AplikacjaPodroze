<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrip extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name", 100)->nullable();
            $table->string("transport", 100);
            $table->date("trip_date");
            $table->foreignId("start_id");
            $table->foreignId("destination_id");
            $table->foreignId("user_id");
        });

        Schema::create('trip_destinations', function (Blueprint $table) {
            $table->id();
            $table->foreignId("trip_id");
            $table->foreignId("destination_id");
            $table->integer("sort_order");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip');
        Schema::dropIfExists('trip_destinations');
    }
}
