export async function getData(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  });
  return response.json();
}
