---
title: Keep business logic in the service class
---
To ensure clean code, users must implement <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">abstractions</span>. While controllers typically manage business logic, there are instances where this logic may need to be reused by other controllers. In such cases, it's advisable to encapsulate this logic within separate service classes. This approach helps maintain code cleanliness by avoiding redundancy and promoting reusability.

Here's an example of a <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">bad approach</span> where the business logic is tightly coupled to the controller and is not reusable:


        namespace App\Http\Controllers;
        ...
        class OrderController extends Controller
        {
            public function placeOrder(Request $request)
            {
                $data = $request->all();
                $user = User::find($data['user_id']);
                $order = new Order();
                $order->user_id = $user->id;
                $order->total = $data['total'] + ( $data['total'] * 0.5);
                $order->status = 'pending';
                $order->save();
                // ...
            }
            . . .
        }

This snippet creates an order record using the user data and the data from the request. It also calculates the total cost of the order.

To do this better, you’ll need to refactor the code to look like this:

        namespace App\Services;
        ...
        class OrderService
        {
            public function createOrder(array $orderData)
            {
                // Encapsulated business logic
                $user = User::find($orderData['user_id']);
                $order = new Order();
                $order->user_id = $user->id;
                $order->total = $data['total'] + ( $data['total'] * 0.5);
                $order->status = 'pending';
                $order->save();
                return $order;
            }
        }

Then, inject the service into the controller as demonstrated below:

        ...
        use App\Services\OrderService;

        class OrderController extends Controller
        {
            private $orderService;

            public function __construct(OrderService $orderService)
            {
                $this->orderService = $orderService;
            }

            public function placeOrder(Request $request)
            {
                $orderData = $request->all();
                $order = $this->orderService->createOrder($orderData);
                // ...
            }
        }




