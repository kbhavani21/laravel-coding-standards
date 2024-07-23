---
title: Should not use  env() Outside Config Files
---
## This code in Blade is considered a bad practice:

      < title> {{ env('APP_NAME', 'My project') }} < /title> 


## Instead, you should do this:

<title>{{ config('app.name') }}</title>



Then, define the config file value using the same <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">env()</span> and the "My project" fallback value on the config level.

## config/app.php:


        return [
            'name' => env('APP_NAME', 'My project'),
            ];


