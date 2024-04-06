import {Suspense} from "react";
import {Loading} from "@/shared/ui";
import {BestsellerListDetail} from "@/features/bestseller";

export function BestsellerListDetailSuspense({name}: {name: string}) {
  return <Suspense fallback={<Loading/>}>
    <BestsellerListDetail name={name}/>
  </Suspense>
}
