import { createSlice } from "@reduxjs/toolkit";
const publishersSlice = createSlice({
  name: "publishers",
  initialState: "headlines",
  reducers: {
    update: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { update } = publishersSlice.actions;
export default publishersSlice.reducer;
