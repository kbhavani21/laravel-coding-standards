---
title: Filtering data with Eloquent Filters
---

Let's take the Shipper FindAll API whose end point is <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">https://<>/shipper/{shipperId}/findAll</span>

The API takes the following parameters as search filters

            @RequestHeader(value = "Authorization", required = false) String authorization,
            @PathVariable("shipperId") String shipperId,
            @RequestParam(value = "sort", required = false, defaultValue = "default") String sort,
            @RequestParam(name = "required") String required,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "0", required = false) int size,
            @RequestParam(value = "tonnage", required = false) List<String> tonnage,
            @RequestParam(value = "bodyType", required = false) List<String> bodyType,
            @RequestParam(value = "loadingSpan", required = false) List<String> loadingSpan,
            @RequestParam(value = "origin", required = false) List<String> origin,
            @RequestParam(value = "destination", required = false) List<String> destination,
            @RequestParam(value = "materials", required = false) List<String> materials,
            @RequestParam(value = "placementDate", required = false) String placementDate,
            @RequestParam(value = "toPlacementDate", required = false) String toPlacementDate,
            @RequestParam(value = "source", required = false) String source,
            @RequestParam(value = "status", required = false) String status,
            @RequestParam(value = "search", required = false) String search,
            @RequestParam(value = "subuser", required = false) String subuser,
            @RequestParam(value = "loadStatus", required = false) List<String> loadStatus,
            @RequestParam(value = "loadType", required = false) String loadType,
            @RequestParam(value = "bidType", required = false) String bidType



  <span class="font-bold">Following is the approach to implement in Laravel</span>

<Steps>
   1. Create a Request object called FindShipperLoadRequest and implement validation rules
   2. Once validated 
</Steps>
          


        