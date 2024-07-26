---
title:  Configuration Management
---

## Bad Practice
Hardcoding Configuration Values

        // config/services.php
        return [
            'mailgun' => [
                'domain' => 'your-domain.com',
                'secret' => 'your-secret-key',
            ],
        ];

## Good Practice
Using Eloquent Relationships

        // config/services.php
        return [
            'mailgun' => [
                'domain' => env('MAILGUN_DOMAIN'),
                'secret' => env('MAILGUN_SECRET'),
            ],
        ];

