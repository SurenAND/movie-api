async function fetchData(fetchApi, endpoint = "") {
  const fetchToApi = await fetch(`${fetchApi}${endpoint}`);
  const res = await fetchToApi.json();
  renderMovies(res);
}

function renderMovies(rawData) {
  const { data } = rawData;
  // clear movies section
  const movieSection = document.getElementById("movies");
  movieSection.innerHTML = "";

  if (data.length === 0) {
    const notFound = document.createElement("h2");
    notFound.classList.add("text-6xl", "font-black", "text-blue-500");
    notFound.innerText = "Movie Does Not Found!😕";
    movieSection.append(notFound);
  } else {
    data.forEach((movie) => {
      // create movie card
      const movieCard = document.createElement("div");
      movieCard.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "text-center",
        "sm:text-left",
        "sm:items-start",
        "sm:flex-row",
        "w-full",
        "rounded-lg",
        "text-left",
        "bg-gray-700",
        "text-white",
        "p-4"
      );
    });
  }
}
