---
title:  Soft Deletes
---

## Bad Practice
Deleting records permanently.

        User::find($userId)->delete();


## Good Practice
Using soft deletes to preserve data.

        use Illuminate\Database\Eloquent\SoftDeletes;
        class User extends Model
        {
            use SoftDeletes;
        }
        User::find($userId)->delete();



