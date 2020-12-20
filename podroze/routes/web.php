<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MainController::class, 'home']);
Route::get('/login', [MainController::class, 'login']);
Route::post('/login/check', [MainController::class, 'login_check']);
Route::get('/register', [MainController::class, 'register']);
Route::post('/register/check', [MainController::class, 'register_check']);

