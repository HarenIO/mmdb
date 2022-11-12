//Problem 1: Visa sökresultat innan alla requests är gjorda & klara, leder till att listan med sökresultat från sökningen fortsätter fyllas på även fast användaren tömt sökrutan.

//Lösning till problem 1: Gör alla förfrågningar till API och spara svaren i array. När alla förfrågningar är klara; loopa igenom array och bygg upp sökresultat.

//Problem 2: Denna lösningen ledde till nytt problem. Det gjorde att sökningen blev otroligt seg, då jag väntade på att alla förfrågningar skulle besvaras innan listan med sökresultat byggdes upp. Blev en delay på 3-5 sek.

//Lösning till problem 2: Avbryt Axios förfrågan ifall användare tömmer sökrutan eller ändrar sökningen till något annat.

//Potentiel lösning, vid sök: Spara sökterm i variabel > Ifall variabel inte matchar input.value, clearSearch()

const apiKey = 'd0bd2728'
const searchInput = document.querySelector('input')
let searchKey;
let movies;


const fetchData = async (searchTerm) => {
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: apiKey,
      s: searchTerm
    }
  })
  if(response.data.Error){
    return false;
  }
  return response.data
}

const fetchMovie = async (movieID) => {
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: apiKey,
      i: movieID
    }
  })
  if(response.data.Error){
    return false;
  }
  return response
}


const clearSearch = () => {
  document.querySelector('.autocomplete').innerHTML = ""
  document.querySelector('.autocomplete').classList.remove('showAutoComplete')
}



const movieLooper = async (movies) => {
  for(let movie of movies.Search){
    if(searchKey != searchInput.value){
      clearSearch()
      return
    }
        const movieReq = fetchMovie(movie.imdbID)
        let movieInfo = await movieReq
        createResult(movieInfo.data)
      }
}


//Debouncing search input
let timeoutId;
searchInput.addEventListener('input', (e) => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(async () => {
    movies = await fetchData(e.target.value)
      if(!movies){
      clearSearch()
      return
      }
      searchKey = e.target.value
      clearSearch()
      movieLooper(movies)
  }, 1000)
})


//If user clicks anywhere on page, hide results window
document.querySelector("body").addEventListener('mouseup', () => {
  document.querySelector('.autocomplete').classList.remove('showAutoComplete')
})



//If user clicks on searchbox, show results again; unless search input is empty
searchInput.addEventListener('click', () => {
  if(!movies || searchInput.value){
    return
  }
  document.querySelector('.autocomplete').classList.add('showAutoComplete')
})