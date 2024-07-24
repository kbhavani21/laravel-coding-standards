---
title: Avoid Not Following DB Normalization
---

When starting a new database design, following [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization) is essential. But what does it mean in practice? What is <font color="green">normal</font> in this case? Let's look at a few common mistakes that should be avoided.

Take a look at this database example:

![No image](/src/assets/47_img1.png)

Do you see something wrong with it? If yes - fantastic, you have a good eye! If not, here's the list:

- We have multiple fields containing comma-separated values - These will be hard to work with. For example, if we want to find a product with a specific SKU number - we will have to do a full-text search, which is slow.

- We have supplier information in this table - What happens if the product has more than 1 supplier? We will have to duplicate the product information for each supplier. This will cause a lot of data duplication and make it hard to maintain.

- We have carrier information in this table - If this product has more than one carrier, we must duplicate it. Or add comma-separated values. This could be better.

To normalize this table - we have to perform a few actions, so let's talk about the decisions we had to make:

- SKU has to become a separate table. This will allow us to have multiple SKUs for a single product with a relationship <font color="green">hasMany</font>. We will gain faster filters and more control over our queries.

- Category has to become a separate table. This will make our life easier to display products that match the same category. Most likely, this should be a <font color="green">belongsToMany</font> relationship.

- Tags should also become a separate <font color="green">belongsToMany</font> table. This will allow us to quickly retrieve all products within a specific tag.

- Prices can either become a separate table or join our SKUs table. This depends on our business logic. Each SKU has a price for simplicity, so we will move them together.

- Supplier becomes a separate table. This will allow us to have multiple suppliers for a single product. This will also allow us to have a <font color="green">belongsToMany</font> relationship, as one supplier can have multiple products, and one product can have multiple suppliers.

- Supplier phones should also be moved to the suppliers table. They are a pair and should be together.

- Carrier becomes a separate table. This will allow us to have multiple carriers for a single product. This will also allow us to have a <font color="green">belongsToMany</font> relationship, as one carrier can have multiple products, and one product can have multiple carriers.

With all that done, we can work with our data more efficiently. We can now easily find products with specific SKUs, Category, Tag, Supplier, or Carrier. We can also easily find all products with a particular Supplier or Carrier.

This is a lot of flexibility that we gain by following normalization rules. And I'm not even talking about the performance gains you will get - as you will have to do fewer full-text searches!

Here's what our database can look like after normalization:

![No image](/src/assets/47_img2.png)

And while this required a lot more tables - everything is now in its own place, and we can efficiently work with our data in any way we want.