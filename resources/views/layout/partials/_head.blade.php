<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" name="viewport" />
    <meta name="description" content="" />

    <title inertia>{{ config('app.name', 'BSS Timetable') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="250x250" href="{{asset('frontend')}}/assets/img/favicon/favicon.png" />
    <!--[if IE]><link rel="shortcut icon" href="{{asset('frontend')}}/assets/img/favicon/favicon.ico"/><![endif]-->
    <!-- Internet Explorer-->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('frontend')}}/assets/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('frontend')}}/assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('frontend')}}/assets/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="{{asset('frontend')}}/assets/img/favicon/site.webmanifest">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/scss/app.scss', 'resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="antialiased">
