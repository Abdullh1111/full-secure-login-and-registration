import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../service/userApi'
import { verificationApi } from '../service/verificationApi'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath] : userApi.reducer,
    [verificationApi.reducerPath] : verificationApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, verificationApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch