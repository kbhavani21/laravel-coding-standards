---
title:   Dependency Injection
---

## Bad Practice
Instantiating dependencies within methods.

        public function index()
        {
            $service = new SomeService();
            $service->performTask();
        }




## Good Practice
Using dependency injection.

        protected $service;

        public function __construct(SomeService $service)
        {
            $this->service = $service;
        }

        public function index()
        {
            $this->service->performTask();
        }

