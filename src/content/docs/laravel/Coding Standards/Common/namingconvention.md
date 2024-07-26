---
title:  Following Laravel Naming Conventions
---
In general, Laravel doesn't restrict you very much from naming <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">variables/classes</span> and other things. Still, the rule of thumb is this: the more you stick to general conventions, the more Laravel features will "just work" without additional configuration.

## Examples of non-conventional names
-   Naming classes, DB tables, Models, or smth else in non-English language
-   Naming many-to-many pivot tables like "users_roles" instead of "role_user"
-   Naming the primary key different than "id" without the need
-   Naming Eloquent Models in Plural: "class Users" instead of "class User" etc.

Yes, there are specific reasons for naming things your way, if you know what you're doing.

And yes, you can specify what you named in various <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">Laravel/Eloquent</span> configurations and properties, but why not avoid the extra work?


