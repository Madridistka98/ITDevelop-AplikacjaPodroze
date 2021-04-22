<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\HotelsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('web') -> group(base_path('routes/web.php'));

Route::get('/destinations/{text}', [DestinationController::class,'getNames']);
Route::get('/map-destinations/{start}-{destination}', [DestinationController::class,'getDestinations']);
Route::get('/map-multiple-destinations/{destinations}', [DestinationController::class,'getMultipleDestinations']);
Route::get('/trip/{userID}-{date}', [DestinationController::class,'getTrip']);
Route::get('/hotels/{cities}', [HotelsController::class,'getHotels']);
Route::post('/trip/' , [DestinationController::class,'createTrip']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
