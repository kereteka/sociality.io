import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import axios from "axios";

export interface Root {
  record: Data
  metadata: Metadata
}

export interface Data {
  posts_by_date: PostsByDate
}

export type PostsByDate = Record<string, Post[]>

export interface Post {
  published_at: string
  is_published: boolean
  status: number
  entry: Entry
  updated_at: string
  created_at: string
  link: string
  account: Account
}

export interface Entry {
  type: string
  message: string
  image: string[]
  video?: any
}

export interface Account {
  name: string
  username: string
  image: string
  link: string
  channel: string
}

export interface Metadata {
  id: string
  private: boolean
  createdAt: string
}

console.log(import.meta.env, 'adana')

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API_URL}`,
    prepareHeaders(headers) {
      headers.set('X-ACCESS-KEY', `${import.meta.env.VITE_APP_X_ACCESS_KEY}`);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchData: builder.query<Post[], number | void>({
        query() {
          return ``;
        }
      })
    }
  }
})


export const { useFetchDataQuery } = apiSlice
