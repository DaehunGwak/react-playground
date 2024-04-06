export async function getData(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
    cache: "no-cache"
  });
  return response.json();
}
