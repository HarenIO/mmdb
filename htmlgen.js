//Autocomplete window.
const searchResult = document.querySelector('.search-result')
const moviePoster = document.querySelector('.poster-link')
const movieInfo = document.querySelector('.movie-info')
const movieTitle = document.querySelector('.movie-title')
const movieRelease = document.querySelector('.movie-release')
const movieActors = document.querySelector('.movie-actors')
const nav = document.querySelector('nav')

//Spans under ul
const title = document.querySelector("#movie-title")
const release = document.querySelector("#movie-release")
const runtime = document.querySelector("#movie-runtime")
const rated = document.querySelector("#movie-rated")
const genre = document.querySelector("#movie-genre")
const director = document.querySelector("#movie-director")
const writer = document.querySelector("#movie-writer")
const actors = document.querySelector("#movie-actors")
const language = document.querySelector("#movie-language")
const awards = document.querySelector("#movie-awards")
const boxoffice = document.querySelector("#movie-boxoffice")
const metascore = document.querySelector("#movie-metascore")
const imdbrating = document.querySelector("#movie-imdbrating")


//Runs when movie from autocomplete window is clicked.
const createMovieInfo = (movie) => {
  searchInput.value = movie.Title
  movies = []
  clearSearch()
  title.innerText = movie.Title
  release.innerText = movie.Released
  runtime.innerText = movie.Runtime
  rated.innerText = movie.Rated
  genre.innerText = movie.Genre
  director.innerText = movie.Director
  writer.innerText = movie.Writer
  actors.innerText = movie.Actors
  language.innerText = movie.Language
  awards.innerText = movie.Awards
  boxoffice.innerText = movie.BoxOffice
  metascore.innerText = movie.Metascore
  imdbrating.innerText = movie.imdbRating

  document.querySelector('.movie-info-list').classList.add('showMovieInfo')
}

const createResult = (movie) => {
  const autoComplete = document.querySelector('.autocomplete')
  autoComplete.classList.add('showAutoComplete')

  const searchResult = document.createElement('div')
  searchResult.classList.add('search-result')
  autoComplete.append(searchResult)

  const moviePoster = document.createElement('div')
  moviePoster.classList.add('movie-poster')
  searchResult.append(moviePoster)
  const posterLink = document.createElement('img')
  posterLink.classList.add('poster-link')
  moviePoster.append(posterLink)

  const movieInfo = document.createElement('div')
  movieInfo.classList.add('movie-info')
  searchResult.append(movieInfo)
  const movieTitle = document.createElement('h4')
  movieTitle.classList.add('movie-title')
  const movieRelease = document.createElement('p')
  movieRelease.classList.add('movie-release')
  const movieActors = document.createElement('p')
  movieActors.classList.add('movie.actors')
  movieInfo.append(movieTitle, movieRelease, movieActors)


  posterLink.setAttribute("src", `${movie.Poster}`)
  movieTitle.innerText=(movie.Title)
  movieRelease.innerText=(movie.Year)
  movieActors.innerText=(movie.Actors)


  //Eventlistener on every search result. Runs createMovieInfo().
  searchResult.addEventListener('click', () => {
    createMovieInfo(movie)
  })
  
}