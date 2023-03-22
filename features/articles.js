import { createSlice } from "@reduxjs/toolkit";
const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    value: [],
    isError: false,
    isLoading: true,
  },
  reducers: {
    setArticles: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
