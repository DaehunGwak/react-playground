import {FirstProfileForm} from "@/src/features/profile";
import {UserDto} from "@/src/entities/profile";
import FeelinTitle from "@/src/shared/ui/feelin-title";

export default function FirstProfileWidget({user}: {user: UserDto}) {
  return (
    <div className="flex flex-col w-72 justify-center items-center gap-6 rounded-lg shadow-gray-400 shadow-lg px-6 py-12">
      <FeelinTitle/>
      <FirstProfileForm user={user}/>
    </div>
  );
}