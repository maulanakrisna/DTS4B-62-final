import { configureStore } from "@reduxjs/toolkit";
import { TheNewsAPI } from "../services/api/TheNewsAPI";

const store = configureStore({
  reducer: {
    [TheNewsAPI.reducerPath] : TheNewsAPI.reducer
  },

  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concate(TheNewsAPI.middleware);
  },
});

export default store;