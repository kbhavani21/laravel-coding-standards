---
title: API Security

---
## Provisioning API Tokens 

Users need to be integrated with ERP’s OAuth.

Users come from both  <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">contacts</span>  and <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">users</span>  table. Users calling any of the platform APIs must be authenticated with an API token. 

Use Laravel Sanctum for generating API tokens. Existing Contact and Users model will need to implement the out-of-the-box HasApiTokens trait


      use Laravel\Sanctum\HasApiTokens;
        class User extends Authenticatable
       {
         use HasFactory, Notifiable, HasApiTokens;
       }
        use Laravel\Sanctum\HasApiTokens;
        class Contact extends Authenticatable
       {
         use HasFactory, Notifiable, HasApiTokens;
       }


## Generating tokens

A calling application (TE Admin or Mobile App) will call the /getToken API. This API will authenticate the user and return a plain text token (according to Laravel Sanctum standards).


        $contact = Contact::where('id', $id);
        return $contact->createToken('API_TOKEN')->plainTextToken;

        

## Authenticating Tokens

The calling application will then attach the token in the Http Header as Bearer token. The token will be validated through middleware in the Route definition.


        Route::get('/load, function (Request $request)
        {…})->middleware('auth:sanctum');

        

## Token Lifetime and Expiry

<div class="flex gap-2">
<span class="text-block font-bold !text-[17px]">Question:</span>
<span> Should we explicitly set an expiry time?</span></div>

<div class="flex gap-2"><span class="text-block font-bold !text-[17px]">Resolution: </span>
<span> Set to 24 hours.</span> </div>


<p class="text-[13px] bg-[#EDEEF3] px-2 py-1 w-[25%]">< Regenrate token API ></p>


Tokens shall be invalidated when a user logs out of the application. The front-end application should call the /revokeToken API to do so

The revokeToken API can revoke the current token by


```js
 $request->user()->currentAccessToken()->delete();

```



## Token Storage and tracking

<p class="">Sanctum stores all tokens in a table called <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">personal_access_tokens</span>. This table allows polymorphic references to any model through <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">ptokenable_type and tokenable_id</span> columns.</p>

<!-- ![A rocketship in space](../../../assets/tabledata.png) -->




:::caution

<h1 class="text-gray-500 !text-[17px]">Questions:</h1>

Need to store the calling application name (TE-Admin, Mobile App etc) in personal_access_tokens table?
This allows tracking of user tokens at a granular level.
:::


## Token cleanup

If we set an expiry time for tokens, expired tokens can be cleaned up periodically using Sanctum’s out-of-the-box console command



```sh
php artisan sanctum:prune-expired
```
