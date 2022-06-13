import chalk from "chalk";
import User from "../../interfaces/User";

const users: User[] = [
    {
    id: 1,
    name: chalk.bgWhite.blackBright.bold(" Steve Jobs "),
    age: 15,
    myList: []
},
{
    id: 2,
    name: chalk.bgWhite.bold.redBright(" Bill Gates "),
    age: 66,
    myList: []
},
{
    id: 3,
    name: chalk.bgWhite.blueBright.bold(" Mark Zuckerberg "),
    age: 38,
    myList: []
},
]

export default users;