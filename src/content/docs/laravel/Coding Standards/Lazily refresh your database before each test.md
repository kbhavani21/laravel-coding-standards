---
title: Lazily refresh your database before each test
---

When you can get away with fake data in your local environment, the best thing to do is to test against a fresh database every time you run a test.

You can use the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 ">Illuminate\Foundation\Testing\LazilyRefreshDatabase</span> trait in your <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 ">tests/TestCase.php</span>.

There’s also a RefreshDatabase trait, but the lazy one is more efficient, as migrations for unused tables won’t be ran during testing.
