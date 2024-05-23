import {Suspense} from "react";
import FullScreenLoading from "@/src/shared/ui/full-screen-loading";
import {HeaderWidget} from "@/src/widgets/header";
import {TweetDetailWidget} from "@/src/widgets/tweet";

export default function TweetDetailPage({tweetId}: {tweetId: number}) {
  return (
    <div className="w-screen min-h-screen">
      <HeaderWidget/>
      <Suspense fallback={<FullScreenLoading/>}>
        <TweetDetailWidget tweetId={tweetId}/>
      </Suspense>
    </div>
  )
}