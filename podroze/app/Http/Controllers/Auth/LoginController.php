<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;

class LoginController extends Controller
{
    use AuthenticatesUsers;
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function redirectToGoogle() {
        return Socialite::driver('google')->redirect();
    }
    
    public function handleGoogleCallback() {
        $user = Socialite::driver('google')->user();
        $this->_registerOrLoginUser($user);
        return redirect()->route('home');
    }

    public function redirectToFacebook() {
        return Socialite::driver('facebook')->redirect();
    }
    
    public function handleFacebookCallback() {
        $user = Socialite::driver('facebook')->user();
        $this->_registerOrLoginUser($user);
        return redirect()->route('home');
    }

    public function redirectToTwitter() {
        return Socialite::driver('twitter')->redirect();
    }
    
    public function handleTwitterCallback() {
        $user = Socialite::driver('twitter')->user();
        $this->_registerOrLoginUser($user);
        return redirect()->route('home');
    }

    protected function _registerOrLoginUser($data)
    {
        $user = User::where('email','=',$data->email)->first();
        if(!$user){
            $user = new User();
            $user->name = $data->name;
            $user->surname = $data->surname;
            $user->email = $data->email;
            $user->provider_id = $data->id;
            $user->avatar = $data->avatar;
            $user->save();
        }
        Auth::login($user);
    }
}
