import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
const publishersSlice = createSlice({
  name: "publishers",
  initialState: {
    value: [],
    isError: false,
    isLoading: true,
  },
  reducers: {
    setPublishers: (state, action) => {
      return (state = action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setPublishers } = publishersSlice.actions;
export default publishersSlice.reducer;
