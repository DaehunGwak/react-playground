import FeelinTitle from "@/src/shared/ui/feelin-title";
import {LogoutButton} from "@/src/features/auth";

export default function TimelineWidget() {
  const tweets = ["test"];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between p-24">
      <FeelinTitle/>
      <LogoutButton/>
      <span>{JSON.stringify(tweets)}</span>
    </div>
  );
}