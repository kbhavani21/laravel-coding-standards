---
title: Forgetting Nullable - Not All Fields Are Required
---
One mistake that can send you into a giant rabbit hole is forgetting to make fields nullable. We often think that all fields are required, but there are a few cases where this might not be true. Let's look at both of them:

## Case 1: Adding new Relationship

When you want to add a relationship to an existing site, remember that it is usually constrained by a foreign key. This means that if the relationship is not <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">nullable,</span> you will see issues like this in your migrations:

![No image](/images/51_img1.png)


Why did this happen? Well, we already have data in our system, but now attempted to add another relationship like this:

**Migration**

```
Schema::table('clients', function (Blueprint $table) {
   $table->foreignIdFor(ClientTag::class)->constrained();
});
```
This causes a problem with our old records. As we have data already:

![No image](/images/51_img2.png)

They will not have this relationship in place (as you can see, it failed and has 0 there...), so we have to make it nullable:

**Migration**

```
Schema::table('clients', function (Blueprint $table) {
   $table->foreignIdFor(ClientTag::class)->constrained();
   $table->foreignIdFor(ClientTag::class)->nullable()->constrained();
});
```
Now, it will allow our migration to pass without triggering any errors. This common mistake can be easily avoided by ensuring all new relationships are nullable. If that is not possible, add a default value to your fields.

## Case 2: Big Data Imports

Another issue that can be resolved with nullable fields - import failures. This often happens due to somehow malformed data in our CSV files. For example, if we have a CSV file like this:

```
id,first_name,last_name
1,John,Doe
2,Jane,Doe
3,Tom,
4,,Johnson
```
You can try to import it into your database, but you will get an error like this:

![No image](/images/51_img3.png)

This happened because of two things:

First - we have <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">first_name</span> and <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">last_name</span> as non-nullable fields in our database:

```
Schema::create('clients', function (Blueprint $table) {
   $table->id();
   $table->string('first_name');
   $table->string('last_name');
   $table->timestamps();
});
```

Second - we have our import script that handles missing values as null:

```
Schema::create('clients', function (Blueprint $table) {
   $table->id();
   $table->string('first_name');
   $table->string('last_name');
   $table->timestamps();
});
Second - we have our import script that handles missing values as null:
private function importData(array $row): void
{
   Client::create([
       'first_name' => $row['first_name'] ?: null,
       'last_name' => $row['last_name'] ?: null,
   ]);
}
```

Both of these issues can be solved by making our fields nullable:

```
Schema::create('clients', function (Blueprint $table) {
   $table->id();
   $table->string('first_name');
   $table->string('last_name');
   $table->string('first_name')->nullable();
   $table->string('last_name')->nullable();
   $table->timestamps();
});
```

Re-running our import script will now work as expected:

![No image](/images/51_img4.png)

That's it. Adding nullables is a great way to avoid issues with your database. 