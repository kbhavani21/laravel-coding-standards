---
title: Use queues for even longer running tasks
---

Imagine you have to process images uploaded by your users.

If you process every one of them as soon as they’re submitted, this will happen:

:::caution
  - Your server will burn;
  - Your users will have to wait in front of a loading screen.
:::

This isn’t good <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 rounded-lg border-2">UX</span> , and we can change that.

Laravel has a queue system that will run all those tasks sequentially or with a limited amount of parallelism.

:::note
 - And, to easily manage your jobs through a user interface, Laravel Horizon is what you should use.
 - Use queues for even longer running tasks
:::

 <img src="/src/assets/queue.png" alt="queue for even longer running task" style="margin-left: 60px; margin-top:30px">
