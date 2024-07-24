---
title: Not Refactoring Repeatable Code, like Scopes
---
This one is not that much about Laravel. It's more like a common bad coding practice.

If you use the same <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">->where()</span> condition in multiple Eloquent queries in at least a few places in the code, it's a candidate for refactoring into a specific function to avoid repeating yourselves.

In Laravel, such repeating conditions in Eloquent are called Local Scopes.

        class User extends Model
        {
            public function scopeActive(Builder $query): void
            {
                $query->where('active', 1);
            }
        
            // ...
        }
        
        // Then in Controller:
        $users = User::active()->get();

But the message here is not just about Scopes. It's about any repeating code that likely needs to be moved into one place.

Otherwise, if we want to make a change in that code, we may perform it on one occasion but forget to apply the same changes in other files.




