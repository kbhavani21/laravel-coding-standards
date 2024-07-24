---
title: Don’t track your compiled CSS and JavaScript
---
Your CSS and JavaScript are generated using originals in <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 rounded-lg border-2">resources/css</span> and <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 rounded-lg border-2">resource/js</span>.

When deploying into production, you either compile them on the server or you create an artifact before.

Especially for people still using Laravel Mix, I recommend to stop tracking them.

It’s quite annoying that every time you change something, a new <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 rounded-lg border-2"> public/css/app.css</span> or <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 rounded-lg border-2"> public/js/app.js</span> is generated and need to be commited.

It only takes two lines in your .gitignore to stop this:

    public/css
    public/js

