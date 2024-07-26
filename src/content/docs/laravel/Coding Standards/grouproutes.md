---
title:  Grouping Routes
---

## Bad Practice
 Defining individual routes without grouping them

    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{user}', [UserController::class, 'update']);


## Good Practice
Grouping related routes using the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">Route::group</span> method.

	Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::put('/{user}', [UserController::class, 'update']);    
    });

