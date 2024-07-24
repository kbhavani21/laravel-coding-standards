---
title: Use helper functions
---
Laravel comes with several helper functions and methods. Instead of reinventing the wheel, using the existing methods is preferable, as it will keep the code base concise and prevent repetition. A typical example is when you want to generate a random string. Instead of creating a new function that does that, you can use the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">Illuminate/Support/Str</span> by doing the following:

        $slug = Str::random(24);

These helpers are available anywhere within the application.
