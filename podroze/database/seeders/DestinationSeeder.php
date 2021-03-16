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
         DB::table('destinations')->insert([
            'city'=>'Reykjavík',
            'country'=>'Iceland',
            'name'=>'Reykjavík',
            'latitude'=>64.128288, 
            'longitude'=>-21.827774, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Paris',
            'country'=>'France',
            'name'=>'Paris',
            'latitude'=>48.864716, 
            'longitude'=>2.349014, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Prague',
            'country'=>'Czech Republic',
            'name'=>'Prague',
            'latitude'=>50.073658, 
            'longitude'=>14.418540, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Moscow',
            'country'=>'Russia',
            'name'=>'Moscow',
            'latitude'=>55.751244, 
            'longitude'=>37.618423, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Poznań',
            'country'=>'Poland',
            'name'=>'Poznań',
            'latitude'=>52.409538 ,
            'longitude'=>16.931992, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Katowice',
            'country'=>'Poland',
            'name'=>'Katowice',
            'latitude'=>50.270908 ,
            'longitude'=>50.270908, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Athens',
            'country'=>'Greece',
            'name'=>'Athens',
            'latitude'=>37.983810,
            'longitude'=>23.727539, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Lisbon',
            'country'=>'Portugal',
            'name'=>'Lisbon',
            'latitude'=>38.736946,
            'longitude'=>-9.142685, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Amsterdam',
            'country'=>'Netherlands',
            'name'=>'Amsterdam',
            'latitude'=>52.377956,
            'longitude'=>4.897070, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Copenhagen',
            'country'=>'Denmark',
            'name'=>'Copenhagen',
            'latitude'=>55.676098,
            'longitude'=>12.568337, 
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Ljubljana',
            'country'=>'Slovenia',
            'name'=>'Ljubljana',
            'latitude'=>46.056946,
            'longitude'=>14.505751 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Dubai',
            'country'=>'United Arab Emirates',
            'name'=>'Dubai',
            'latitude'=>25.276987,
            'longitude'=>55.296249 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Bali',
            'country'=>'Indonesia',
            'name'=>'Bali',
            'latitude'=>-8.409518,
            'longitude'=>115.188919 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'London',
            'country'=>'United Kingdom',
            'name'=>'London',
            'latitude'=>51.509865,
            'longitude'=>-0.118092 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Venice',
            'country'=>'Italy',
            'name'=>'Venice',
            'latitude'=>45.438759,
            'longitude'=>12.327145 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'New York City',
            'country'=>'United States',
            'name'=>'New York City',
            'latitude'=>40.730610,
            'longitude'=>-73.935242 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'The Maldives',
            'country'=>'Maldives',
            'name'=>'The Maldives',
            'latitude'=>1.924992,
            'longitude'=>73.399658 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
         DB::table('destinations')->insert([
            'city'=>'Berlin',
            'country'=>'Germany',
            'name'=>'Berlin',
            'latitude'=>52.520008,
            'longitude'=>13.404954 ,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
    }
}
