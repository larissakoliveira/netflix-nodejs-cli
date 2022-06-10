import axios from "axios";

import filterMoviesByIndicativeRating from "./utils/filterMoviesByIndicativeRating";
import orderByAverageRate from "./utils/orderByAverageRate";
import IndicativeRating from "./enums/indicativeRating";
import loadMovies from './utils/loadMovies';
import addMovies from "./utils/addMovies";
import Movie from "./interfaces/Movie";
import User from "./interfaces/User";

const movies: Movie[] = [
    {
        id: 1,
        name: 'Spider Man',
        ratings: [1, 5, 3],
        indicativeRating: IndicativeRating.AL
    },
    {
        id: 2,
        name: 'Doctor Strange',
        ratings: [5, 5, 3],
        indicativeRating: IndicativeRating.A18
    },
    {
        id: 3,
        name: 'Avengers',
        ratings: [],
        indicativeRating: IndicativeRating.A12
    }
];
;


const user: User = {
    name: "Bruno Benicio",
    age: 17,
    myList: []
}


const orderedMovies = orderByAverageRate(movies);
const filteredMoviesByIndicativeRating = filterMoviesByIndicativeRating(orderedMovies, user)
const newUserWithNewList = addMovies(user, movies, 1, 1, 1)


console.log(newUserWithNewList);
console.log(filteredMoviesByIndicativeRating);


const request = axios({
    method: "get",
    url: "https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=100"
})

request.then((resultado) => {
    const { data } = resultado.data
    console.log(loadMovies(data))
})