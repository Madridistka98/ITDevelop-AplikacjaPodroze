<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home(){
        return view('home');
    }

    public function login(){
        return view('login');
    }

    public function login_check(Request $request){
        dd($request);
        return view('login_check');
    }

    public function register(){
        return view('register');
    }

    public function register_check(Request $request){
        dd($request);
        return view('register_check');
    }
}
