import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const publishersApi = createApi({
  reducerPath: "publishersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
    headers: {
      "X-Api-Key": REACT_APP_API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getPublisher: builder.query({
      query: () => `top-headlines/sources?country=us`,
    }),
  }),
});

export const { useGetPublisherQuery } = publishersApi;
