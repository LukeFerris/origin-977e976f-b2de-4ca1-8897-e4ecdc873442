// ["DealForm", "Component"]    


import React, { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { useDispatch, useSelector } from "react-redux";
import { createDeal, setDealFormVisibility } from "./DealSlice_Store";

export default function DealForm_Component() {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.dealState.dealFormVisible);
  
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = new Date(startDateRef.current.value);
    const endDate = new Date(endDateRef.current.value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      alert('Please enter valid dates');
      return;
    }

    if (endDate <= startDate) {
      alert('End date must be after start date');
      return;
    }

    dispatch(createDeal({ startDate, endDate }));
    dispatch(setDealFormVisibility(false));
  };

  const handleCancel = () => {
    dispatch(setDealFormVisibility(false));
  };

  return (
    <Dialog open={isVisible} onClose={handleCancel} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6 shadow-xl">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">Create New Deal</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                ref={startDateRef}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                aria-label="Select the start date for the deal"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                ref={endDateRef}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                aria-label="Select the end date for the deal"
              />
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Cancel creating a new deal and close the form"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Create a new deal with the entered start and end dates"
              >
                Create
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}