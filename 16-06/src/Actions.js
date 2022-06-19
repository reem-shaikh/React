//actions are objects 

//when we pass these objects: setdarkthem and setlighttheme, to provider, provider would understand what to do 

//provider cant understand what value we need to set, in case of function, to make the provider understand we use payload 

//since in setfirstname and setlastname were saving the value user entered, and in setlightheme and setdarktheme were simply toggling the checkbox, so in that case technically we dont need to save any state 
const setFirstName = (firstName) => {
//data is passed inside payload 
    return {
        type: "SET_FIRST_NAME",
        payload: firstName 
    }
}

const setLastName = (lastName) => {

    return {
        type: "SET_LAST_NAME",
        payload: lastName
    }
}

//create 2 objects for true and false 
const setDarkTheme = {
    type: "SET_DARK_THEME"
}

const setLightTheme = {
    type: "SET_LIGHT_THEME"
}

//named exports 
//export each action 
export {setFirstName, setLastName, setDarkTheme, setLightTheme};