import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Articles } from "interfaces/articles";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
  }),

  endpoints: (
    builder: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      "articlesApi"
    >
  ) => ({
    getArticles: builder.query({
      query: (publisher: string) => {
        if (publisher) {
          return publisher === "headlines"
            ? `top-headlines?country=us&pageSize=10&apiKey=${REACT_APP_API_KEY}`
            : `top-headlines?sources=${publisher}&pageSize=10&apiKey=${REACT_APP_API_KEY}`;
        }
      },
      transformResponse: (response: Articles) => response.articles,
    }),
    searchArticles: builder.query({
      query: (keyword: string) => {
        if (keyword)
          return `everything?q=${keyword}&pageSize=10&apiKey=${REACT_APP_API_KEY}`;
      },
      transformResponse: (response: Articles) => response.articles,
    }),
  }),
});
export const { useGetArticlesQuery, useSearchArticlesQuery } = articlesApi;
