import { createSlice } from "@reduxjs/toolkit";
const headlinesSlice = createSlice({
  name: "headlines",
  initialState: {
    value: [],
    backupValues: [],
    isError: false,
    isLoading: true,
  },
  reducers: {
    setHeadlines: (state, action) => {
      return (state = action.payload);
    },
    searchHeadlines: (state, action) => {
      const { value } = action.payload;
      const { backupValues } = state;
      if (value === "") {
        return {
          ...state,
          value: backupValues,
        };
      }
      const filteredHeadlines = backupValues.filter((headline) => {
        const { title } = headline;
        return title.toLowerCase().includes(value.toLowerCase());
      });
      return {
        ...state,
        value: filteredHeadlines,
      };
    },
  },
});

export const { setHeadlines, searchHeadlines } = headlinesSlice.actions;
export default headlinesSlice.reducer;
