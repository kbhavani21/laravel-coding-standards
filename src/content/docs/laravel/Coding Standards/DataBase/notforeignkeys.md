---
title:  Not Adding DB Foreign Keys
---
 In Migration, the relationship can be created as just a column without the foreign key:

        // No ->foreign():

        $table->unsignedBigInteger('user_id');

And the Laravel code would still work.

But then, if you try to delete a record, the database will not protect you from accidentally deleting a record that should NOT be deleted because of related records.

That's what constraints are for, like RESTRICT/CASCADE on delete/update.

So, a better way is this:

        $table->foreignId('user_id')->constrained();
:::note
This one is a bit debatable because some database engines work well without foreign keys and solve the same problem from a different angle.
:::


