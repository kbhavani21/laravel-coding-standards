---
title:  "Misconfigured .env in Prod: Debug Mode or Global Settings"
---

One of the most significant security risks for Laravel project is to leave this setting:

        //.env

        APP_DEBUG=true

This means all the error details will be seen in the browser, instead of the default error pages. So, the user will see all the information about Laravel/PHP internals and can use them for malicious purposes.

There are more things that you can misconfigure on the live server, like incorrect /public folder setting, which leaves the .env file available in PUBLIC (yes, even found on Google).


