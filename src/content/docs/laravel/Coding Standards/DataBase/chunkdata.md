---
title: Chunk data for heavy data tasks
---
When processing a large amount of data from the database, instead of fetching the data and running a loop through the large data like this:

        $products = Product::all() /* returns thousands of data */
        foreach ($products as $product) {
            ...
        }

Use the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">create</span> method by specifying a fixed amount you want to process at a time and the closure for processing. Here is an example:

        Product::chunk(200, function ($products) {
            foreach ($products as $product) {
                // Perform some action on the product
            }
        });
