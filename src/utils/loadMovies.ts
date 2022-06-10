import Movie from '../interfaces/Movie';

interface MoviesFromApiDTO {
    id: number;
    title: string;
}

function loadMovies(moviesFromApi: MoviesFromApiDTO[]): Partial<Movie>[]{
    return moviesFromApi.map((movie) => ({
        id: movie.id,
        name: movie.title,
    }))
}

export default loadMovies;