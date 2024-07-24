---
title: Prevent N+1 issues with eager loading
---
Ever heard about N+1 problems? Eager loading is a great solution to avoid them.

N+1 problem with Eloquent

Let’s say you are displaying a list of 30 posts with their author:

Eloquent will make one query for those 30 posts;
Then, 30 queries for each author, because the user relationship is lazily loaded (meaning it’s loaded each time you call <font color="green">$post->user</font> in your code).

The fix is simple: use the <font color="green">with()</font> method, and you’ll go from 31 queries to only 2.


        Post::with('author')->get();


To ensure you don’t have N+1 problems, you can trigger exceptions whenever you lazy load any relationship. This restriction should be applied to your local environement only.


        Model::preventLazyLoading(
            // Returns `true` unless it's the production environment.
            ! app()->isProduction()
        );

