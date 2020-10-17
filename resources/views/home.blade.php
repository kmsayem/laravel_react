<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> -->
        <link rel="icon" type="image/png" sizes="32x32" href="{{asset('favicon.png') }}"/>
        <link href="{{asset('css/app.css') }}" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" async/>
        <link async rel="stylesheet" href="{{asset('css/ionicons.min.css')}}" />
        <link rel="stylesheet" href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
    </head>
    <body>
        <div id="example"></div>
        <script type="text/javascript" src="{{asset('js/app.js') }}"></script>
    </body>
</html>
