import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'spotify',
  initialState: {
    playingTrack: "",
  },
  reducers: {
    changePlayingTrack(state, action) {
      state.playingTrack = action.payload;
    }
  }
});

export const { changePlayingTrack } = slice.actions;
export default slice.reducer;