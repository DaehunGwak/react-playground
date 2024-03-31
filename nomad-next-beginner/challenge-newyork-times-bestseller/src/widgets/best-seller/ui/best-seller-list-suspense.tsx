import {Suspense} from "react";
import {BestSellerList} from "@/features/best-seller";
import {Loading} from "@/shared/ui";

export function BestSellerListSuspense() {
  return (
    <Suspense fallback={<Loading/>}>
      <BestSellerList/>
    </Suspense>
  )
}
