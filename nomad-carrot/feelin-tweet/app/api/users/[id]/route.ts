import {NextRequest, NextResponse} from "next/server";
import {readUserByCookie, readUserById} from "@/src/entities/supabase-auth";
import {readProfile, UserResponseFactory} from "@/src/entities/profile";
import {User} from "@supabase/auth-js";

const PATH_PARAM_ME = "me";

export async function GET(
  req: NextRequest,
  {params: {id}}: {params: {id: string}}
) {

  let user: User | null;
  if (id === PATH_PARAM_ME) {
    user = await readUserByCookie();
  } else {
    user = await readUserById(id);
  }

  if (user === null) {
    return NextResponse.json(UserResponseFactory.notFound(), {status: 404});
  }

  const profile = await readProfile(user.id);
  return NextResponse.json(UserResponseFactory.from(user, profile));
}
