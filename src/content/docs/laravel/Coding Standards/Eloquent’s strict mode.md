---
title: Use Eloquent’s strict mode to prevent performance issues and bugs
---
Eloquent’s strict mode is a blessing for debugging.

It helps developers catch potential issues during the development phase by throwing exceptions in the following cases:

## Lazy loading relationships: 
Lazy loading can lead to performance issues, especially when dealing with large datasets. It occurs when related models are not retrieved from the database until they are explicitly accessed. In strict mode, an exception will be thrown if a relationship is lazily loaded, encouraging developers to use eager loading instead.

## Assigning non-fillable attributes:
The <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 ">$fillable</span> property on Eloquent models protects against mass assignment vulnerabilities. An exception will be thrown when trying to assign a non-fillable attribute, ensuring that developers handle mass assignment carefully.

## Accessing attributes that don’t exist (or weren’t retrieved): 
Accessing non-existent attributes or attributes that haven’t been retrieved from the database can lead to unexpected behavior or bugs. Strict mode will throw an exception in these cases, helping developers identify and fix such issues.

To enable it, add this code in the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 ">boot()</span> method of your AppServiceProvider.php:

    Model::shouldBeStrict(
    // It will only be enabled outside of production, though.
    ! app()->isProduction()
    );

