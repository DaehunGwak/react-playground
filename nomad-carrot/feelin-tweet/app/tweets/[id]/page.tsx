import {TweetDetailPage} from "@/src/page/tweet";

export default function TweetDetailAppPage(
  {params: {id}}: {params: {id: string}}
) {
  return (
    <TweetDetailPage tweetId={+id}/>
  );
}
