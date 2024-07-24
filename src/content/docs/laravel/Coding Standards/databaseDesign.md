---
title:  Rushing the Database Design
---
In forums - rushed database designs. And while this sometimes is unavoidable - it still has repeating patterns:

- Not enough time spent on the planning phase
- Not enough research has been done on the system
- No plans for future development
- Focusing on small things too much (like naming conventions)
- Super complex queries in the system (often with no comments)
- No documentation on the database structure
- And so on...

These mistakes do not come from a lack of knowledge. Instead, it all comes from a viewpoint. For example, there is a big difference in choosing a relationship type. You might get away with <font color="green">belongsTo</font> today, but tomorrow you might need <font color="green">belongsToMany</font>. And if you did not plan for that - you will have to rewrite a lot of code. The same goes for any fields and tables in your database. Here's what we recommend:

1. <span class="font-semibold">Spend more time on the planning phase.</span> This will help you understand the system better. For example, if you are building a CRM system - you should spend time understanding what kind of data you will have and how you will use it.
2. <span class="font-semibold">Look at the project UI/description first.</span>This will drive the need for fields and tables. For example, if you are building a custom application - figure out the use cases first and then make the surrounding database.
3. <span class="font-semibold">Think about the use cases.</span>Take time to consider what you will need in the future. For example, your users can buy tickets, but what if they want to purchase multiple tickets? Or what if they're going to buy tickets for multiple people?
4. <span class="font-semibold">Play around with fake queries.</span> This helps you see the flow of data you might have. For example, take the UI page for statistics and try to build a query for it. This will help you understand what feels correct/wrong, and you can adjust from there.
5. <span class="font-semibold">Focus on things that matter.</span> This avoids the overhead you might have at an initial stage. For example, if the table is accessed a few times a day - spend less time on it. But if you have a table accessed a lot - spend more time on it.