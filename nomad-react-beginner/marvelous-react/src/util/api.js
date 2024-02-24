async function fetchJson(url) {
  const response = await fetch(url);
  return await response.json();
}

export {
  fetchJson,
};
