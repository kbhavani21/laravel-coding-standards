---
title: Laravel & Package composition
---
## <a name="Table"></a>

<Setps>
1. Laravel major version - 11

2.PHP version - 8.3
<Setps>

Packages


| Package      |    Composer identifier   |    Purpose   | 
| :--------------------- | :-------------------- | :--------------: | 
| Sanctum          | Php artisan install:api             | Manage API tokens | 
| <a href="https://github.com/mohammad-fouladgar/eloquent-builder">Eloquent Filters</a> | mohammad-fouladgar/eloquent-builder | Manage model filtering based on request parameters |  
| <a href="https://github.com/romanzipp/Laravel-DTO">Laravel DTO</a>      | romanzipp/laravel-dto               | Implement Data Transfer Objects |  
| <a href="https://scribe.knuckles.wtf/laravel">Scribe</a>  | knuckleswtf scribe                  | Generate API documentation |  
| <a href="https://github.com/spatie/laravel-data">Spatie Data</a>     | spatie/laravel-data                 | Implement Data Transfer Objects and validation. Much stronger than romanzipp/laravel-dto |  


<style>
  h1:where(.astro-j6tvhyss)
   { 
    font-size:30px
    }
    .sl-markdown-content h2{
     font-size:30px   
    }
    .sl-markdown-content :is(th, td):not(:where(.not-content *)){
        text-align:start
    }
    .sl-markdown-content :is(th, td):not(:where(.not-content *)){
        border-color:#12191e;
        font-size:15px
    }
    .sl-markdown-content :not(a, strong, em, del, span, input, code) + :not(a, strong, em, del, span, input, code, :where(.not-content *)){
        font-size:15px
    }
    
</style>   