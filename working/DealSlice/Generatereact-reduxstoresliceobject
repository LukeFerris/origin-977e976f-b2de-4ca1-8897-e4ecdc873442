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
  const errors = {};
  if (!deal.clientName || typeof deal.clientName !== 'string' || deal.clientName.trim() === '') {
    errors.clientName = 'Invalid client name';
  }
  if (!deal.startDate || !(deal.startDate instanceof Date)) {
    errors.startDate = 'Invalid start date';
  }
  if (!deal.endDate || !(deal.endDate instanceof Date)) {
    errors.endDate = 'Invalid end date';
  }
  return errors;
}

// Async thunk for validating form data
// formData: { clientName: string, startDate: Date, endDate: Date }
export const validateForm = createAsyncThunk(
  "deals/validateForm",
  async (formData) => {
    const validationResult = validateDeal(formData);
    return {
      clientName: Object.keys(validationResult).includes('clientName') ? validationResult.clientName : null,
      startDate: Object.keys(validationResult).includes('startDate') ? validationResult.startDate : null,
      endDate: Object.keys(validationResult).includes('endDate') ? validationResult.endDate : null
    };
  }
);

// Async thunk for creating a new deal
// newDeal: { clientName: string, startDate: Date, endDate: Date }
export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (newDeal, { dispatch, rejectWithValue }) => {
    try {
      const validationResult = await dispatch(validateForm(newDeal)).unwrap();
      if (Object.values(validationResult).some(value => value !== null)) {
        return rejectWithValue("Validation failed");
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
  formValidation: {
    clientName: null,
    startDate: null,
    endDate: null
  },
  isLoading: false,
  error: null,
};

const dealSlice = createSlice({
  name: "dealState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createDeal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deals.push(action.payload);
        state.formValidation = {
          clientName: null,
          startDate: null,
          endDate: null
        };
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(setDealFormVisibility.fulfilled, (state, action) => {
        state.dealFormVisible = action.payload;
      })
      .addCase(initializeDealSlice.fulfilled, (state) => {
        // No additional state changes needed here
      })
      .addCase(validateForm.fulfilled, (state, action) => {
        state.formValidation = action.payload;
      });
  },
});

export const dealReducer = dealSlice.reducer;