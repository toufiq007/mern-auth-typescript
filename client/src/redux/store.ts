import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/userSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware(),
  devTools: true,
});

// Get the type of our store variable
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
