---
title: Always use the most stable release
---

The most recent version of Laravel, Laravel 11.x, was released on March 12th, 2024. This new release includes some important updates, which can be found here. These updates include:

Opt-in API and broadcast routing: Before version 11, when you created a new Laravel project, it set up the API and broadcast routing. But for the Laravel 11, these routings are optional and can be added using the artisan command:

        php artisan install:api
        php artisan install:broadcasting

Make sure to follow the new process and steps outlined in the release documentation.

Simplified base controller class: The AuthorizesRequests and ValidatesRequests traits have been removed. If you need them, you’ll have to manually add them. Also, the base Controller class no longer extends the Laravel internal Controller class.


