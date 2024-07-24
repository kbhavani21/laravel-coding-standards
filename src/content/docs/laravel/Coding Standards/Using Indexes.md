---
title : Avoid Not Using Indexes
---

Indexing in Databases is often looked at as something that has to be done in massive projects, so they are skipped at the initial step. But what does it really do to our systems? Let's look at an example:

- We have a Client table with 10 000 records
- We have an Orders table with 1 000 000 records (100 orders per client)


And we want to load the order count for each of our Clients to display it on our table. This seems fine, as we can use code like this:

**Migration**

    Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('client_id');
    // ...
    });


**Controller**

    $clients = Client::withCount('orders')->paginate(50);

In this example, we ignored the index on our <font color="green">client_id</font> n the orders table. Let's load the page and check the debug bar:

![Using Indexes explaination](/src/assets/44_img1.png)

Looking closely, it takes <font color="green">3.87s</font> o load the count! That's A LOT OF TIME to do this kind of operation. Now let's try to add an Index to our <font color="green">client_id </font> column:


    Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('client_id');
    $table->index('client_id');
    // ...
    });

**And re-run the same code again:**

![Using Indexes explaination](/src/assets/44_img2.png)

As we can see now, this runs in <font color="green">1.96ms -</font>which is way faster than what we had before. This is because Indexes help us make a map (a lot of generalization here, but treat it like a directory of where to find what value in your database) of our data. This helps the database to run faster.



