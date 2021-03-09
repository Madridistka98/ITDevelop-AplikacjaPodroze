<footer class="bg-dark container-fluid mt-auto">
            <div class="row">
                <div class="col-6 mx-auto mx-md-0 mt-2 col-md-2 d-flex align-items-center">
                <a class="d-block" href="{{ url('/') }}">
                    <img class="img img-fluid" src="./static/images/Nazwa_dinozaur.png" alt="logo_nawigacja"> 
                </a>
                </div>
                <div class="col-md-2 col-12">
                    <ul class="footer-list">
                        <li class="footer-list__item footer-list__item--title">
                            <a href="#">Discover</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Tickets</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Hotels</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Popular Destinations</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-12">
                    <ul class="footer-list">
                        <li class="footer-list__item footer-list__item--title">
                            <a href="#">About Us</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Contact</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Our Team</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-12">
                    <ul class="footer-list">
                        <li class="footer-list__item footer-list__item--title">
                            <a href="#">Your profile</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="{{ route('login') }}">{{ __('Create an account') }}</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Login</a>
                        </li>
                        <li class="footer-list__item">
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>