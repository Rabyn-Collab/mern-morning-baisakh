import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi.js";
import { userSlice } from "../features/user/userSlice.js";



export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer
  },

  //caching, polling ,invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware
    ]),
})