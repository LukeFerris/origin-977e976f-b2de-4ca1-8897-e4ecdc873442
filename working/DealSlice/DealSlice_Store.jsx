// ["DealSlice", "Store"]    
// IMPORTANT: The store key for this slice is guaranteed to be dealState. You should use this when accessing state related to this slice e.g. state.dealState.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_DealAPIUrl;

// Async thunk for fetching deals from the API
export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/deals`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

function validateDeal(deal) {
  if (!deal.clientName || typeof deal.clientName !== 'string' || deal.clientName.trim() === '') {
    return "Client name must be a non-empty string";
  }
  if (!deal.startDate || !(deal.startDate instanceof Date)) {
    return "Deal start date must be a valid Date";
  }
  if (!deal.endDate || !(deal.endDate instanceof Date)) {
    return "Deal end date must be a valid Date";
  }
}

// Async thunk for creating a new deal
// newDeal: { clientName: string, startDate: Date, endDate: Date }
export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (newDeal, { rejectWithValue }) => {
    try {
      const validationError = validateDeal(newDeal);
      if (validationError) {
        return rejectWithValue(validationError);
      }

      const response = await axios.post(`${API_URL}/deals`, {
        clientName: newDeal.clientName,
        startDate: newDeal.startDate.toISOString().split('T')[0],
        endDate: newDeal.endDate.toISOString().split('T')[0]
      }, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

// Async thunk for setting deal form visibility
// isVisible: boolean
export const setDealFormVisibility = createAsyncThunk(
  "deals/setDealFormVisibility",
  async (isVisible) => {
    return isVisible;
  }
);

// Async thunk for initializing the deal slice
// No input parameters
export const initializeDealSlice = createAsyncThunk(
  "deals/initializeDealSlice",
  async (_, { dispatch }) => {
    await dispatch(fetchDeals());
  }
);

const initialState = {
  deals: [],
  dealFormVisible: false,
  loading: false,
  error: null,
};

const dealSlice = createSlice({
  name: "dealState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.deals.push(action.payload);
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(setDealFormVisibility.fulfilled, (state, action) => {
        state.dealFormVisible = action.payload;
      })
      .addCase(initializeDealSlice.fulfilled, (state) => {
        // No additional state changes needed here
      });
  },
});

export const dealReducer = dealSlice.reducer;