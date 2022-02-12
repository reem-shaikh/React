//actions performed on the app, must be mentioned over here 
//your specifying the app, what needs to be done, when a specific event has occured 

//when + button is clicked, title="Increement" is called 
export const incNumber = (num) => {
    return {
        type: "INCREEMENT",
        payload: num 
    }
}

//when - button is clicked, title="Decreement" is called 
export const decNumber = () => {
    return {
        type: "DECREEMENT"
    }
}

