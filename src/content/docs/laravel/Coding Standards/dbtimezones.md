---
title: Avoid Mixing Laravel and DB Timezones
---

One of the biggest misconceptions about databases is timezones. People think you need to set the timezone in your application, and everything will work.

But often, we must remember that having the same settings for our database engine and our Laravel application is mandatory.

Let's look at an example:

-   Our database <font color="green">runs on Europe/Vilnius</font> timezone, set in the DB settings
-   Our Laravel application runs on UTC<font color="green">UTC</font> timezone, set in the <font color="green">config/app.php</font>

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

- ID <font color="green">->1</font> has Europe/Vilnius timezone as it was created in the database by running a query there
- ID <font color="green">->12</font> has UTC timezone as it was created by the Laravel application

This can lead to many issues and things that happen at unexpected times. For example, if this was a notification to be pushed out - we would have 2 different outcomes.

Now, if we set the timezone on our application and database to be the same - this will never be an issue.

<span class="">Note:</span> Avoid changing your Database or Laravel timezone settings if you already have a live application, as it will lead to incorrect times.


