// ["MainLayout", "Component"]    


import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation_Component";
import ContentArea from "./ContentArea_Component";
import DealForm from "./DealForm_Component";

export default function MainLayout_Component() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Left column: SidebarNavigation */}
        <div className="w-full md:w-1/5 md:fixed md:h-full">
          <SidebarNavigation />
        </div>

        {/* Right column: ContentArea */}
        <div className="w-full md:w-4/5 md:ml-[20%] overflow-y-auto">
          <Routes>
            <Route path="/" element={<ContentArea />} />
            <Route path="/data-room" element={<ContentArea />} />
            <Route path="/users-list" element={<ContentArea />} />
            <Route path="/data-chat" element={<ContentArea />} />
            <Route path="/faq" element={<ContentArea />} />
            <Route path="/create-deal" element={<DealForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}