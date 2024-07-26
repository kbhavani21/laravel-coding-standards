---
title: Avoid using documentation comment blocks (DocBlocks)
---

Reduce the need for additional documentation by striving to write clear and understandable code. This approach makes your code  <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">cleaner</span>, <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">readable</span>, and more  <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">maintainable</span>.

A well-named  <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">method</span> or  <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">class</span> can often serve as its own documentation, eliminating the need for DocBlocks. 

For example:
  
        public function calculateTotalOrderCost(Order $order): float
        {
            // Calculate and return the total cost
        }

In this example, the method name <span  class=" text-[13px] bg-[#EDEEF3] px-2 py-1">calculateTotalOrderCost</span> clearly indicates its purpose, making additional documentation unnecessary.