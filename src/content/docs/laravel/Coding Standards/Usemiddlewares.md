---
title:   Use middlewares instead of repeating code

---

Middlewares in Laravel allow you to filter or modify the current request. Here are some use cases:


Checking for the required permissions;
    Check the user’s language and change the locale accordingly.

And as you expected, Laravel comes with a bunch of middlewares out of the box for authentication, rate limiting, and more.

Once your middleware did what it’s supposed to do, you can either block the request or let it go through.

    public function handle(Request $request, Closure $next) : Response
    {
        if (! $request->user()->hasEnoughTokens()) {
            abort(403);
        }

        return $next($request);
    }


A middleware can be attached to any number of routes, which helps you prevent code duplication.