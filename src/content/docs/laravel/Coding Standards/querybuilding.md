---
title:  Query Building
---

## Bad Practice
 Writing complex queries directly in the controller.

        public function index()
        {
            $users = DB::table('users')
                    ->join('posts', 'users.id', '=', 'posts.user_id')
                    ->select('users.*', 'posts.title')
                    ->where('users.status', 'active')
                    ->get();

            return view('users.index', compact('users'));
        }


## Good Practice
Using Eloquent relationships and scopes.

        // In User model
        public function posts()
        {
            return $this->hasMany(Post::class);
        }

        public function scopeActive($query)
        {
            return $query->where('status', 'active');
        }
        // In the controller
        public function index()
        {
            $users = User::active()->with('posts:title,user_id')->get();
            
            return view('users.index', compact('users'));
        }




