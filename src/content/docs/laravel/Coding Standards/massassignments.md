---
title: Take advantage of mass assignments
---
In Laravel, mass assignments are useful to avoid scenarios where users might unintentionally alter sensitive data, such as passwords or admin status. For instance, suppose you have a product that you want to save in the<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">Product</span> model. Instead of using the following code:

        $product = new Product;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->save();

You can use the<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">create</span> static method from the model class and pass in the validated request array like so;

        Product::create($request->validated());

This method handles mass assignment.
