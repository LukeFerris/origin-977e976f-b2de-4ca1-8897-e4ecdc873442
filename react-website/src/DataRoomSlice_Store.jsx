// ["DataRoomSlice", "Store"]    
// IMPORTANT: The store key for this slice is guaranteed to be dataRoomState. You should use this when accessing state related to this slice e.g. state.dataRoomState.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedFiles: [],
  uploadSimulationSuccess: false,
};

// Async thunk for setting a selected file
// input: file: UploadedFile
export const setSelectedFile = createAsyncThunk(
  "dataRoom/setSelectedFile",
  async (file, { rejectWithValue }) => {
    try {
      if (!file.id || typeof file.id !== "string" || !file.fileName || typeof file.fileName !== "string") {
        return rejectWithValue("Invalid file object");
      }
      return file;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for simulating file upload
// inputs: none
export const simulateUpload = createAsyncThunk(
  "dataRoom/simulateUpload",
  async (_, { getState }) => {
    const { selectedFiles } = getState().dataRoomState;
    if (selectedFiles.length === 0) {
      throw new Error("No files selected for upload");
    }
    // Simulate async upload process
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return true;
  }
);

// Async thunk for resetting upload simulation
// inputs: none
export const resetUploadSimulation = createAsyncThunk(
  "dataRoom/resetUploadSimulation",
  async () => {
    return null;
  }
);

const dataRoomSlice = createSlice({
  name: "dataRoomState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setSelectedFile.fulfilled, (state, action) => {
        state.selectedFiles.push(action.payload);
      })
      .addCase(setSelectedFile.rejected, (state, action) => {
        console.error("Failed to set selected file:", action.payload);
      })
      .addCase(simulateUpload.fulfilled, (state) => {
        state.uploadSimulationSuccess = true;
      })
      .addCase(simulateUpload.rejected, (state, action) => {
        console.error("Upload simulation failed:", action.error.message);
      })
      .addCase(resetUploadSimulation.fulfilled, (state) => {
        state.selectedFiles = [];
        state.uploadSimulationSuccess = false;
      });
  },
});

export const dataRoomReducer = dataRoomSlice.reducer;