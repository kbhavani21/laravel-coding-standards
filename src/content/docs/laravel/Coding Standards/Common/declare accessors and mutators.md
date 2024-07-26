---
title: Use the new way of declaring accessors and mutators
---
 The new way of declarating [accessors and mutators](https://laravel.com/docs/11.x/eloquent-mutators#accessors-and-mutators) was introduced in Laravel 9.
**This is how you should declare them now:**

    use IlluminateDatabaseEloquentCastsAttribute;

    class Pokemon
    {
        function name() : Attribute
        {
            $locale = app()->getLocale();

            return Attribute::make(
                get: fn ($value) => $value[$locale],
                set: fn ($value) => [$locale => $value],
            );
        }
    }

**You can even cache expensive to compute values:**

    use IlluminateDatabaseEloquentCastsAttribute;

    function someAttribute() : Attribute
    {
        return Attribute::make(
            fn () => /* Do something. */
        )->shouldCache();
    }

**he old way looks like this:**

    class Pokemon
    {
        function getNameAttribute() : string
        {
            $locale = app()->getLocale();

            return $this->attributes['name'][$locale];
        }

        function setNameAttribute($value) : string
        {
            $locale = app()->getLocale();

            return $this->attributes['name'][$locale] = $value;
        }
    }


    