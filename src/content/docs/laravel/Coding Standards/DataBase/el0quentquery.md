---
title: Use Eloquent instead of Query Builder and raw SQL queries
---
Eloquent allows you to write readable and maintainable code. It comes with useful tools like <a href="https://www.markdownguide.org" target="_blank">soft deletes</a>, <a href="https://www.markdownguide.org" target="_blank">events</a>, <a href="https://www.markdownguide.org" target="_blank">scopes</a>, etc., and will enable you to set conditions for your database table queries to ensure your table's data stays correct. It simplifies managing relationships between models.

You don't need to write complex SQL code when you have Eloquent in Laravel. For instance, if you want to fetch a list of products and their categories, filter by availability and sort them by the most recent. Instead of using the SQL query like this:

        SELECT *
        FROM `products`
        WHERE EXISTS (SELECT *
                    FROM `categories`
                    WHERE `products`.`category_id` = `categories`.`id`
                    AND `categories`.`deleted_at` IS NULL)
        AND `is_available` = '1'
        ORDER BY `created_at` DESC

You simply use this:

        Product::has('category')->isAvailable()->latest()->get();

Both code snippets are retrieving products that have a related category, are marked as available, and are sorted in descending order by creation time. While the first snippet uses raw SQL, the second uses the Eloquent method chaining to apply these conditions, making the intent of the code more explicit and easier to understand.
