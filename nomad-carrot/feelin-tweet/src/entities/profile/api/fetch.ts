import {UserResponse} from "@/src/entities/profile";
import {FeelinResponse} from "@/src/shared/model/response";

export async function fetchGetUserMe() {
  const response = await fetch("/api/users/me");
  const json = await response.json();
  return json as FeelinResponse<UserResponse>;
}


export async function fetchPostProfile(nickname: string) {
  const formData = new FormData();
  formData.append("nickname", nickname);

  return await fetch("/api/users/me/profile", {
    method: "POST",
    cache: "no-cache",
    body: formData,
  });
}
