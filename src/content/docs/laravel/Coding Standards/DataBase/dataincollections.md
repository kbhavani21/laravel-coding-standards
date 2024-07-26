---
title: Dont Filter Data in Collections Instead of DB
---

Let's get back to the topic of Eloquent. Have you ever seen something like this?

## $activeUsers = User::all()->where('active', 1);

Of course, it looks bad: you download ALL the data from the server, even if it's millions of rows, and then filter what you need on the PHP level.

Instead, of course, you should filter on the DB level because that's what the DBs were built for.

## $activeUsers = User::where('active', 1)->get();

And this is an obvious example. But there are more real-life cases where developers try to use Collection methods like <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">filter()</span>, <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">map()</span>, and others instead of using conditions before calling the -><span class="text-[13px] bg-[#EDEEF3] px-2 py-1">get()</span>.

