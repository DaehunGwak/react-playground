import FeelinTitle from "@/src/shared/ui/feelin-title";
import HeaderCircleItem from "@/src/shared/ui/header-circle-item";
import {LogoutButton} from "@/src/features/auth";
import Link from "next/link";
import {GoPerson} from "react-icons/go";
import {getUserProfileByCookie} from "@/src/features/profile";
import {redirect} from "next/navigation";

export default async function HeaderWidget() {
  const userProfile = await getUserProfileByCookie();

  if (!userProfile?.profile) {
    return redirect("/profile/new");
  }

  return (
    <div className="fixed z-10 w-full flex flex-row justify-between items-center p-6">
      <HeaderCircleItem>
        <Link href="/" className="pl-6 pr-5 pb-2.5 pt-3.5">
          <FeelinTitle/>
        </Link>
      </HeaderCircleItem>
      <div className="flex flex-row justify-center items-center gap-6">
        <HeaderCircleItem>
          <Link href="/users/me" className="w-14 h-14 flex p-2 justify-center items-center">
            <GoPerson className="w-9 h-9"/>
          </Link>
        </HeaderCircleItem>
        <HeaderCircleItem>
          <LogoutButton/>
        </HeaderCircleItem>
      </div>
    </div>
  );
}