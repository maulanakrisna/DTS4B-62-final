import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TheNewsAPI = createApi({
  reducerPath: 'TheNewsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thenewsapi.com/v1/news/locale=id',
  }),
  tagTypes: ['top', 'all'],
  endpoints: (builder) => ({
    getTopNews: builder.query({
      query: () => "top",
      providesTags: ['top'],
    }),
    getAllNews: builder.query({
      query: () => "all",
      providesTags: ['all'],
    }),
    getNewsbyUuid: builder.query({
      query: (uuid) => `uuid/${uuid}`,
    }),
  })
});

export const {
  useGetNewsbyUuidQuery,
  useGetTopNewsQuery,
  useGetAllNewsQuery,
} = TheNewsAPI;