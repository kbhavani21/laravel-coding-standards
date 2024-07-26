---
title: Use the Artisan CLI tool
---
The artisan CLI tool has a lot of commands that can help scaffold a setup you want. For instance, instead of manually writing your migration files and creating the model, use the command:

        php artisan make:model Branding -m

There are several other artisan commands you can use, which include:

- The create Request command.

        php artisan make:request LoginRequest

- The optimization command, which can be used to clear cache.

        php artisan optimize:clear

- The command to run migrations

        php artisan migrate

- Also, the command to run the tests

        php artisan test




