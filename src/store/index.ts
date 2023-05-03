import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articles";
import { publishersApi } from "../services/publishersApi";
import { articlesApi } from "../services/articlesApi";
const store = configureStore({
  reducer: {
    articles: articlesReducer,
    [publishersApi.reducerPath]: publishersApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      publishersApi.middleware,
      articlesApi.middleware
    ),
});

export default store;
