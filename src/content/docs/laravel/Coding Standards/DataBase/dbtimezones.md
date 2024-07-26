---
title: Avoid Mixing Laravel and DB Timezones
---

One of the biggest misconceptions about databases is timezones. People think you need to set the timezone in your application, and everything will work.

But often, we must remember that having the same settings for our database engine and our Laravel application is mandatory.

Let's look at an example:

-   Our database <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">runs on Europe/Vilnius<span> timezone, set in the DB settings
-   Our Laravel application runs on UTC<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">UTC<span> timezone, set in the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">config/app.php<span>

Running an update like this:

    update posts set published_at = now() where id = 1`

And then doing the same with Laravel:

``` 
Post::where('id', 12)
   ->update([
       'published_at' => now()
   ]);

```
Will produce different results:

![No image](/src/assets/48_img1.png)

- ID <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">->1<span> has Europe/Vilnius timezone as it was created in the database by running a query there
- ID <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">->12<span> has UTC timezone as it was created by the Laravel application

This can lead to many issues and things that happen at unexpected times. For example, if this was a notification to be pushed out - we would have 2 different outcomes.

Now, if we set the timezone on our application and database to be the same - this will never be an issue.

:::Note:
 Avoid changing your Database or Laravel timezone settings if you already have a live application, as it will lead to incorrect times.
 :::


