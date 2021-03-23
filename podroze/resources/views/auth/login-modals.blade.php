

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                {{-- <li class="nav-item">
                                    <a data-tests="login-page" class="nav-link btn btn-success rounded-pill font-weight-bolder px-5 py-1" href="{{ route('login') }}">{{ __('Sign In') }}</a>
                                </li> --}}
                                <li class="nav-item d-flex">
                                    <button  data-tests="login-page" class="nav-link btn btn-success rounded-pill font-weight-bolder px-5 py-1 mx-auto" data-toggle="modal" data-target="#loginModal">{{ __('Sign In') }}</button>
                                </li>
                                
                                <div class="modal fade login-modal" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="login modal" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="shadow-sm">
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
                                                    {{-- <div class="mx-auto">
                                                        <a class="btn btn-dark px-5 my-3 rounded-pill" href="{{ route('register') }}">
                                                            {{ __('Sign Up') }}
                                                        </a>
                                                    </div> --}}
                                                    <button type="button" class="btn btn-dark px-5 my-3 rounded-pill" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">
                                                        {{ __('Sign Up') }}
                                                    </button>
                                                    <div class="text-center mx-auto font-weight-bolder">
                                                        {{ __('or') }} <br> {{ __('quick access with') }}
                                                    </div>
                                                    <div class="mx-auto mt-4 d-flex flex-row ">
                                                        <a href="{{ route('login.google') }}" class="img img-fluid flex-grow-1"><img src="./static/images/icons/google.png" alt="google-login"></a>
                                                        <a href="{{ route('login.facebook') }}" class="img img-fluid flex-grow-1"><img src="./static/images/icons/facebook.png" alt="facebook-login"></a>
                                                        <a href="" class="img img-fluid flex-grow-1"><img src="./static/images/icons/instagram.png" alt="instagram-login"></a>
                                                        <a href="{{ route('login.twitter') }}" class="img img-fluid flex-grow-1"><img src="./static/images/icons/twitter.png" alt="twitter-login"></a>
                                                        <a href="" class="img img-fluid flex-grow-1"><img src="./static/images/icons/apple.png" alt="apple-login"></a>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="modal fade register-modal" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="login modal" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="shadow-sm px-0 form__register">
                                            <div class="card">
                                                <div class="card-header form__register--header">
                                                    <h1>{{ __('Sign Up') }}</h1>
                                                    <p class="text-center font-weight-bold text-dark h3">Sign up for search history, planning your travel with <br> friends and more!</p>
                                                </div>

                                                <div class="card-body">
                                                    <form method="POST" action="{{ route('register') }}" data-tests="register-form" >
                                                        @csrf

                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <input id="name" type="text" placeholder="Name" class="form-control rounded-pill @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                                                @error('name')
                                                                    <span class="invalid-feedback" role="alert">
                                                                        <strong>{{ $message }}</strong>
                                                                    </span>
                                                                @enderror
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <input id="surname" type="text" placeholder="Last Name" class="form-control rounded-pill @error('surname') is-invalid @enderror" name="surname" value="{{ old('surname') }}" required autocomplete="surname" autofocus>

                                                                @error('surname')
                                                                    <span class="invalid-feedback" role="alert">
                                                                        <strong>{{ $message }}</strong>
                                                                    </span>
                                                                @enderror
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <input id="registerEmail" type="email" placeholder="Email" class="form-control rounded-pill @if($errors->register->has("email")) is-invalid @endif" name="email" value="{{ old('email') }}" required autocomplete="email">

                                                                @if($errors->register->has("email"))
                                                                    <span class="invalid-feedback" role="alert">
                                                                        <strong>{{ $errors->register->first('email') }}</strong>
                                                                    </span>
                                                                @endif
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <input id="registerPassword" type="password" placeholder="Password" class="form-control rounded-pill @if($errors->register->has("password")) is-invalid @endif" name="password" required autocomplete="new-password">

                                                                @if($errors->register->has("password"))
                                                                    <span class="invalid-feedback" role="alert">
                                                                        <strong>{{  $errors->register->first('password') }}</strong>
                                                                    </span>
                                                                @endif
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <input id="password-confirm" type="password" placeholder="Confirm Password" class="form-control rounded-pill" name="password_confirmation" required autocomplete="new-password">
                                                            </div>
                                                        </div>

                                                        <div class="form-group row mb-0">
                                                            <div class="mx-auto">
                                                                <button type="submit" class="btn btn-success text-white font-weight-bolder rounded-pill px-5 py-2">
                                                                    {{ __('Sign Up') }}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                            @endif
                        @else
                        <li class="nav-item d-flex">
                                    <button  data-tests="profile-modal" class="px-5 py-1 bg-dark mx-auto" data-toggle="modal" data-target="#profileModal">
                                        <img src="./static/images/icons/user_icon_small.png" alt="user_small">
                                    </button>
                         </li>

                         <div class="modal fade register-modal" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profile modal" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="shadow-sm px-0 form__register">
                                            <div class="card">
                                                <div class="card-header form__register--header  d-flex flex-column">
                                                    <img class="img img-fluid mx-auto" src="./static/images/icons/user_icon_big.png" alt="user_big">
                                                    <p class="text-center font-weight-bold text-dark h2">Hello {{ Auth::user()->name }}!</p>
                                                    <input type="hidden" id="userID" value="{{ Auth::user()->id}}">
                                                </div>
                                                <div class="card-body d-flex flex-column">
                                                    <a href="{{url('/profile')}}" class="btn btn-primary rounded-pill mb-4">Profile</a>
                                                    <a href="{{url('/profile')}}" class="btn btn-primary rounded-pill mb-4">Settings</a>
                                                    <a href="#" class="btn btn-success rounded-pill mt-5" href="{{ route('logout') }}"
                                                        onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">{{ __('Sign Out') }}</a>

                                                     <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                                        @csrf
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>




                            {{-- <li class="nav-item dropdown">
                                <img src="{{ Auth::user()->avatar }}" alt="">

                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li> --}}
                        @endguest
                    </ul>

                    @if($errors->has('email') || $errors->has("password"))
                    <script>
                        window.onload = function(){ new bootstrap.Modal(document.getElementById("loginModal")).toggle(); };
                    </script>
                    @endif
                    @if($errors->has('name') || $errors->has("surname") || $errors->register->has("email") || $errors->register->has("password"))
                    <script>
                        window.onload = function(){ new bootstrap.Modal(document.getElementById("signupModal")).toggle() };
                    </script>'
                    @endif'