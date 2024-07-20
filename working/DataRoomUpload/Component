// ["DataRoomUpload", "Component"]    
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFile, simulateUpload, resetUploadSimulation } from "./DataRoomSlice_Store.jsx";
import { CloudArrowUpIcon, DocumentIcon } from '@heroicons/react/24/outline';

export default function DataRoomUpload_Component() {
  const dispatch = useDispatch();
  const [dragActive, setDragActive] = useState(false);
  const selectedFiles = useSelector(state => state.dataRoomState.selectedFiles);
  const uploadSimulationSuccess = useSelector(state => state.dataRoomState.uploadSimulationSuccess);

  useEffect(() => {
    if (uploadSimulationSuccess) {
      const timer = setTimeout(() => {
        dispatch(resetUploadSimulation());
      }, 3000);
      return () => {
        if (timer) {
          window.clearTimeout(timer);
        }
      };
    }
  }, [uploadSimulationSuccess, dispatch]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    dispatch(setSelectedFile({ id: Date.now().toString(), fileName: file.name }));
  };

  const handleUpload = () => {
    dispatch(simulateUpload());
  };

  return (
    <div className="w-full align-top text-left bg-gray-100 p-6 rounded-lg">
      {uploadSimulationSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">File uploaded successfully!</span>
        </div>
      )}
      
      <div 
        className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center ${dragActive ? 'bg-blue-50' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleChange}
          aria-label="File input for upload. Click to select a file or drag and drop here."
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-sm font-semibold text-gray-900">
            Select a file or drag and drop here
          </span>
        </label>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4 flex items-center">
          <DocumentIcon className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-sm text-gray-600 truncate">
            {selectedFiles[selectedFiles.length - 1].fileName}
          </span>
        </div>
      )}

      <button
        className={`mt-4 w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
          selectedFiles.length > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
        }`}
        onClick={handleUpload}
        disabled={selectedFiles.length === 0}
        aria-label="Upload selected file. Disabled if no file is selected."
      >
        <CloudArrowUpIcon className="h-5 w-5 mr-2" />
        Upload
      </button>
    </div>
  );
}