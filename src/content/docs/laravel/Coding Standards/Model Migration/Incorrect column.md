---
title : Avoid Incorrect Column Types

---

Another common issue with Database design is wrong column types, like creating an <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">int</span> field but needing to add <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">floats</span> later on.


One specific case is quite common <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">- varchar</span> fields with comma-separated values instead of using relationships. Let's look at an example:

    Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->string('client_id');
    // ...
    });


**This seems fine, right? Well, it probably is okay until you have something like this:**

![Incorrect Column explaination](/images/43_img1.png)

What do we have here? We have a list of related IDs in the format of a string. We have seen this used as a way to have <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">one-to-many</span> relationships.

For example, we would expect our order to have multiple Clients. But this is different from how it works. This is just a string, and if you try to use it as a relationship:


**Model**

    // ...
    
    public function client()
    {
    return $this->belongsToMany(Client::class);
    }
    
    // ...

**You will get an error like this:**

![Incorrect Column explaination](/images/43_img2.png)

Even if you try to use this as a <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">belongsTo </span>relationship like this:


You will still have an issue where incorrect data will be loaded:

![Incorrect Column explaination](/images/43_img3.png)

As you can see, it tries to find the client with an ID of <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">1, 2, 5, 9</span> or <span class="text-[13px] bg-[#EDEEF3] px-2 py-1"> 2, 3, 1, 4</span> and not the actual IDs. This is because Databases treat this as a string and not as a list of IDs. So what is the better option? Correctly defining this relationship and using a correct column type: <br><br>


    Schema::create('client_order', function (Blueprint $table) {
    $table->foreignId('client_id')->constrained('clients');
    $table->foreignId('order_id')->constrained('orders');
    });


**This will produce a Database schema like this:**

![Incorrect Column explaination](/images/43_img4.png)

This helps you avoid common mistakes and also allows you to control your data in a better way.

