import {FirstProfileForm, getUserProfileByCookie} from "@/src/features/profile";
import {UserDto} from "@/src/entities/profile";
import FeelinTitle from "@/src/shared/ui/feelin-title";
import {redirect} from "next/navigation";

export default async function FirstProfileWidget() {
  const userProfile = await getUserProfileByCookie();

  if (userProfile?.profile) {
    return redirect("/");
  }

  const user: UserDto = {
    email: userProfile!.user.email!,
    createdAt: userProfile!.user.created_at,
  };

  return (
    <div className="flex flex-col w-72 justify-center items-center gap-6 rounded-lg shadow-gray-400 shadow-lg px-6 py-12">
      <FeelinTitle/>
      <FirstProfileForm user={user}/>
    </div>
  );
}
