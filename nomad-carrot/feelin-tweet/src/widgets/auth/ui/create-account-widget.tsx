import FeelinTitle from "@/src/shared/ui/feelin-title";
import {CreateAccountForm} from "@/src/features/auth";
import Link from "next/link";

export default function CreateAccountWidget() {
  return (
    <div className="flex flex-col w-72 justify-center items-center gap-6 rounded-lg shadow-gray-400 shadow-lg px-6 py-12">
      <FeelinTitle/>
      <CreateAccountForm/>
      <Link
        href={"/log-in"}
        className="text-xs underline text-gray-500"
      >
        Go to Log In
      </Link>
    </div>
  );
}
