---
title: Avoid No Timestamps or Primary Keys in Pivot Tables
---
When creating pivot tables, we often skip adding timestamps or primary keys. This is because we think that we don't need them. But there may be cases when it's not true. Let's look at an example:

In our system, we have products and categories. Product has many categories - the typical scenario that looks like this in our database:

![No image](/images/49_img1.png)

It works as we would expect. But today, a new requirement came - we need to sort the categories by the time they were attached. And now - we have an issue. We have no idea when these categories were added. So what can we do here? Well, we can add timestamps to our pivot table:

![No image](/images/49_img2.png)

Now, we can order our categories by the time they are added. This dramatically improves the potential for data access and control in your application.

A similar thing happens with primary keys - they prevent an issue where if you accidentally create a duplicate entry - you won't be able to delete it anymore. Adding a primary key gives your records an identifier and prevents this issue.

<span class="font-semibold">Note:</span> While it is debatable if you should use timestamps in pivot tables - they solve more problems than they create. So, we recommend using them for all pivot tables. If not for ordering - you still can see when something was attached to something else.