import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import movies from '../movies';
import MovieCard from './MoviesCards'
function Home(props) {
   
    
    return (
        <div className='home'>
            <MovieCard details={movies}></MovieCard>
        </div>
    );
}

export default Home;