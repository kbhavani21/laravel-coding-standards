---
title : Avoid "Non-Laravel" Table Names for Pivot Tables
---

Laravel has a particular way to form many-to-many Pivot tables to auto-resolve them. Let's look at an example:

- We have a <font color="green">clients</font> table
- We have a <font color="green">orders</font> table

What should our Pivot table name be?

- <font color="green">client_order</font>
- <font color="green">order_client</font>
- <font color="green">clients_orders</font>
- <font color="green">orders_clients</font>
- etc...


In this case, Laravel would expect it to be <font color="green">client_order</font> , and if we follow that, we can define our relationship like this:

**Client Model**

    public function orders(): BelongsToMany
    {
    return $this->belongsToMany(Order::class);
    }


**Order Model**

    public function client(): BelongsToMany
    {
    return $this->belongsToMany(Client::class);
    }


Now, let's do an example where we have a different table name, in this case <font color="green">-client_order.</font>

What will happen then? Well, our relationship will break:

![Non Laravel explaination](/src/assets/45_img1.png)

Now, it is not such a big deal at the Database level, but on our Laravel side - we have to add a table name to our relationship:

**Client Model**

    public function orders(): BelongsToMany
    {
    return $this->belongsToMany(Order::class, 'client_orders');
    }

**Order Model**

    public function client(): BelongsToMany
    {
    return $this->belongsToMany(Client::class, 'client_orders');
    }

It doesn't seem like a big deal. Still, it is a lot of extra code to write (especially if you have a lot of Models), and it can be easily avoided by following the naming convention.

