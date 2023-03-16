import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (publisher) => {
        if (publisher) {
          return publisher === "headlines"
            ? `top-headlines?country=us&apiKey=${REACT_APP_API_KEY}&pageSize=10`
            : `top-headlines?sources=${publisher}&apiKey=${REACT_APP_API_KEY}`;
        }
      },

      transformResponse: (response) => response.articles,
    }),
  }),
});
export const { useGetArticlesQuery } = articlesApi;
