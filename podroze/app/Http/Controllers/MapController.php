<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MapController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Musiałam wyłączyć przekierowanie, żeby móc wejść na normalną stronę główną
        // nie było mowy o automatycznym kierowaniu użytkownika na stronę logowania.

        //TODO Weryfikować zalogowanego użytkownika
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function searchtrip()
    {
        return view('map');
    }
}
