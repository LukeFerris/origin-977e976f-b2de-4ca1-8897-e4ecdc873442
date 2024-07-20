

// ["ReduxStore", "Store"]    

import { configureStore } from "@reduxjs/toolkit";

// IMPORTANT: imports for all slices go here
import { dealReducer } from "./DealSlice_Store.jsx";
import { dataRoomReducer } from "./DataRoomSlice_Store.jsx";

const store = configureStore({
  reducer: {
    // .. reducers go here
    dealState: dealReducer,
    dataRoomState: dataRoomReducer,
  },
});

export default store;