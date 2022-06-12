import chalk from "chalk";
import inquirer from "inquirer";
import runMenu from "../..";
import Movie from "../../interfaces/Movie";
import { chooseMovieQuestions, rateQuestions } from "./menuQuestions";

async function rateMovie(movies: Movie[]){
    let movieId: number;
            let rate: number;

            try {
                const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
                movieId = chooseMovieAnswers.option;
                const movieName = movies[movieId-1].name
                console.log(movieName)
    
                const rateAnswers = await inquirer.prompt(rateQuestions);
                rate = rateAnswers.framework;
    
                movies.forEach(movie => {
                    if(movie.id === movieId){
                        movie.ratings.push(rate)
                    }
                })
                console.clear()
                runMenu()
    
      
                
            } catch (error) {
                console.log(chalk.red("\n User MUST be logged to rate movies! \n \n"))
                runMenu()
            }

    
}

export default rateMovie;