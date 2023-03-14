import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getHeadlines: builder.query({
      query: () =>
        `top-headlines?country=us&apiKey=${REACT_APP_API_KEY}&pageSize=10`,
    }),
  }),
});

export const { useGetHeadlinesQuery } = articlesApi;
