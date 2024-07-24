---
title: Use the down() method correctly for rollbacks
---
The down() (used by the php artisan migrate:rollback command) is ran when you need to rollback changes you made to your database.

Some people use it, some don’t.

If you belong to the people who use it, you should make sure your <font color="green">down()</font> method is implemented correctly.

Basically, the<font color="green">down()</font> method must do the opposite of the <font color="green">up()</font> method.

    use IlluminateSupportFacadesSchema;
    use IlluminateDatabaseSchemaBlueprint;
    use IlluminateDatabaseMigrationsMigration;

    return new class extends Migration {
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            // The column was a boolean, but we want to switch to a datetime.
            $table->datetime('is_published')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            // When rolling back, we have to restore the column to its previous state.
            $table->boolean('is_published')->default(false)->change();
        });
    }
}


A middleware can be attached to any number of routes, which helps you prevent code duplication.