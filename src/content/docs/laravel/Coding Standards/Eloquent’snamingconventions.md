---
title: Use Eloquent’s naming conventions for table names
---
Laravel’s naming conventions for tables is easy and one best practice that will simplify your team’s life.

First, let me remind you that the framework does it all for you when you’re using Artisan commands like <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">php artisan make:model Post --migration --factory</span>.

For whatever reason, if you can’t use those commands, here’s an overview:

For a Post model, name your table posts. Basically use the plural form (comments for Comment, replies for Reply, etc.);

For a pivot table linking a Post to a Comment (e.g. comment_post):

-   Use both names
-   Singular form
-   Alphabetic order
