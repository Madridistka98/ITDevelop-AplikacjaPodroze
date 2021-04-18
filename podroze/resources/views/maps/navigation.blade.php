<div class="container-fluid bg-dark py-0 py-md-0 ">
    <div class="row">
        <nav class="navbar navbar--map navbar-dark position-relative bg-dark shadow-sm col-md-1 col-12">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse map-menu bg-dark" id="navbarSupportedContent">
                    
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

                    @include('auth.login-modals')
                </div>
        </nav>
         <a class="navbar-brand col-md-2  col-12" href="{{ url('/') }}">
                    <img class="img img-fluid" src="./static/images/Nazwa_dinozaur.png" alt="logo_nawigacja"> 
         </a>
         
    </div>
</div>