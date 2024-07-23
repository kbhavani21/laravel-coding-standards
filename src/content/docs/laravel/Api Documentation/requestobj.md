---
title : Encryption/Decryption & Masking
---

Mobile number is stored in the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">contact</span> table as plain text. Business requires mobile number to be not visible to end users. Mobile number encryption can be fulfilled by using the casts property on contact -> <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">mobile_number</span>

##  1. Cast mobile number in Contact model


           class Contact extends Model
            {
            use HasFactory, HasApiTokens;

            protected $casts = [
                'mobile_number' => Encrypted::class
            ];
            }
## 2. Create a custom cast that encrypts and decrypts mobile_number

            namespace App\Casts;

            use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
            use Illuminate\Support\Facades\Crypt;

            class Encrypted implements CastsAttributes
            {
            public function get($model, $key, $value, $attributes): string
            {
                return $value ? Crypt::decrypt($value) : null;
            }

            public function set($model, $key, $value, $attributes): string
            {
                return $value ? Crypt::encrypt($value) : null;
            }
            }       

Above two steps will ensure that when a mobile_number is saved to contact table the value will be encrypted. Likewise using a <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">$contact->mobile_number</span> will return the original decrypted value. Howver, encrypted values are more than 200 characters long. 

## 3. Increase mobile_number column length



```sh
alter table contact alter column mobile_number type varchar(500)

```


## 4. Encrypt mobile_number values one time

- For encryption/decryption to work after this implementation, every row in contact should have an encrypted <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">mobile_number.</span> We can write a one-time process to perform the same

## 5. Displaying phone numbers to users
      
- We add an attribute method called getMaskedMobileNumberAttribute(), which will return a masked mobile number of the format (9XXXXXXXX8) when <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">$contact->masked_mobile_number</span> is called
                

                class Contact extends Model
                {
                use HasFactory, HasApiTokens;

                protected $casts = [
                    'mobile_number' => Encrypted::class
                ];

                protected $guard = 'contact';
                protected $table = 'contact';
                protected $fillable = ['first_name','middle_name','last_name',
                                    'email','mobile_number','alt_phone',
                                    'is_active', 'role', 'driving_license_no',
                                    'driving_license_cat', 'license_validity_date', 'special_license',
                                    'experience_yrs', 'blood_group', 'date_of_birth',
                                    'languages','designation','rating','verification_status','reference_id','reference_created_at',
                                    'current_language','verification_response','driver_img_file_key','verification_status_updated_by','override_verification_status_file_key'
                                ];

            public function getMaskedMobileNumberAttribute()
            {
                if (! $this->mobile_number) {
                    return null;
                }

                $len = strlen($this->mobile_number);
                // Mask all digits except first and the last
                return substr($this->mobile_number, 0, 1) . str_repeat('X', $len-2) . substr($this->mobile_number, -1);

            }

            public function partner_profile_contact(){
                return $this->hasMany(PartnerProfileContact::class);
            }
            }


## 6. Syncing with data lake
 
  - Going forward data lake need not receive the encrypted <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">mobile_number</span>. The sync process needs to send only the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">masked_mobile_number</span> value. While the encryption/decryption is baked into Laravel, the data sync will be a non-laravel application (Airbyte today, something else tomorrow). Therefore to decouple Laravel <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">encryption/decryption</span> dependency, its better to store the masked mobile number in an additional column in the contact table itself.


