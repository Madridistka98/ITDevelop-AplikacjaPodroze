<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DestinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('destinations')->insert([
            'city'=>'Zhytomyr',
            'country'=>'Ukraine',
            'name'=>'LifeSchool',
            'latitude'=>50.271327,
            'longitude'=>28.686330,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        DB::table('destinations')->insert([
            'city'=>'North Sea',
            'country'=>'Untouchable',
            'name'=>'Hotel Rybka',
            'latitude'=>56.597491,
            'longitude'=>3.59235,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        DB::table('destinations')->insert([
            'city'=>'Snowland',
            'country'=>'Greenland',
            'name'=>'Photosession with polar bears',
            'latitude'=>67.484943,
            'longitude'=>-43.6530885,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        DB::table('destinations')->insert([
            'city'=>'Opole',
            'country'=>'Poland',
            'name'=>'Opole',
            'latitude'=>50.671541378396405, 
            'longitude'=>17.924479983623314,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Warsaw',
            'country'=>'Poland',
            'name'=>'Warsaw',
            'latitude'=>52.2299111837358, 
            'longitude'=>21.008316370021184, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
    }
}
