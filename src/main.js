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

      // create movie image
      const movieImage = document.createElement("div");
      movieImage.classList.add("w-36", "h-36", "rounded-lg", "overflow-hidden");
      const img = document.createElement("img");
      img.src = `${movie.poster}`;
      img.alt = `${movie.title}`;
      movieImage.append(img);

      // create movie info
      const movieInfo = document.createElement("div");
      movieInfo.classList.add("flex", "flex-col", "justify-start", "p-4");

      // movie title
      const movieTitle = document.createElement("h5");
      movieTitle.classList.add("text-xl", "font-medium", "mb-1");
      movieTitle.innerText = `${movie.title}`;
      movieInfo.append(movieTitle);
    });
  }
}
