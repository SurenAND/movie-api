async function fetchData(fetchApi, endpoint = "") {
  const fetchToApi = await fetch(`${fetchApi}${endpoint}`);
  const res = await fetchToApi.json();
  renderMovies(res);
}
