import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
export const publishersApi = createApi({
  reducerPath: "publishersApi",
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
      "publishersApi"
    >
  ) => ({
    getPublisher: builder.query({
      query: () =>
        `top-headlines/sources?country=us&apiKey=${REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetPublisherQuery } = publishersApi;
