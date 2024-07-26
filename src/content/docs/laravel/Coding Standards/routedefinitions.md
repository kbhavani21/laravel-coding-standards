---
title:  Route Definitions
---

## Bad Practice
Defining routes directly in the web.php file without using controllers.

        Route::get('/users', function () {
            return User::all();
        });


## Good Practice
Using controllers to handle the logic.

        Route::get('/users', [UserController::class, 'index']);

