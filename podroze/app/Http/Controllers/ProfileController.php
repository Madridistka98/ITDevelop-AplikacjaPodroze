<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Profile page route
     *
     * @return void
     */
    public function index()
    {
        return view('profile.profile');
    }
}
