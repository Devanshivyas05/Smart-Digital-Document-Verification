// VerificationHistory.jsx
import React from "react";
import { FiArrowLeft, FiSearch, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaUniversity, FaBuilding } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { IoMdWarning } from "react-icons/io";

const verifications = [
  {
    id: 1,
    name: "University of Toronto",
    date: "Oct 24, 2023, 14:30",
    location: "Toronto, Canada",
    ip: "192.168...",
    status: "Verified",
    icon: <FaUniversity className="text-blue-500 w-6 h-6" />,
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    name: "TechCorp Recruiters",
    date: "Oct 23, 2023, 09:15",
    location: "San Francisco, USA",
    ip: null,
    status: "Failed",
    icon: <FaBuilding className="text-red-500 w-6 h-6" />,
    statusColor: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    name: "BackgroundCheck.io",
    date: "Oct 22, 2023, 11:45",
    location: "London, UK",
    ip: null,
    status: "Verified",
    icon: <IoMdWarning className="text-purple-500 w-6 h-6" />,
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    name: "Global HR Services",
    date: "Oct 20, 2023, 16:20",
    location: "Berlin, Germany",
    ip: null,
    status: "Pending",
    icon: <MdPendingActions className="text-yellow-500 w-6 h-6" />,
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 5,
    name: "Gov Services Portal",
    date: "Oct 18, 2023, 08:00",
    location: "Ottawa, Canada",
    ip: null,
    status: "Verified",
    icon: <FaUniversity className="text-blue-400 w-6 h-6" />,
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 6,
    name: "Unknown Request",
    date: "Oct 15, 2023, 23:12",
    location: "Unknown",
    ip: "45.33...",
    status: "Failed",
    icon: <IoMdWarning className="text-gray-400 w-6 h-6" />,
    statusColor: "bg-red-100 text-red-700",
  },
];

export default function VerificationHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FiArrowLeft className="w-6 h-6 mr-2 cursor-pointer" />
        <h1 className="text-xl sm:text-2xl font-semibold">
          Verification History
        </h1>
      </div>

      {/* Audit Log */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-2">Audit Log</h2>
        <p className="text-gray-500 mb-4">Total Verifications: 24</p>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
            <FiSearch className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search verifier name"
              className="outline-none w-full text-gray-700"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <select className="border rounded-lg px-3 py-2 text-gray-700">
              <option>Date: All time</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>

            <select className="border rounded-lg px-3 py-2 text-gray-700">
              <option>Status: All</option>
              <option>Verified</option>
              <option>Failed</option>
              <option>Pending</option>
            </select>

            <select className="border rounded-lg px-3 py-2 text-gray-700">
              <option>Location</option>
              <option>Canada</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
            </select>
          </div>
        </div>

        {/* Verification Cards */}
        <div className="flex flex-col gap-4">
          {verifications.map((v) => (
            <div
              key={v.id}
              className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-4 shadow-sm"
            >
              {/* Verifier Info */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-medium">{v.name}</h3>
                  <div className="text-gray-500 text-sm flex flex-wrap gap-2">
                    <span className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {v.date}
                    </span>
                    <span className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-1" />
                      {v.location}
                      {v.ip && ` (IP: ${v.ip})`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${v.statusColor}`}
              >
                {v.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
