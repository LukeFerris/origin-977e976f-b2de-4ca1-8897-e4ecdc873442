// ["MainLayout", "Component"]    


import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation_Component";
import ContentArea from "./ContentArea_Component";
import DataRoomUpload from "./DataRoomUpload_Component";

export default function MainLayout_Component() {
  return (
    <Router>
      {/* Main container with light neutral background */}
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F5F5F5]">
        {/* Left column: SidebarNavigation */}
        <div className="w-full md:w-[250px] md:fixed md:h-full z-10 transition-all duration-300 ease-in-out">
          <SidebarNavigation />
        </div>

        {/* Right column: ContentArea */}
        <div className="w-full md:w-[calc(100%-250px)] md:ml-[250px] overflow-y-auto transition-all duration-300 ease-in-out">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<ContentArea />} />
            
            {/* Dashboard route */}
            <Route path="/dashboard" element={<ContentArea />} />
            
            {/* Data Room route with DataRoomUpload */}
            <Route path="/data-room" element={
              <>
                <ContentArea />
                <DataRoomUpload />
              </>
            } />
            
            {/* Document Status route */}
            <Route path="/document-status" element={<ContentArea />} />
            
            {/* Issue Tracker route */}
            <Route path="/issue-tracker" element={<ContentArea />} />
            
            {/* Users List route */}
            <Route path="/users-list" element={<ContentArea />} />
            
            {/* Data Chat route */}
            <Route path="/data-chat" element={<ContentArea />} />
            
            {/* FAQ route */}
            <Route path="/faq" element={<ContentArea />} />
            
            {/* Create Deal route */}
            <Route path="/create-deal" element={<ContentArea />} />
            
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}