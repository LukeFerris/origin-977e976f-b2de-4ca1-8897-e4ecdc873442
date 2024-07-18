// ["DealList", "Component"]    


import React from 'react';
import { useSelector } from "react-redux";

// Default export of DealList_Component
export default function DealList_Component() {
  // Access deals from Redux store
  const deals = useSelector((state) => state.dealState.deals);

  // Function to format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="w-full align-top text-left">
      {deals.length > 0 ? (
        <ul className="space-y-4">
          {deals.map((deal) => (
            <li key={deal.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-2 sm:mb-0">
                  <span className="font-semibold text-gray-700">Start Date:</span>{' '}
                  <span className="text-gray-600">{formatDate(deal.startDate)}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">End Date:</span>{' '}
                  <span className="text-gray-600">{formatDate(deal.endDate)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 py-8">
          No deals available at the moment. Check back later for exciting offers!
        </div>
      )}
    </div>
  );
}