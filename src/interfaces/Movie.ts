import IndicativeRating from "../enums/indicativeRating";

interface Movie {
    id: number;

    name: string;

    ratings: number[];

    indicativeRating: IndicativeRating;
}

export default Movie;