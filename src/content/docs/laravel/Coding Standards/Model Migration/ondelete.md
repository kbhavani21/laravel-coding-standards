---
title : Avoid Not Using "ON DELETE" Actions

---

When defining a foreign key - we tend to ignore cascading actions and leave it as it is. But that causes another typical mistake to happen:

![on Delete explaination](/src/assets/46_img1.png)

This mistake happens when we try to delete a User from our database, but this user has some Posts. And since we did not inform our database what it should do once this happens - it just throws an error.

To fix this, we can implement "OnDelete" actions, like <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">cascade</span>:

    Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();
    // ...
    });

Now, if we attempt to delete a User with Posts, it will also delete all the Posts. This is a handy feature, but you can also use other options:

- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">cascadeOnDelete() -</span> This will delete all related entries once the parent is deleted
- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">restrictOnDelete() -</span> This will throw an error if there are any related entries (this is the default behavior)

- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">nullOnDelete() - </span> This will set all related entries to <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">null</span> once the parent is deleted (this requires the column to be nullable!)


These options handle different scenarios, so you must choose the best one that fits your needs. But remember - always choose one of these options, as it will help you to avoid errors in your system.


## Note on Soft Deletes

Due to how the database works - the cascading actions will not cover Soft Delete models. Cascading only works with full deletes. So if you have a User with Posts and Soft Delete the User - the Posts will remain there.


Soft Delete is a Laravel feature, not a Database feature. So, if you want to delete all related entries, you must do it manually. There's also a package [cascade-soft-deletes](https://github.com/michaeldyrynda/laravel-cascade-soft-deletes) that can help you.

