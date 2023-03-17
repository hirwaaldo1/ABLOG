import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
    headers: {
      "X-Api-Key": REACT_APP_API_KEY,
    },
  }),

  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (publisher) => {
        if (publisher) {
          return publisher === "headlines"
            ? `top-headlines?country=us&pageSize=10`
            : `top-headlines?sources=${publisher}&pageSize=10`;
        }
      },
      transformResponse: (response) => response.articles,
    }),
    searchArticles: builder.query({
      query: (keyword) => {
        return `everything?q=${keyword}&pageSize=10`;
      },
      transformResponse: (response) => response.articles,
    }),
  }),
});
export const { useGetArticlesQuery, useSearchArticlesQuery } = articlesApi;
