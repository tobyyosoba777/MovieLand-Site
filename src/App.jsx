import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import searchIcon from './search.svg'
import { SearchIcon } from 'lucide-react'
import MovieCard from './MovieCard';
import Footer from './Footer'


const API_KEY = "fbdff94d"
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('spiderman')

  const searchMovies = async(title) => {
    if(!title) return;
    try {
      const response = await fetch(`${API_URL}&s=${title}`) || [];
      const data = await response.json()
      console.log(data.Search)
      setMovies(data.Search || [])
    } catch(error) {
      console.error('Failed to fetch movies:', error)
    }
    
  }

  useEffect(() => {
    searchMovies(searchTerm)
  }, []);


  return (
    <div className="app">
      <h1 className=''>MovieLand</h1>
      <div className="search">
        <input type='text'
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
            {movies.map((movie) => (
              <MovieCard movie={movie} key={moveBy.imdbID} />
          ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

        <Footer/>

    </div>

  );
}


export default App;