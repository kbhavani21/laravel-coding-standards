---
title : Avoid Not Using Foreign Keys
---

When defining the relationships, some developers forget to add foreign key definitions to the database. Let's look at an example:


    Schema::create('clients', function (Blueprint $table) {
        $table->id();
        $table->string('first_name');
        // ...
    });
    Schema::create('orders', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('client');
    // ...
    });

As you can see, no <font color="green">->foreign()</font> here.


This works fine for the most part, but once we have some clients and orders in our system - deleting a client will cause an issue:

![foreign key explaination](/src/assets/42_img1.png) 
<br>

If we look at our database, we can see that we still have an order with our deleted client:

![foreign key explaination](/src/assets/42_img2.png)

This issue happened because our database has no idea what to do in that scenario. All it thinks of - is that we have a number in our <font color="green">client</font> column, which is not tied to anything.<br><br>
You can solve this issue with foreign keys, as this will tell the database to check if the client exists before doing anything with the <font color="green">client_id column</font>. Let's look at an example:<br><br>


    Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('client_id');
    $table->foreign('client_id')->references('id')->on('clients');
    // ...
    });

Now we will do the same action - attempting to delete our client:

![foreign key explaination](/src/assets/42_img3.png)


This time, our deletion has failed, but our Orders table is still working:

![foreign key explaination](/src/assets/42_img4.png)

Why did this happen? Well, in the database, we have a <font color="green">constraint</font> added. This limits what action can happen with our parent resource.


In our case, we can only delete a Client after first deleting all their orders. Of course, you need to handle this error with a <font color="green">try-catch </font> block, but this provides a better development experience.

Even if you forget about this - Database has your back! It might break the user experience, but this will prevent bigger collapses in your system.

##  Notice: Foreign Key Column Names

There is one small thing to note here - column naming. In our example, we used <font color="green">client</font>, which is okay to use, but standard practice is to use the singular form of the table name suffixed with <font color="green">_id</font>. So, in our case, it would be:


    Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('client_id');
    $table->foreign('client_id')->references('id')->on('clients');
    // ...
    });

**Or, shorter:**

    Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->foreignId('client_id')->constrained();
    // ...
    });

While this is a personal preference - it does help you to understand what the column is for. If you have <font color="green">client-</font> you might think it's some identifier for the client (especially in bigger databases), but if you have <font color="green">client_id -</font> you know it's a foreign key to the <font color="green">clients</font> table. A quick look at a database like this - points us in the right direction:


![foreign key explaination](/src/assets/42_img5.png)


