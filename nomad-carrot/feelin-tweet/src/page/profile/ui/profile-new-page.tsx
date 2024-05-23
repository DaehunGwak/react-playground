import {FirstProfileWidget} from "@/src/widgets/profile";
import {Suspense} from "react";
import FullScreenLoading from "@/src/shared/ui/full-screen-loading";

export default async function ProfileNewPage() {
  return (
    <Suspense fallback={<FullScreenLoading/>}>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <FirstProfileWidget/>
      </div>
    </Suspense>
  );
}