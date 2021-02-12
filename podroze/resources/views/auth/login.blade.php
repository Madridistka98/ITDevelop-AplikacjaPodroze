@extends('layouts.app')

@section('content')
<div class="container">
    <div id="example"></div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Sign In') }}</div>
                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <div class="col-md-6">
                                <input id="email" type="email" placeholder="E-Mail" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6">
                                <input id="password" type="password" placeholder="Password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <!-- <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div> -->

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                 @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif

                                <button type="submit" class="btn btn-primary">
                                    {{ __('Sign In') }}
                                </button>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header">{{ __('No account, less fun!') }}
                <br>{{ __('Sign up for more') }}</div>
                <div class="card-body">
                    <div class="form-group row">
                        <a class="btn btn-primary" href="{{ route('register') }}">
                            {{ __('Sign Up') }}
                        </a>
                    </div>
                    <div class="form-group row">
                        {{ __('or') }}
                    </div>
                    <div class="form-group row">
                        {{ __('quick access with') }}
                    </div>
                    <div class="form-group row">
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
