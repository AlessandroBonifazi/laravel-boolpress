@extends('layouts.front-app')

@section('content')
    guest
<a href="{{ route('admin.posts.index') }}">Home</a>
@endsection