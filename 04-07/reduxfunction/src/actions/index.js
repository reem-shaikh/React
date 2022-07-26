//actions performed on the app, must be mentioned over here 
//your specifying the app, what needs to be done, when a specific event has occurred
export const incNumber = () => {
    return {
        type: "INCREEMENT"
        // payload: num 
    }
}
//were deecreementing by 1, when Onclick action is triggered in App.js 
// when - button is clicked, title="Decreement" is called 
export const decNumber = () => {
    return {
        type: "DECREEMENT"
    }
}