

// ["MainLayout", "Component"]    

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DealList from "./DealList_Component";
import DealForm from "./DealForm_Component";
import { fetchDeals, setDealFormVisibility } from "./DealSlice_Store";

export default function MainLayout_Component() {
  const dispatch = useDispatch();

  // Fetch deals on component mount
  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  // Handler for 'Start a New Deal' button
  const handleStartNewDeal = () => {
    dispatch(setDealFormVisibility(true));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4 py-8 flex flex-col items-center">
                <button
                  onClick={handleStartNewDeal}
                  className="mb-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  aria-label="Start a new deal by opening the deal creation form"
                >
                  Start a New Deal
                </button>
                <DealForm />
                <DealList />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}