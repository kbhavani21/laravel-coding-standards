---
title:  Implement the down() Migration method
---

Most developers often overlook implementing the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">down()</span>
 method in their migration file. This neglect can have significant consequences, particularly in successfully executing rollbacks. Therefore, it is a highly recommended Laravel best practice to always implement the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">down()</span> method for every <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">up()</span> method in your migration file.

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





