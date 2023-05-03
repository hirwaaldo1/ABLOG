import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "interfaces/articles";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
  }),

  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (publisher) => {
        if (publisher) {
          return publisher === "headlines"
            ? `top-headlines?country=us&pageSize=10&apiKey=${REACT_APP_API_KEY}`
            : `top-headlines?sources=${publisher}&pageSize=10&apiKey=${REACT_APP_API_KEY}`;
        }
      },
      transformResponse: (response: ApiResponse) => response.articles,
    }),
    searchArticles: builder.query({
      query: (keyword) => {
        return `everything?q=${keyword}&pageSize=10&apiKey=${REACT_APP_API_KEY}`;
      },
      transformResponse: (response: ApiResponse) => response.articles,
    }),
  }),
});
export const { useGetArticlesQuery, useSearchArticlesQuery } = articlesApi;
