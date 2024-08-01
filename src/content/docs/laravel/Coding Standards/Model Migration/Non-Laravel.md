---
title : Avoid "Non-Laravel" Table Names for Pivot Tables
---

Laravel has a particular way to form many-to-many Pivot tables to auto-resolve them. Let's look at an example:

- We have a <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">clients</span> table
- We have a <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">orders</span> table

What should our Pivot table name be?

- client_order
- order_client
- clients_orders
- orders_clients
- etc...


In this case, Laravel would expect it to be<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">client_order</span> , and if we follow that, we can define our relationship like this:

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


Now, let's do an example where we have a different table name, in this case <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">-client_order.</span>

What will happen then? Well, our relationship will break:

![Non Laravel explaination](/images/45_img1.png)

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

