import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isAuthenticated: authReducer,
  },
});

//A friendly abstraction over the standard Redux *createStore* function that adds good defaults to the store setup for a better development experience.

export default store;
