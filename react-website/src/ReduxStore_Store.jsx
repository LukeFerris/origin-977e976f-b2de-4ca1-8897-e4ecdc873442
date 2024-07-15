import { configureStore } from "@reduxjs/toolkit";

// IMPORTANT: imports for all slices go here
import modalVisibilityReducer from "./ModalVisibilityState_Store"; // Importing ModalVisibilityState slice

const store = configureStore({
  reducer: {
    modalVisibility: modalVisibilityReducer,
  },
});

export default store;
