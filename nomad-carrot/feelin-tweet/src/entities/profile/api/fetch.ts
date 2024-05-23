export async function fetchPostProfile(nickname: string) {
  const formData = new FormData();
  formData.append("nickname", nickname);

  return await fetch("/api/users/me/profile", {
    method: "POST",
    cache: "no-cache",
    body: formData,
  });
}
