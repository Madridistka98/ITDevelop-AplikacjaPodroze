@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center my-5">
        <div class="col-md-8 bg-light rounded shadow-sm px-0">
            <div class="d-flex flex-md-row flex-column">
                <div class="flex-column d-flex flex-grow-1 p-4">
                    <h2>{{ __('Sign In') }}</h2>
                    <form method="POST" action="{{ route('login') }}" data-tests="login-form">
                        @csrf

                        <div class="form-group row">
                            <div class="col-12">
                                <input id="email" type="email" placeholder="E-Mail" class="rounded-pill form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-12">
                                <input id="password" type="password" placeholder="Password" class="rounded-pill form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-12">
                                @if (Route::has('password.request'))
                                    <a class="btn btn-link text-success" href="{{ route('password.request') }}">
                                        {{ __('Forgot password?') }}
                                    </a>
                                @endif   
                            </div>
                        </div>

                        <button type="submit" class="btn btn-success rounded-pill px-5 text-white d-block ml-auto">
                            {{ __('Sign In') }}
                        </button> 
                    </form>
                </div>

                <div class="flex-column d-flex flex-grow-1 p-4 form__sign-up">
                    <div class="text-center mx-auto font-weight-bolder">{{ __('No account, less fun!') }}
                        <br>{{ __('Sign up for more') }}
                    </div>
                    <div class="mx-auto">
                        <a class="btn btn-dark px-5 my-3 rounded-pill" href="{{ route('register') }}">
                            {{ __('Sign Up') }}
                        </a>
                    </div>
                    <div class="text-center mx-auto font-weight-bolder">
                        {{ __('or') }} <br> {{ __('quick access with') }}
                    </div>
                    <div class="mx-auto mt-4 ">
                        <a href="{{ route('login.google') }}" class="btn btn-danger">G</a>
                        <a href="{{ route('login.facebook') }}" class="btn btn-primary">F</a>
                        <a href="" class="btn btn-outline-danger">I</a>
                        <a href="{{ route('login.twitter') }}" class="btn btn-outline-primary">T</a>
                        <a href="" class="btn btn-dark">A</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
