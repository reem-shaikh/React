import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "class",
  initialState: {
    counter: 0
  },

  reducers: {
    INCREMENT: (state) => {
      state.counter += 1;
    },
    DECREMENT: (state) => {
      state.counter -= 1;
    }
  }
});

export const { INCREMENT, DECREMENT } = slice.actions;
export default slice.reducer;
