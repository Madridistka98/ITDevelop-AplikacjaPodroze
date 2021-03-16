<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;

class DbTest extends Controller
{
    public function index(){
        return Destination::all();
    }
}
