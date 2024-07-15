import { createSlice } from "@reduxjs/toolkit";

// IMPORTANT: The store key for this slice is the same as the name: modalVisibility. You should use this when accessing state related to this slice.

let initialState = [];

// Create the newCompanySlice using createSlice
const visibilitySlice = createSlice({
  name: "modalVisibility",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default visibilitySlice.reducer;

// Any action creator must be exported here
// export const { toggleVisibility } = visibilitySlice.actions;
