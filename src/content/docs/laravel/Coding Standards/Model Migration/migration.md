---
title:   Migrations
---

## Migration Naming

**Good Practice: table creation - descriptive name**

        php artisan make:migration create_users_table
    

**Bad Practice: table creation - non-descriptive name**

        php artisan make:migration migration1


## Schema Definitions

**Good Practice: Using Schema Builder Methods for Column Types**

        public function up()
            {
                Schema::create('users', function (Blueprint $table) {
                    $table->id();
                    $table->string('name');
                    $table->string('email')->unique();
                    $table->timestamp('email_verified_at')->nullable();
                    $table->string('password');
                    $table->rememberToken();
                    $table->timestamps();
                });
            }

            public function down()
            {
                Schema::dropIfExists('users');
            }

    

**Bad Practice: Using Raw SQL for Schema Definitions**

        public function up()
            {
                DB::statement('
                    CREATE TABLE users (
                        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) UNIQUE NOT NULL,
                        email_verified_at TIMESTAMP NULL,
                        password VARCHAR(255) NOT NULL,
                        remember_token VARCHAR(100) NULL,
                        created_at TIMESTAMP NULL,
                        updated_at TIMESTAMP NULL
                    );
                ');
            }

            public function down()
            {
                DB::statement('DROP TABLE users');
            }


## Adding Indexes and Foreign Keys

**Good Practice: Adding Indexes and Foreign Keys Appropriately**

        public function up()

            {
                Schema::create('posts', function (Blueprint $table) {
                    $table->id();
                    $table->foreignId('user_id')->constrained()->onDelete('cascade');
                    $table->string('title');
                    $table->text('content');
                    $table->timestamps();
                });
            }


    

**Bad Practice: Omitting Indexes and Foreign Keys**

        public function up()
            {
                Schema::create('posts', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('user_id');
                    $table->string('title');
                    $table->text('content');
                    $table->timestamps();
                });
            }





