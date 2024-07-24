---
title:   Use middlewares instead of repeating code

---
Using policies for authorization in Laravel is essential for maintaining an organized and maintainable application. Here are three key reasons to use policies:

Reuse authorization logic across multiple controllers: By centralizing authorization rules, you can ensure consistency and avoid duplicating code in different parts of your application.
Offload code from bloated controllers: Moving authorization logic to policies helps keep your controllers lean, focused on their primary responsibilities, and easier to read and maintain.
Easily locate authorization-related code: Storing policies in the app/Policies folder makes it simple for developers to find and update authorization rules as needed.

Let’s look at a real-world example of using a policy:

        // app/Policies/PostPolicy.php
        public function update(User $user, Post $post)
        {
            return $user->id === $post->user_id;
        }

        // app/Http/Controllers/PostController.php
        public function update(Request $request, Post $post)
        {
            $this->authorize('update', $post);

            // ...
        }




