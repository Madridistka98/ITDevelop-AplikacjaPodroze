<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Laravel\Socialite\Facades\Socialite;
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
// Route::get('/login', [MainController::class, 'login']);
// Route::post('/login/check', [MainController::class, 'login_check']);
// Route::get('/register', [MainController::class, 'register']);
// Route::post('/register/check', [MainController::class, 'register_check']);
Auth::routes();
Route::get('/', [HomeController::class, 'home']);

// Login with social


Route::get('login/google',[LoginController::class, 'redirectToGoogle'])->name('login.google');
Route::get('login/google/callback',[LoginController::class, 'handleGoogleCallback']);

Route::get('login/facebook',[LoginController::class, 'redirectToFacebook'])->name('login.facebook');
Route::get('login/facebook/callback',[LoginController::class, 'handleFacebookCallback']);

Route::get('login/twitter',[LoginController::class, 'redirectToTwitter'])->name('login.twitter');
Route::get('login/twitter/callback',[LoginController::class, 'handleTwitterCallback']);