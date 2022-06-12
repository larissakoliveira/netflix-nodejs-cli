import chalk from "chalk";
import runMenu from "../..";
import Movie from "../../interfaces/Movie";
import calculateMoviesAverage from "../movies/calculateMoviesAverage";

function showAverage(movies: Movie[]){
    try{
        const moviesWithAverage = calculateMoviesAverage(movies);
        console.clear()
        moviesWithAverage.map(movie => console.log((`${chalk.blue(movie.name)}, Average: ${chalk.green(movie.average)}`)))
        runMenu();
    
        }
    catch (error) {
        console.log(chalk.red("\n User MUST be logged in to see the movies rate average! \n \n"))
        runMenu()
    }
}

export default showAverage;