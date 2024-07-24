---
title: Avoid Not Using Unique Index on the DB Level
---
Often, we see people using Laravel Form Validation to validate if a field is unique like this:

```
$request->validate([
   'invoice_number' => ['required', 'unique:invoices'],
]);
```

And while it is a good thing to have - this comes with a drawback. Our database is not protected!

![No image](/src/assets/50_img1.png)

Why is that? Well - this only protects us from the submission of forms.

But what if someone adds the entry directly to the database like we did. The same applies if you create a unique table entry using <font color="green">Model::create()</font> - there is no protection. To solve this, we need to add a unique index to our database:

```
Schema::create('invoices', function (Blueprint $table) {
   $table->id();
   $table->string('invoice_number')->unique();
   // ...
});

```
Once this is done - it will not matter if the form is submitted or you are trying to insert the data directly into the database - it will always check if the value is unique. Let's look at this example from our database query:

![No image](/src/assets/50_img2.png)

And if we try to do that with our Model:

```
Invoice::create([
   'invoice_number' => '2023-11-000001'
]);

```

We will still get a database error:

![No image](/src/assets/50_img3.png)

<span class="font-semibold">Note:</span> This also prevents a race condition where two or more people attempt to simultaneously create the same unique value.