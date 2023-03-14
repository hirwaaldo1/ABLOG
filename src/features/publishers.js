import { createSlice } from "@reduxjs/toolkit";
const publishersSlice = createSlice({
  name: "publishers",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        id: state[state.length - 1]?.id + 1 || 1,
        title: action.payload.title,
        checked: false,
      });
    },
  },
});

export const { add } = publishersSlice.actions;
export default publishersSlice.reducer;
