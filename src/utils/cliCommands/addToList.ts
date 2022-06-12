import chalk from "chalk";
import inquirer from "inquirer";
import runMenu from "../..";
import users from "../../db/users";
import Movie from "../../interfaces/Movie";
import addMovies from "../movies/addMovies";
import { addToUserListQuestions } from "./menuQuestions";

async function addToList(movies: Movie[], loggedUserId: number){

    try {
        const listIdsAnswer = await inquirer.prompt(addToUserListQuestions);
        const listIds = listIdsAnswer.option.split(",").map((id: string) => parseInt(id))
        
        users[loggedUserId] = addMovies(users[loggedUserId], movies, ...listIds)
        console.log(users[loggedUserId])
        runMenu();
    } catch (error) {
        console.log(chalk.red("\n User MUST be logged in to add movies! \n \n"))
        runMenu()
    }

}


export default addToList;