@extends('layouts.app')


@section('content')
    @include('layouts.navigation')
    @include('profile.form')
    @include('profile.calendar')
    @include('layouts.footer')
@endsection
