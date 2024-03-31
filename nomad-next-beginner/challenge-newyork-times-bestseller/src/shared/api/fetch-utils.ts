export async function getData(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  }).then(response => {
    console.log(`fetch done: ${url}`);
    return response;
  });
  return response.json();
}
