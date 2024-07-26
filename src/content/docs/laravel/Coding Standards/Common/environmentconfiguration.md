---
title:   Environment Configuration
---

## Bad Practice
Hardcoding configuration values in the code.

        public function sendNotification()
        {
            $apiKey = 'some-hardcoded-api-key';
            // ... send notification logic ...
        }



## Good Practice
Storing configuration values in environment files.

        // In .env file
        NOTIFICATION_API_KEY=some-api-key
        // In the code
        public function sendNotification()
        {
            $apiKey = config('services.notification.api_key');
            // ... send notification logic ...
        }
