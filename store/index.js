import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import articlesReducer from "../features/articles";
import publishersReducer from "../features/publishers";
import headlinesReducer from "../features/headlines";
const makeStore = () =>
  configureStore({
    reducer: {
      articles: articlesReducer,
      publishers: publishersReducer,
      headlines: headlinesReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
