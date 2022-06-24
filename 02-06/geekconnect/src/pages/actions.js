//actions are plain js object which tells reducer what to do, payload (whatever item you want to store). You'll need to dispatch actions for it to reach reducer 
import { LIKE_POST, DISLIKE_POST, SET_THEME_DARK, SET_THEME_LIGHT } from "./constants"

const  setThemeLight = () => {
    return {
        type: SET_THEME_LIGHT
    }
}

const  setThemeDark = () => {
    return {
        type: SET_THEME_DARK
    }
}

const likePost = (id) => {
    return {
        type: LIKE_POST,
        payload: id
    }
}

const dislikePost = (id) => {
    return {
        type: DISLIKE_POST,
        payload: id
    }
}

export { setThemeLight,  setThemeDark, likePost, dislikePost }