---
title:  Api Logging 

---

Currently, API logging is implemented using <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">Spring’s intervention</span> method. All of the API logs (including request and response) are stored in a mongo collection.

## Implementing API Logging through Laravel Middleware

Laravel allows a terminate method on any Middleware. The terminate method is called “after” the response is sent to the client, which means both the request and response objects are available at this point.

       ​​use Closure;
       use Illuminate\Http\Request;
       use Symfony\Component\HttpFoundation\Response;
       use App\Http\Services\ApiLoggingService;

       class ApiLoggingMiddleware
        {
         protected $apiLoggingService;
         public function __construct(ApiloggingService $apiLoggingService){
         $this->apiLoggingService = $apiLoggingService;
       }
         public function handle(Request $request, Closure $next): Response
       {
         return $next($request);
       }
         public function terminate(Request $request, Response $response): void
       {
         $this->apiLoggingService->store($request, $response);
       }
       }

 The terminate method will pass on request and response objects to the customer ApiLoggingService.

## Enabling Middleware based logging for specific routes

The middleware can then be attached to the appropriate routes in <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">api.php</span> like below

        Route::get('/test', function (Request $request) 
        {
          return 'Hello';
        })->middleware([ApiLoggingMiddleware::class]); 

## Enabling Middleware based logging globally

If api logging needs to happen for all api calls, the middleware needs to be attached in app.php like below.

        use Illuminate\Foundation\Application;
        use Illuminate\Foundation\Configuration\Exceptions;
        use Illuminate\Foundation\Configuration\Middleware;
        use App\Http\Middleware\ApiLoggingMiddleware;

        return Application::configure(basePath: dirname(__DIR__))
        ->withRouting(
            web: __DIR__.'/../routes/web.php',
            api: __DIR__.'/../routes/api.php',
            commands: __DIR__.'/../routes/console.php',
            health: '/up',
        )
        ->withMiddleware(function (Middleware $middleware) {
            $middleware->append(ApiLoggingMiddleware::class); //Enable API logging globally
        })
        ->withExceptions(function (Exceptions $exceptions) {
            //
        })->create();


## Logging Targets


<p class="font-bold">The application can implement logging targets. A Logging target could be a</p>

<Steps>

 1.  File - the api logs are stored in the standard laravel.log file.
 2.  ELK - the api logs can be pushed to an Elastic Search index.
 3.  DB - the api logs can be pushed to a table in the database.

</Steps>    

For developer environments, it would be preferable to store the logs in File target. In UAT and live environments, the api logs can be stored in ELK (first choice) or DB (second choice)

Logging target can be set using the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">API_LOG_TARGET</span> value in <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">.env</span> file


 ## Implementation of Logging 

 We follow the Service > Repository pattern to ensure ApiLoggingService remains small and is not aware of the implementation details

Each of the logging targets are implemented under the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">App\Http\Repository\ApiLogging directory</span>

 FileLoggerRepository

       <?php

        namespace App\Http\Repository\ApiLogging;

        use Illuminate\Http\Request;
        use Symfony\Component\HttpFoundation\Response;

        class FileLoggerRepository
        {
        public function store(Request $request, Response $response){
            $data = [
                'session_id' => session()->getId(),
                'ip' => $request->ip(),
                'payload' => $request->toArray(),
                'url' => $request->fullUrl(),
                'response_status_code' => $response->getStatusCode(),
                'response' => $response->getContent()
            ];
            \Log::info(__METHOD__, $data);
        }
        }


In a similar manner, DBLoggerRepository and ELKLoggerRepository can be implemented to store the request and response data as applicable

ApiLoggingService will lookup the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">.env</span> file and call the appropriate repository
             
            use App\Enums\ApiLogTarget;
            use App\Http\Repository\ApiLogging\FileLoggerRepository;
            use App\Http\Repository\ApiLogging\ELKLoggerRepository;
            use App\Http\Repository\ApiLogging\DBLoggerRepository;

            class ApiLoggingService
            {
            protected $loggerRepository;

            public function __construct() {
                $apiLogTarget = env('API_LOG_TARGERT', 'file');
                switch ($apiLogTarget) {
                    case ApiLogTarget::FILE :
                        $this->loggerRepository = new FileLoggerRepository();
                        break;
                    case ApiLogTarget::DB :
                        $this->loggerRepository = new DBLoggerRepository();
                        break;
                    case ApiLogTarget::ELK :
                        $this->loggerRepository = new ELKLoggerRepository();
                        break;
                    default :
                        $this->loggerRepository = new FileLoggerRepository();
                        break;
                }
            }

            public function store(Request $request, Response $response): void {
                
                $this->loggerRepository->store($request, $response);
                
            }
        }
 