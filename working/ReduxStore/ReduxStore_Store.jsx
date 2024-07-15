import { configureStore } from "@reduxjs/toolkit";

// IMPORTANT: imports for all slices go here
// ...

const store = configureStore({
  reducer: {
    // .. reducers go here
  },
});

export default store;
