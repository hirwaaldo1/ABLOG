import { createSlice } from "@reduxjs/toolkit";
const headlinesSlice = createSlice({
  name: "headlines",
  initialState: {
    value: [],
    isError: false,
    isLoading: true,
  },
  reducers: {
    setHeadlines: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setHeadlines } = headlinesSlice.actions;
export default headlinesSlice.reducer;
