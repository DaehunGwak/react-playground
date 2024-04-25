import FeelinTitle from "@/src/shared/ui/feelin-title";
import Link from "next/link";
import {GoogleLoginButton, LoginForm} from "@/src/features/auth";

export default function LoginWidget() {
  return (
    <div className="flex flex-col w-72 justify-center items-center gap-6 rounded-lg shadow-gray-400 shadow-lg px-6 py-12">
      <FeelinTitle/>
      <LoginForm/>
      <Link
        href={"/create-account"}
        className="text-xs underline text-gray-500"
      >
        Create Account
      </Link>
      <GoogleLoginButton/>
    </div>
  );
}