// ["ContentArea", "Component"]    


import React from 'react';
import DataRoomUpload from './DataRoomUpload_Component.jsx';
import UsersList from './UsersList_Component.jsx';
import DataChat from './DataChat_Component.jsx';
import DealForm from './DealForm_Component.jsx';
import DealList from './DealList_Component.jsx';

export default function ContentArea_Component() {
  // IMPORTANT: This component displays content for different application sections
  const sections = ['Data Room', 'Users List', 'Data Chat', 'Create Deal', 'Deal List'];

  return (
    <div className="w-4/5 h-screen overflow-y-auto bg-white p-6 transition-all duration-300 ease-in-out">
      {sections.map((section, index) => (
        <div key={index} className="mb-8 p-6 border-2 border-dashed border-gray-400 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{section}</h2>
          {section === 'Data Room' && <DataRoomUpload />}
          {section === 'Users List' && <UsersList />}
          {section === 'Data Chat' && <DataChat />}
          {section === 'Create Deal' && <DealForm />}
          {section === 'Deal List' && <DealList />}
        </div>
      ))}
    </div>
  );
}