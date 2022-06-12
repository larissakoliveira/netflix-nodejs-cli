import inquirer from "inquirer";
import Movie from "./interfaces/Movie";
import MovieService from "./services/MovieService";
import calculateMoviesAverage from './utils/movies/calculateMoviesAverage';
import addMovies from './utils/movies/addMovies';
import MenuOptions from "./enums/MenuOptions";
import users from "./db/users";
import { addToUserListQuestions, chooseMovieQuestions, menuQuestions, rateQuestions, whichUserQuestions } from "./utils/cliComands/menuQuestions";


let movies: Movie[];
let loggedUserId: number;

async function runMenu() {
    const movieService = new MovieService();
    const answers = await inquirer.prompt(menuQuestions);
        console.clear();
    switch(answers.option) {
        case  MenuOptions.DOWNLOAD:
        try {
            
            console.log("Loading movies...")
            movies = await movieService.listAll();
            console.log("Download done!!!")    
            movies.map(movie => console.log(`${movie.id} - ${movie.name}`)
                )
        } catch (error) {
            console.log("Problem found when downloading the movies")
        } 

        users.map(user => console.log(`\n ${user.id} - ${user.name}`))
        const userAnswer = await inquirer.prompt(whichUserQuestions);
        try {
            
            loggedUserId = users.findIndex(user => user.id === userAnswer.option)
            console.clear()
            const userData = users.filter(user => user.id === userAnswer.option)
            console.log(`Welcome to NETFLIX, ${userData[0].name}!`)
        } catch (error) {
            // console.log(
            //     "USER NOT FOUND!"
            // )
            // runMenu()   
        }
 

        runMenu()
        break;
       
        case MenuOptions.RATE_MOVIE: 
            let movieId: number;
            let rate: number;

            const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
            movieId = chooseMovieAnswers.option;

            const rateAnswers = await inquirer.prompt(rateQuestions);
            rate = rateAnswers.option;

            movies.forEach(movie => {
                if(movie.id === movieId){
                    movie.ratings.push(rate)
                }
            })
            console.clear()
            runMenu()

        break;

        case MenuOptions.SHOW_WITH_AVERAGE:
            const moviesWithAverage = calculateMoviesAverage(movies);
            moviesWithAverage.map(movie => console.log(`${movie.name}, Average: ${movie.average}`))
            runMenu();
        break;
        case MenuOptions.ADD_TO_LIST:
            
            const listIdsAnswer = await inquirer.prompt(addToUserListQuestions);
            const listIds = listIdsAnswer.option.split(",").map((id: string) => parseInt(id))

            users[loggedUserId] = addMovies(users[loggedUserId], movies, ...listIds)
            console.log(users[loggedUserId])
            runMenu();
            break;
        case MenuOptions.CHANGE_USER:
            console.log("Logging out...")
            runMenu()
            break;
        case MenuOptions.EXIT:
            return;
    }
}

runMenu()

