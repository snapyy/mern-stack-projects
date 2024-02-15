import { configureStore } from "@reduxjs/toolkit";
// Import the reducer
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice, // Assign the reducer to the "auth" key
  },
});

export default store;
