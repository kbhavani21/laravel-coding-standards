---
title:  Database Queries
---

## Good Practice
Using Eloquent Relationships

        // app/Models/User.php
        namespace App\Models;

        use Illuminate\Database\Eloquent\Model;

        class User extends Model
        {
            public function posts()
            {
                return $this->hasMany(Post::class);
            }
        }

        // Fetching user with their posts
        $user = User::with('posts')->find(1);

## Bad Practice
Using Multiple Queries in a Loop

        $user = User::find(1);
        $posts = Post::where('user_id', $user->id)->get();
