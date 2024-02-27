import MovieListData from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  const {nowPlayingMovies, popularMovies} = movies;
  // console.log(nowPlayingMovies); 


  return (
    nowPlayingMovies && (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-72 pl-4 md:pl-12 relative z-20'>
      <MovieListData title={"Now Playing"} movies={nowPlayingMovies}/>
      <MovieListData title={"Popular"} movies={popularMovies}/>
      <MovieListData title={"Upcoming Movies"} movies={nowPlayingMovies}/>
      <MovieListData title={"Thriller Movies"} movies={nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer