---
title: Early Returns
---

Use early returns as much as possible

Example code that does not use early returns
   
       public function clustervalue(Request $request){
       $partnerpincode = DB::table('partner')
       ->leftjoin('partner_address', 'partner.id', '=', 'partner_address.partner_id')
       ->leftjoin('address', 'partner_address.address_id', '=', 'address.id')
       ->where('partner.id', $request->partner_id)
       ->whereNull('address.address_type')
       ->select('partner.id','address.pincode')
       ->first();
       if($partnerpincode){
       if($partnerpincode->pincode){
           $office_id=OfficePincode::where('pincode','=',$partnerpincode->pincode)->pluck('office_id')->first();
           if($office_id){
               $reports_to_office_id=Office::where('id','=',$office_id)->pluck('reports_to_id')->first();
               $cluster=Office::where('id','=', $reports_to_office_id)->pluck('ch_value')->first();
               if($cluster){
                   //$clusterName=$cluster?substr(strtoupper($cluster),0,2):'ZZ';
                   $clusterName=$cluster;
               }else{
                   $clusterName='ZZ';
               }
               return response()->json(['clusterValue' =>$clusterName], 200);
           }else{
               return response()->json(['message' => 'Pincode is not assigned to office'], 200);
           }
            }else{
                return response()->json(['message' => 'Partner or pincode does not exist'], 200);
            }
            }else{
                return response()->json(['message' => 'Partner or pincode does not exist'], 200);
            }
            }

  Refactored code that uses early returns

            public function clustervalue(Request $request){
             $partnerpincode = DB::table('partner')
                               ->leftjoin('partner_address', 'partner.id', '=', 'partner_address.partner_id')
                               ->leftjoin('address', 'partner_address.address_id', '=', 'address.id')
                               ->where('partner.id', $request->partner_id)
                               ->whereNull('address.address_type')
                               ->select('partner.id','address.pincode')
                               ->first();


            if (! $partnerpincode) {
                return response()->json(['message' => 'Partner or pincode does not exist'], 200);
            }

            if (! $partnerpincode->pincode) {
                return response()->json(['message' => 'Partner or pincode does not exist'], 200);
            }

            $office_id=OfficePincode::where('pincode','=',$partnerpincode->pincode)->pluck('office_id')->first();

            if (! $office_id) {
                return response()->json(['message' => 'Pincode is not assigned to office'], 200);
            }

            $reports_to_office_id=Office::where('id','=',$office_id)->pluck('reports_to_id')->first();
            $cluster=Office::where('id','=', $reports_to_office_id)->pluck('ch_value')->first();

            $clusterName = $cluster ? $cluster : 'ZZ';

            return response()->json(['clusterValue' =>$clusterName], 200);
        }

          
       