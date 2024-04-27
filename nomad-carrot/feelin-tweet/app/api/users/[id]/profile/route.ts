import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {readUserByCookie} from "@/src/entities/supabase-auth";
import {createProfile} from "@/src/entities/profile";

const PATH_PARAM_ME = "me";

export async function POST(
  req: NextRequest,
  {params: {id}}: {params: {id: string}}
) {
  if (id !== PATH_PARAM_ME) {
    return NextResponse.json(null, {status: 404});
  }

  const user = await readUserByCookie(cookies());
  if (user === null) {
    return NextResponse.json({error: "Authentication failed"}, {status: 401});
  }

  const formData = await req.formData();
  const nickname = String(formData.get("nickname")!);

  const {error} = await createProfile({
    userId: user.id,
    nickname: nickname,
    imageUrl: null,
  });
  if (error && error.code === "P2002") {
    return NextResponse.json({error: `The ${error.meta!.target} is already existed`}, {status: 400});
  }

  return NextResponse.json({status: "success"}, {status: 201});
}

