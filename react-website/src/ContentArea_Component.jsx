// ["ContentArea", "Component"]    


import React from 'react';

export default function ContentArea_Component() {
  // IMPORTANT: This component displays placeholder content for different application sections
  const sections = ['Data Room', 'Users List', 'Data Chat', 'FAQ'];

  return (
    <div className="w-4/5 h-screen overflow-y-auto bg-white p-6 transition-all duration-300 ease-in-out">
      {sections.map((section, index) => (
        <div key={index} className="mb-8 p-6 border-2 border-dashed border-gray-400 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{section}</h2>
          <p className="text-gray-600 text-lg italic">
            {`This is a placeholder for the ${section} section. Content will be added here in the future.`}
          </p>
          {/* Empty state */}
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-500">No content available for {section} yet.</p>
          </div>
        </div>
      ))}
    </div>
  );
}