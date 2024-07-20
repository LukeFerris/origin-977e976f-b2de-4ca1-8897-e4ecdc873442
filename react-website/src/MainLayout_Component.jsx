// ["MainLayout", "Component"]    


import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation_Component";
import ContentArea from "./ContentArea_Component";
import DealForm from "./DealForm_Component";
import DealList from "./DealList_Component";

export default function MainLayout_Component() {
  return (
    <Router>
      {/* Main container with light neutral background */}
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F5F5F5]">
        {/* Left column: SidebarNavigation */}
        <div className="w-full md:w-1/5 md:fixed md:h-full z-10 transition-all duration-300 ease-in-out">
          <SidebarNavigation />
        </div>

        {/* Right column: ContentArea and DealList */}
        <div className="w-full md:w-4/5 md:ml-[20%] overflow-y-auto transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<ContentArea />} />
            <Route path="/data-room" element={<ContentArea />} />
            <Route path="/users-list" element={<ContentArea />} />
            <Route path="/data-chat" element={<ContentArea />} />
            <Route path="/faq" element={<ContentArea />} />
            <Route path="/create-deal" element={<DealForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* DealList component added to display existing deals */}
          <DealList />
        </div>
      </div>
    </Router>
  );
}