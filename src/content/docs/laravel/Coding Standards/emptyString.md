---
title:  Storing Empty Strings Instead of Null
---
Have you ever looked at a database and seen something like this?

![No image](/src/assets/53_img1.png)

And then you visit migrations in the hope of understanding what is going on, but you see this:

```
Schema::create('posts', function (Blueprint $table) {
   $table->id();
   $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();
   $table->string('title');
   $table->text('content');
   $table->string('summary');
   $table->string('excerpt');
   $table->string('seo_title');
   $table->string('seo_description');
   $table->string('seo_keywords');
   $table->datetime('published_at')->nullable();
   $table->timestamps();
}); 
```
And you realize that all fields <span class="font-semibold">should have values</span>, but none of them do. And while this works - <span class="font-semibold">it is not recommended</span> as this often means - you need better database design. It often hides issues within the system, making it harder to use. Solving this is as simple as adding <font color="green">->nullable()</font> to your fields:

```
Schema::create('posts', function (Blueprint $table) {
   $table->id();
   $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();
   $table->string('title');
   $table->text('content')->nullable();
   $table->string('summary')->nullable();
   $table->string('excerpt')->nullable();
   $table->string('seo_title')->nullable();
   $table->string('seo_description')->nullable();
   $table->string('seo_keywords')->nullable();
   $table->datetime('published_at')->nullable();
   $table->timestamps();
});
```

And now, you have a database that expects columns to contain empty values. Even future developers will be happy as there is no more need for <font color="green">->update(['content' => ''])</font> hacks in your code. It can just be skipped, and it will be handled by the database itself.
