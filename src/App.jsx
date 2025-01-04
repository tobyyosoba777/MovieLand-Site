import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import searchIcon from './search.svg'
import { SearchIcon } from 'lucide-react'
import MovieCard from './MovieCard';


const API_KEY = "fbdff94d"
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`

// const movie = {
//   "Title": "No Time to Die",
//   "Year": "1992",
//   "imdbID": "tt0103987",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxOTlmMTAtMzMzOS00NGQ5LWFmZTktM2U3ODY3NzBiYzFkXkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('spiderman')

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  searchMovies()

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
        placeholder='Search for Movies' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} /> */}
        <SearchIcon 
          color='gold' 
          alt="search" 
          onClick={() => searchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
          ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

    </div>
  );
}

export default App;