import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlices";

const store = configureStore({
  reducer: {
    auth2: authReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware(),
  devTools: true,
});

// Get the type of our store variable
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
