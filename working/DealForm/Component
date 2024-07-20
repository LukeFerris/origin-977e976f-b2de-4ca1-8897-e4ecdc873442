// ["DealForm", "Component"]    


import React, { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { useDispatch, useSelector } from "react-redux";
import { createDeal, setDealFormVisibility, validateForm } from "./DealSlice_Store";

export default function DealForm_Component() {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.dealState.dealFormVisible);
  const formValidation = useSelector(state => state.dealState.formValidation);
  
  // Refs for form inputs
  const clientNameRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form values
    const clientName = clientNameRef.current.value;
    const startDate = new Date(startDateRef.current.value);
    const endDate = new Date(endDateRef.current.value);

    // Dispatch validation action
    const validationResult = await dispatch(validateForm({ clientName, startDate, endDate })).unwrap();

    // Check if form is valid
    if (Object.values(validationResult).every(value => value === true)) {
      // If valid, create deal
      dispatch(createDeal({ clientName, startDate, endDate }));
      dispatch(setDealFormVisibility(false));
    }
    // If invalid, errors will be displayed via formValidation state
  };

  // Handle form cancellation
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
            {/* Client Name input */}
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
                Name of Client
              </label>
              <input
                type="text"
                id="clientName"
                ref={clientNameRef}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!formValidation.clientName ? 'border-red-500' : ''}`}
                aria-label="Enter the name of the client for the new deal"
              />
              {!formValidation.clientName && <p className="mt-2 text-sm text-red-600">Please enter a valid client name.</p>}
            </div>
            
            {/* Start Date input */}
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                ref={startDateRef}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!formValidation.startDate ? 'border-red-500' : ''}`}
                aria-label="Select the start date for the deal"
              />
              {!formValidation.startDate && <p className="mt-2 text-sm text-red-600">Please enter a valid start date.</p>}
            </div>
            
            {/* End Date input */}
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                ref={endDateRef}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!formValidation.endDate ? 'border-red-500' : ''}`}
                aria-label="Select the end date for the deal"
              />
              {!formValidation.endDate && <p className="mt-2 text-sm text-red-600">Please enter a valid end date.</p>}
            </div>
            
            {/* Form buttons */}
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
                aria-label="Create a new deal with the entered client name, start date, and end date"
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