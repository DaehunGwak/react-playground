import {TimelineWidget} from "@/src/widgets/timeline";
import {HeaderWidget} from "@/src/widgets/header";
import {Suspense} from "react";
import FullScreenLoading from "@/src/shared/ui/full-screen-loading";

export default function HomePage() {
  return (
    <Suspense fallback={<FullScreenLoading/>}>
      <div className="w-screen min-h-screen">
        <HeaderWidget/>
        <TimelineWidget/>
      </div>
    </Suspense>
  );
}
