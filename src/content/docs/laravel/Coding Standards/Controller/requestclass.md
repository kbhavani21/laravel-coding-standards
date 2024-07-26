---
title: Carry out validation in request classes
---
Validation is crucial when handling user input in your Laravel application to ensure data consistency and prevent errors. Inline validation rules in controller methods can become cumbersome and repetitive. To address this, Laravel provides FormRequest classes that allow you to define validation rules in a centralized and reusable way

Previously, you might have written validation rules directly in your Controller method like this:

        public function store(Request $request)
        {
            $request->validate([
                'slug' => 'required',
                'title' => 'required|unique:posts|max:255',
                ...
            ]);
        }

Instead, create a dedicated FormRequest class using the artisan CLI tool:

        php artisan make:request StoreRequest

In this class, define your validation rules:

        class StoreRequest extends FormRequest
        {
            ...
            public function rules(): array
            {
                return [
                    'slug' => 'required',
                    'title' => 'required|unique:posts|max:255',
                    ... 
                ];
            }
        }

Then, update your controller method to use the FormRequest class that you created:

        public function store(StoreRequest $request)
        {
            ...
        }

By using FormRequest classes, you can decouple validation logic from your controller and reuse these rules across your application. This approach promotes cleaner code, reduces duplication, and makes maintenance easier.


