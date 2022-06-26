import { createSlice } from "@reduxjs/toolkit";
// #were defining both actions and reducers in slice.js 
// #createSlice() is an alternative to combineReducers() used in version before v8 
const slice = createSlice({
//   #default values defined here 
  name: 'geekConnect',
  initialState: {
    theme: "light",
    likedPosts: [],
  },

  reducers: {
    // #action.type : defining reducer logic 
    setThemeLight: state => {
      state.theme = "light"
    },
    setThemeDark: state => {
      state.theme = "dark"
    },
    // #were pushing the id of the image clicked on in likedPosts[]
    likePost: (state, action) => {
      state.likedPosts.push(action.payload);
    },
    dislikePost: (state, action) => {
    //   #were fetching the index of the card id user clicked on, and checking whether that index is present in likedPosts[]
      const index = state.likedPosts.indexOf(action.payload);
    //   #if its present then the index will be more than 0
      if(index >= 0) {
        // #then we remove the card id from likedPosts[]
        state.likedPosts.splice(index, 1);
      }
    }
  }
});

// #exporting actions 
export const { setThemeLight, setThemeDark, likePost, dislikePost } = slice.actions;
// #exporting reducers 
export default slice.reducer;