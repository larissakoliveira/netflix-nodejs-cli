import inquirer from "inquirer";
import Movie from "./interfaces/Movie";
import MovieService from "./services/MovieService";
import MenuOptions from "./enums/MenuOptions";
import users from "./db/users";
import { menuQuestions, whichUserQuestions } from "./utils/cliCommands/menuQuestions";
import chalk from 'chalk';
import showAverage from "./utils/cliCommands/showAverage";
import rateMovie from "./utils/cliCommands/rateMovie";
import addToList from "./utils/cliCommands/addToList";


let movies: Movie[];
let loggedUserId: number;

async function runMenu() {
    const movieService = new MovieService();

    const answers = await inquirer.prompt(menuQuestions);
        console.clear();
    switch(answers.option) {
        case MenuOptions.DOWNLOAD_AND_LOGIN:
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
           
            loggedUserId = users.findIndex(user => user.id === userAnswer.option)
            if(loggedUserId === -1){
                console.clear();
                console.log(chalk.red(
                    "USER NOT FOUND! \n")
                    )
                runMenu()  
                break;
            }
            console.clear()
                const userData = users.filter(user => user.id === userAnswer.option)
                console.log(chalk.yellow(`Welcome to ${chalk.red("NETFLIX")}, ${userData[0].name}! \n`)) 
    
            runMenu()
            break;
       
        case MenuOptions.RATE_MOVIE: 
            rateMovie(movies)
            break;

        case MenuOptions.SHOW_WITH_AVERAGE:
           showAverage(movies)
        break;
        case MenuOptions.ADD_TO_LIST:

            addToList(movies, loggedUserId)
            break;
        case MenuOptions.CHANGE_USER:
            runMenu()
            console.log(chalk.green("User logged out... to login again, press 1 \n \n"))
            break;
        case MenuOptions.EXIT:
            return;
    }
}


export default runMenu;

runMenu()

