---
title: Request Objects and Request validation
---

Rather than rely on generic Request object, we should typecast the Request into a custom Request Object. Each request object shall then implement the rules, messages and failedValidation. 

failedValidation should be used to customize API response sent when there is a validation failure.
     
        class IndentRequest extends FormRequest
        {
        
        public function authorize(): bool
        {
            return true;
        }

        public function rules(): array
        {
            return [
                'type' => 'required',
                'pricePerTruck' => 'numeric',
                'shipperId' => 'required|exists:partner,id'
            ];
        }

        public function messages(): array {
            return [
                'pricePerTruck.numeric' => 'Price Per Truck is not a number',
                'shipperId.exists' => 'Shipper does not exist'
            ];
        }
        
        protected function failedValidation(Validator $validator)
        {
            throw new HttpResponseException(
                response()->json([
                    'message' => 'Validation failed',
                    'errors' => $validator->errors(),
                ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY)
            );
        }
        // protected function prepareForValidation(): void {

        // }
        }


A failed validation response looks like this, with a HTTP status code of 422. If required the status code can be changed.
         
          {
            "message": "Validation failed",
            "errors": {
                "shipperId": [
                    "Shipper does not exist"
                ]
            }
            }


