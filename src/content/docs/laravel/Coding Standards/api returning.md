---
title:  API returning 2xx Code with Errors
---

Have you seen something like this "horror" in Controller?


        public function store()
        {
            if ($someCondition) {
                return response()->json([
                    'error' => true,
                    'message' => 'Something happened'
                ], 200);
            }
        
            // ...
        }

There are actually many things that need to be corrected in this snippet, but I want to emphasize that 200 number.

It's actually a default value, so this code would do the same:


        return response()->json([
                'error' => true,
                'message' => 'Something happened'
            ]);

Point is that if the API has some error, you need to return the error code to the API client.

Imagine the face of a front-end or mobile developer who tries to call this API and gets no error code, but their app doesn't work. And they don't know why because the API seems to return a good result!

In general, when creating APIs, communicate with all parties involved in consuming that API and agree on the standard requests/responses to avoid misunderstandings. Or, if you create a public API, please document all possible return results and their status codes.

There are also slight differences between returning, for example, 401 vs 403 code, and similar examples. But those are not crucial. The most important is the first number: success or not.

## Blindly Trusting User Data Without Validation:
The classic example is this code in Blade.


        {!! $user->about_me !!}

So, you allow your users to fill in their "About me" with HTML inside, you show that in the browser, and may have this as a result: *"Hello I am a hacker"*


That happens if the user fills in something like script alert... (intentionally don't want to show the malicious example) in the "About me" page.

So, the general rule of thumb is to use this unescaped {!! !!} syntax only on the data YOU control or properly validated.

Or, of course, just use the {{ ... }} syntax to prevent such XSS attacks.

Another example of blindly trusting the data is using $request->all(). Look at this:


        public function store(StoreUserRequest $request) {
            User::create($request->all());
        
            return redirect()->route('dashboard');
        }

Looks harmless, doesn't it? Especially if you have a proper StoreFormRequest class for the validation.

But what if I told you there's a security issue here?

The thing is that<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">$request->all()</span>contains literally ALL of the input data, including the data that wasn't validated.

So, for example, if someone passes the is_admin=1 as a part of that request, and it's not validated in your StoreFormRequest class, it may be saved to the DB successfully without you even noticing. In other words, if your users guess your DB field name, they may register as an admin.

Instead, you should use <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">$request->validated()</span> after the FormRequest class or specify the exact fields individually.

But the general "bad practice" message here is the same classics: Never trust user input. EVER.
