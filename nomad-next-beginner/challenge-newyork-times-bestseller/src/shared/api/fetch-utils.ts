export async function getData(url: string) {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  });
}
