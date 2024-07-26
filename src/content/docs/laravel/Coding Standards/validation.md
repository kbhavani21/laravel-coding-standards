---
title:  Validation
---

## Bad Practice
Validating data directly in the controller method.

        public function store(Request $request)
        {
            $this->validate($request, [
                'name' => 'required',
                'email' => 'required|email',
            ]);

            // Store user
        }



## Good Practice
Using form request classes for validation.

        public function store(StoreUserRequest $request)
        {
            // Store user
        }
        //StoreUserRequest.php
        public function rules()
        {
            return [
                'name' => 'required',
                'email' => 'required|email',
            ];
        }


