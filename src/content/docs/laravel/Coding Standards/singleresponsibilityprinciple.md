---
title: Obey the single responsibility principle (SRP)
---
A class and method should have just one responsibility. This makes software implementation easy and intercepts any unforeseen side effects that arise due to changes that occur in the future.

For instance, instead of having a method that returns the transaction data by performing several operations, as demonstrated by the snippet below:

        public function getTransactionAttribute()
        {
            if ($transaction && ($transaction->type == 'withdrawal') && $transaction->isVerified()) {
                return ['reference'=>$this->transaction->reference, 'status'=>'verified'];
            } else {
                return ['link'=>$this->transaction->paymentLink, 'status'=>'not verified'];
            }
        }

## To improve readability, spread the actions across methods like this:

        public function getTransactionAttribute(): bool
        {
            return $this->isVerified() ? $this->getReference() : $this->getPaymentLink();
        }
        public function isVerified(): bool
        {
            return $this->transaction && ($transaction->type == 'withdrawal') && $this->transaction->isVerified();
        }
        public function getReference(): string
        {
            return ['reference'=>$this->transaction->reference, 'status'=>'verified'];
        }
        public function getPaymentLink(): string
        {
            return ['link'=>$this->transaction->paymentLink, 'status'=>'not verified'];
        }

