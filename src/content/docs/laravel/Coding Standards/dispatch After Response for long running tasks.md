---
title: Use dispatchAfterResponse() for long-running tasks
---
Let’s use the most straightforward example possible: you have a contact form. Sending an email may take between one or two seconds, depending on your method.

## What if you could delay this until the user receives your server’s response?

That’s precisely what <span class="text-[13px] bg-[#EDEEF3] px-2 py-1 rounded-lg border-2">dispatchAfterResponse()</span> does and this is one of my favorite tips:

    SendContactEmail::dispatchAfterResponse($input);

Or, if you prefer to dispatch jobs using anonymous functions:

    dispatch(function () {
    // Do something.
    })->afterResponse();
