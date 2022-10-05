import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import statusReducer from '../features/status/statusSlice'
import firmReducer from '../features/firm/firmSlice'


import { apiSlice } from '../features/data/dataSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    status: statusReducer,
    firm: firmReducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch