// ["MainLayout", "Component"]    


import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation_Component";
import ContentArea from "./ContentArea_Component";

export default function MainLayout_Component() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Left column: SidebarNavigation */}
        <div className="w-1/5 fixed h-full">
          <SidebarNavigation />
        </div>

        {/* Right column: ContentArea */}
        <div className="w-4/5 ml-[20%] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/data-room" replace />} />
            <Route path="/data-room" element={<ContentArea />} />
            <Route path="/users-list" element={<ContentArea />} />
            <Route path="/data-chat" element={<ContentArea />} />
            <Route path="/faq" element={<ContentArea />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}