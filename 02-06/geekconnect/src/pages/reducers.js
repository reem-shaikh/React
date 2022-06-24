// reducer is responsible for executing the logic for the specific action, after checking the action using action.type 

import { LIKE_POST, DISLIKE_POST,SET_THEME_DARK, SET_THEME_LIGHT } from "./constants";

//reducers takes state and action as arguments 
const initialState = {
    theme: "light",
    likedPosts: [],
}

const reducer = (state = initialState, action ) => {
    switch(action.type){
        //Instead of re-witting this constant multiple times simply make a common file named constants.js
        case SET_THEME_LIGHT:
            state.theme = 'light'
            break;
        case SET_THEME_DARK:
            state.theme = 'dark'
            break;
        case LIKE_POST:
           // state.likedPosts.push(action.payload);
            state.likedPosts = [action.payload, ...state.likedPosts] 
            break;
        case DISLIKE_POST:
            const index = state.likedPosts.indexOf(action.payload);
            if(index >= 0) {
              state.likedPosts.splice(index, 1);
            }
            break;
        default:
             break;

    }
    return { ...state }
}

export default reducer