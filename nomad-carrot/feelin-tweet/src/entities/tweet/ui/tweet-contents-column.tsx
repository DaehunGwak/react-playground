export default function TweetContentsColumn({text}: {
  text: string,
  imageUrls: string[],
}) {
  return (
    <div className="text-lg whitespace-pre-wrap">
      {text}
    </div>
  );
}
