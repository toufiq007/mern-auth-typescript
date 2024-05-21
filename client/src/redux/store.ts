import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    loginState: loginReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware(),
  devTools: true,
});

// Get the type of our store variable
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
