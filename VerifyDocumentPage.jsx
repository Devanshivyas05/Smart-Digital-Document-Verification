// VerifyDocument.jsx
import React, { useState } from "react";
import { FiArrowLeft, FiUpload, FiUser, FiShare } from "react-icons/fi";
import { FaFingerprint } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function VerifyDocument() {
  const [verificationId, setVerificationId] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null); // "valid" | "invalid"

  const handleVerifyId = () => {
    if (verificationId === "123456789012") {
      setResult("valid");
    } else {
      setResult("invalid");
    }
  };

  const handleVerifyFile = () => {
    if (file) {
      setResult("valid");
    } else {
      setResult("invalid");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FiArrowLeft className="w-6 h-6 mr-2 cursor-pointer" />
        <h1 className="text-xl sm:text-2xl font-semibold">Verify Document</h1>
      </div>

      {/* Verify by ID */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Verify by ID</h2>
        <label className="block text-gray-600 mb-2">Verification ID</label>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Enter 12-digit ID"
            value={verificationId}
            onChange={(e) => setVerificationId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray-400"
          />
          <FaFingerprint className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
        </div>
        <button
          onClick={handleVerifyId}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition"
        >
          Verify ID
        </button>
      </div>

      {/* OR separator */}
      <div className="text-center text-gray-400 mb-6 relative">
        <span className="bg-gray-50 px-2 relative z-10">OR</span>
        <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 -translate-y-1/2"></div>
      </div>

      {/* Verify by File */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Verify by File</h2>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer mb-4 hover:border-blue-400 transition"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <div className="bg-blue-100 p-3 rounded-full mb-2">
            <FiUpload className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-gray-700 font-medium mb-1">Tap to upload file</p>
          <p className="text-gray-400 text-sm">PDF, JPG or PNG (max. 5MB)</p>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          onClick={handleVerifyFile}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition"
        >
          Verify Document
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-4">
          {result === "valid" && (
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <AiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  <div>
                    <p className="font-semibold">Document Verified</p>
                    <p className="text-green-600 text-sm">Authentic & Valid</p>
                  </div>
                </div>
                <FiShare className="w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
              <div className="text-gray-600 text-sm space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4 text-gray-400" />
                  <span>Document Owner: Sarah Jenkins</span>
                </div>
                <div>Upload Date: Oct 24, 2023</div>
                <div className="flex items-center gap-2">
                  Expiry Status:
                  <span className="bg-gray-100 text-green-700 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div> Valid until 2025
                  </span>
                </div>
              </div>
            </div>
          )}

          {result === "invalid" && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <AiOutlineCloseCircle className="text-red-500 w-6 h-6" />
                <p className="font-semibold text-red-600">Example of Invalid State</p>
              </div>
              <p className="text-red-500 text-sm">
                Verification ID not found in database.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
