---
title: Editing Old Migration Files
---
If you want to make a "quick fix" in the database structure, like changing a column type or making a field nullable, please don't do it by making changes in the old migration files.

By "old", I mean - if the Migration has been executed at least once on your computer or another server, it's already processed.

If you make a change in an already "processed" migration file, the next time you run php artisan migrate, Laravel will not "catch" that change because, well, it's already marked as processed in the migrations DB table.

So you're risking that when you push your changes to the repository, the DB migrations will not be executed correctly on the staging/live server or for other teammates on their servers.

So the correct way is to create a new migration file.

Yup, even if you need to change something that was created recently, the safest way is a new migration.

For example, if you created a ->string() field and want to change that to ->text(), create a new migration, assuming that the field already exists.

Another alternative, if the changes haven't been pushed to the repository or other servers/teammates, is to use<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">php artisan migrate:rollback</span> , then make the change in the migration file, and run php artisan migrate again. But for that to work, you must be sure that your<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">down() </span> method is accurate and that you haven't run those migrations elsewhere.

Oh, and by the way, should I even mention that you should never make DB changes manually via SQL client? Always use Laravel migrations for any DB structure changes. Otherwise, any manual changes will be lost on other servers.

