---
title:  Implement the down() Migration method
---

Most developers often overlook implementing the <font color="green">down()</font>
 method in their migration file. This neglect can have significant consequences, particularly in successfully executing rollbacks. Therefore, it is a highly recommended Laravel best practice to always implement the <font color="green">down()</font> method for every <font color="green">up()</font> method in your migration file.

For instance, if you have an orders table migration file that creates a new column, <span class="text-green-700">fee</span>:


        return new class extends Migration
        {

            public function up()
            {
                Schema::table('orders', function (Blueprint $table) {
                    $table->unsignedInteger('fee')->default(0);
                });
            }
        ...
        };




You’ll need to implement the down() method, which negates the creation of the column fee.

        return new class extends Migration
        {

            public function up()
            {
            . . . 
            }

            public function down()
            {
                Schema::table('orders', function (Blueprint $table) {
                    $table->dropColumn('fee');
                });
            }
        }





