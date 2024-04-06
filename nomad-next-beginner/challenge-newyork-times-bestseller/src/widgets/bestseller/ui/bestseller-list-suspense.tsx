import {Suspense} from "react";
import {Loading} from "@/shared/ui";
import {BestsellerList} from "@/features/bestseller";

export function BestsellerListSuspense() {
  return (
    <Suspense fallback={<Loading/>}>
      <BestsellerList/>
    </Suspense>
  )
}
