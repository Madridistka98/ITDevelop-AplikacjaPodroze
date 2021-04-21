@extends('layouts.app')

@section('content')
<div style="background-color: rgba(.7, .7,.7,.6)"class="bg-gray d-flex flex-column align-items-center justify-content-around full-height">
    <h1 class="display-1">Maintenance mode</h1>

    <div>
        {{-- <img src="/static/images/dino_robot_1.png" alt="dino_robot" class="img img-fluid"> --}}
        <p class="h1">
            The website is in maintenance mode. 
            Sorry for the inconvenience
        </p>
        <p class="h1 text-right mt-3">
           Dino travel  team
        </p>
    </div>
    
</div>
@endsection