---
title: Timeout HTTP request
---
One of the best practices Laravel has to offer is utilizing Timeouts. By using the timeout method, you can avoid errors when sending HTTP requests from your controller. Laravel defaults to timeout requests to its server after 30 seconds. If there is a delay by the HTTP request and no error message, your app could remain stuck indefinitely.

Here is an example of how to timeout an HTTP request after 120 seconds.

        public function store(StoreRequest $request)
        {
            ....
            $response = Http::timeout(120)->get(...);
            ....
        }
