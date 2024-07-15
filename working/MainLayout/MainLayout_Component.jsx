// ["MainLayout", "Component"]    


import React from "react";

// IMPORTANT DO NOT CHANGE
// This page uses react-router V6 which does not have Switch
import { BrowserRouter, Route, Routes } from "react-router-dom";
// END IMPORTANT

// This page is currently used to provide structure and layout to the overall site
export default function MainLayout_Component() {
  // Blank white page component
  const BlankPage = () => (
    <div className="w-screen h-screen bg-white"></div>
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          {/* Home route rendering the blank white page */}
          <Route path="/" element={<BlankPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}