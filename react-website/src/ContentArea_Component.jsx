// ["ContentArea", "Component"]    


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function ContentArea_Component() {
  // IMPORTANT: This component displays placeholder content for different application sections
  const sections = ['Home', 'Data Room', 'Users List', 'Data Chat', 'FAQ'];

  const HomePage = () => {
    const navigate = useNavigate();

    return (
      <div className="mb-8 p-6 border-2 border-dashed border-gray-400 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Home</h2>
        <p className="text-gray-600 text-lg italic mb-4">
          Welcome to BlankSlateCanvas. Create a new deal or explore other sections.
        </p>
        <button
          onClick={() => navigate('/create-deal')}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          aria-label="Create a new deal"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Create New Deal
        </button>
      </div>
    );
  };

  return (
    <div className="w-4/5 h-screen overflow-y-auto bg-white p-6 transition-all duration-300 ease-in-out">
      {sections.map((section, index) => (
        <div key={index}>
          {section === 'Home' ? (
            <HomePage />
          ) : (
            <div className="mb-8 p-6 border-2 border-dashed border-gray-400 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{section}</h2>
              <p className="text-gray-600 text-lg italic">
                {`This is a placeholder for the ${section} section. Content will be added here in the future.`}
              </p>
              {/* Empty state */}
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-gray-500">No content available for {section} yet.</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}