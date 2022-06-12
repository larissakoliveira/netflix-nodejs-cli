
export const menuQuestions = [
    {
        type: "input",
        name: "option",
        message: "ATTENTION! If you have not downloaded yet the movies, please do it first, if you have, ignore option 1! \n Choose an option: \n 1 - Download movies \n 2 - Rate movie \n 3 - Show movies rate average \n 4 - Add movie to your list \n 5 - Change user \n 0 - Exit \n"
    }
]

export const chooseMovieQuestions = [
    {
        type: "number",
        name: "option",
        message: "What movie? Enter the movie id please"
    }
]

export const rateQuestions = [
    {
        type: "number",
        name: "option",
        message: "Between 0 to 5, what rate do you want to give to this movie?"
    }
]

export const whichUserQuestions = [{
    type: "number",
    name: "option",
    message: "\n Who is using? Please, enter your id"
}]

export const addToUserListQuestions = [{
    type: "input",
    name: "option",
    message: "Enter the movies id you want to add to your list: (ex: 1, 2, 3)"
}]
