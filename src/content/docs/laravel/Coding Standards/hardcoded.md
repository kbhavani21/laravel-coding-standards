---
title:  Hard-Coded Paths/Values Instead of Helpers/Config
---

If you ever use the direct /storage/app/... path when saving files, it's a short-sighted code.

-   What if your teammate wants to save it in a different location?

-   What if future Laravel versions change that location?

-   What if your staging/production server needs to use the Amazon S3 driver? etc.

So, two things here:

Instead of hardcoded paths, Laravel has helpers like <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">storage_path(), app_path()</span>, etc.
    But generally, it should all be configurable in the config/filesystems.php, and you need to use only the driver which you use and it's not only about file storage. You shouldn't use hard-coded values such as timezone. Instead, it should be taken from <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">config('app.timezone')</span>.

Then the application will be much more flexible for use in other environments and by other developers.