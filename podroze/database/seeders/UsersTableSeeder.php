<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'John',
            'surname' => 'Da'
            'email' => 'john_smith@mail.co'
            'password' => Hash::make('password'),
            'remember_token' => str_random(10),
        ]);
    }
}
