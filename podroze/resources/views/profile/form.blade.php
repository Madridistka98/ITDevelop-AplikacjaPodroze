<section class="d-flex flex-column mb-3">
    <div class="my-5 mx-auto d-flex flex-column justify-content-center w-25">
        <img src="./static/images/icons/user_icon_big.png" alt="user icon" class="img img-fluid mx-auto w-50">

                <div class="form-group row mt-5">
                        <div class="col-12">
                                <input id="name" type="text" placeholder="Name" class="form-control rounded-pill " name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>                                  
                                <a class="btn btn-link text-success" href="#">
                                    {{ __('Change your name') }}
                                </a>
                        </div>
                </div>
                <div class="form-group row my-2">
                        <div class="col-12">
                                <input id="lasneName" type="text" placeholder="Last Name" class="form-control rounded-pill " name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>                                  
                                <a class="btn btn-link text-success" href="#">
                                    {{ __('Change your last name') }}
                                </a>
                        </div>
                </div>
                <div class="form-group row ">
                        <div class="col-12">
                                <input id="password" type="text" placeholder="Password" class="form-control rounded-pill " name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>                                  
                                <a class="btn btn-link text-success" href="#">
                                    {{ __('Change your password') }}
                                </a>
                        </div>
                </div>

    </div>
</section>