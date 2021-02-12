<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="d-flex flex-column">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand col-7 col-sm-6 col-md-2" href="{{ url('/') }}">
                    <img class="img img-fluid" src="./static/images/Nazwa_dinozaur.png" alt="logo_nawigacja"> 
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto ">
                            <li class="nav-item">
                                <a href="#" class="nav-link text-center text-white mb-2 mb-md-0 pb-0 pl-0 h5">{{ __('Tickets') }}</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-center text-white mb-2 mb-md-0 pb-0 h5">{{ __('Hotels') }}</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-center text-white mb-2 mb-md-0 pb-0 h5">{{ __('About Us') }}</a>
                            </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link btn btn-success rounded-pill font-weight-bolder px-5 py-1" href="{{ route('login') }}">{{ __('Sign In') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
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
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>

        <footer class="bg-dark container-fluid align-self-end">
            <div class="row">
                <div class="col-2">
                <a class="col-7 col-sm-6 col-md-2" href="{{ url('/') }}">
                    <img class="img img-fluid" src="./static/images/Nazwa_dinozaur.png" alt="logo_nawigacja"> 
                </a>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
