import chalk from "chalk";
import inquirer from "inquirer";
import runMenu from "../..";
import users from "../../db/users";
import Movie from "../../interfaces/Movie";
import addMovies from "../movies/addMovies";
import { addToUserListQuestions } from "./menuQuestions";

async function addMoviesToList(movies: Movie[], loggedUserId: number){

    try {
        
        const listIdsAnswer = await inquirer.prompt(addToUserListQuestions);
        const listIds = listIdsAnswer.option.split(",").map((id: string) => parseInt(id))
        
        users[loggedUserId] = addMovies(users[loggedUserId], movies, ...listIds)
        console.log(chalk.greenBright.bold(` \n Movie(s) added to ${users[loggedUserId].name} list! \n \n MY LIST`))
        console.log(users[loggedUserId].myList)
        runMenu();
    } catch (error) {
        console.log(chalk.redBright("\n User MUST be logged to add movies! \n \n"))
        runMenu()
    }

}


export default addMoviesToList;