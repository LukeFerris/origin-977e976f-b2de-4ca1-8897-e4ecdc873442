import React from "react";

// REMOVE the holding page link
// Do not use Holding page.
import HoldingPage_Component from "./HoldingPage_Component";
// End remove

// IMPORTANT DO NOT CHANGE
// This page uses react-router V6 which does not have Switch
import { BrowserRouter, Route, Routes } from "react-router-dom";
// END IMPORTANT

// This page is currently used to provide structure and layout to the overall site
export default function MainLayout_Component() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          {/* You should always remove the holding page component and replace it with at minimum placeholder content */}
          <Route
            index
            element={<HoldingPage_Component dateToShow={new Date()} />}
          />
          {/* End holding page content which should be removed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
