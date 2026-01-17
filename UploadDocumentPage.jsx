import { useState } from "react";
import {
  FiArrowLeft,
  FiUploadCloud,
  FiCalendar,
  FiShield,
  FiCheckCircle,
  FiCopy,
} from "react-icons/fi";

export default function UploadDocumentPage() {
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [expiry, setExpiry] = useState("");
  const [docType, setDocType] = useState("");

  const handleUpload = () => {
    if (!file || !docType) {
      alert("Please select a file and document type!");
      return;
    }
    setUploaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-6">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FiArrowLeft className="text-xl cursor-pointer" />
          <h1 className="text-lg font-semibold mx-auto pr-6">Upload Document</h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Secure Verification</h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          Verify your credentials securely. PDF, JPG, PNG formats up to 5MB.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm mt-6 p-5 space-y-5">

          {/* Document Type */}
          <div>
            <label className="text-sm font-medium">Document Type</label>
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="mt-2 w-full border rounded-xl px-4 py-3 bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select type (e.g., Marksheet)</option>
              <option value="Marksheet">Marksheet</option>
              <option value="Degree">Degree</option>
              <option value="ID Card">ID Card</option>
              <option value="Certificate">Certificate</option>
            </select>
          </div>

          {/* Upload Box */}
          <div>
            <label className="text-sm font-medium">Upload File</label>
            <div className="mt-2 border-2 border-dashed border-blue-200 rounded-xl p-6 flex flex-col items-center text-center bg-blue-50/30">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-3">
                <FiUploadCloud className="text-blue-500 text-2xl" />
              </div>
              <p className="font-medium">Tap to browse or drag here</p>
              <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG (Max 5MB)</p>
              <input
                type="file"
                className="mt-3"
                onChange={(e) => setFile(e.target.files[0])}
              />
              {file && <p className="text-green-600 mt-1 truncate">{file.name}</p>}
            </div>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="text-sm font-medium">
              Expiry Date <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="date"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="mt-2 w-full border rounded-xl px-4 py-3 bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* SSL */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-400 mt-5">
          <FiShield />
          <span>256-bit SSL Encrypted Upload</span>
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition transform hover:scale-105"
        >
          <FiShield className="text-lg" />
          Upload & Generate Verification ID
        </button>

        {/* Success Box */}
        {uploaded && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                <FiCheckCircle className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-green-700">
                  Document Uploaded Successfully
                </h3>
                <p className="text-sm text-green-600">
                  Your document has been verified securely.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-white rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 tracking-widest">VERIFICATION ID</p>
                <p className="font-bold text-lg">V-8829-XJ2</p>
              </div>
              <FiCopy className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
