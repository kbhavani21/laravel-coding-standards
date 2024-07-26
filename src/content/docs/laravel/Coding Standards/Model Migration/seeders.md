---
title:   Seeders
---

## Configuring Seeder Data

**Good Practice: Parameterizing Seeder Data**

    public function run()
        {
            $userCount = config('seeder.user_count', 10);
            User::factory()->count($userCount)->create();
        }
    

**Bad Practice: Hardcoding Seeder Data**

     public function run()
        {
            User::factory()->count(50)->create();
        }

## Structuring Seeder Files

**Good Practice: Keeping Seeders Modular and Focused**

    public function run()
        {
            $userCount = config('seeder.user_count', 10);
            User::factory()->count($userCount)->create();
        }
    

**Bad Practice: Mixing Data Types in a Single Seeder**

        public function run()
            {
                User::factory()->count(10)->create();

                foreach (User::all() as $user) {
                    Post::factory()->count(5)->for($user)->create();
                }
            }

## Ensuring Data Integrity

**Good Practice: Using Transactions to Ensure Data Integrity**

        public function run()
            {
                DB::transaction(function () {
                    $this->call([
                        UserSeeder::class,
                        PostSeeder::class,
                    ]);
                });
            }

    

**Bad Practice: Not Using Transactions**

        public function run()
            {
                $this->call([
                    UserSeeder::class,
                    PostSeeder::class,
                ]);
            }




