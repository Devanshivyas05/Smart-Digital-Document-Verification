import {
  FiLogOut,
  FiPlus,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
} from "react-icons/fi";
import {
  BsShieldCheck,
  BsFileEarmarkText,
  BsPersonBadge,
  BsMortarboard,
  BsCalendarEvent,
} from "react-icons/bs";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md relative">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-white">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center">
              <BsShieldCheck className="text-cyan-600" />
            </div>
            <h1 className="font-semibold text-lg">SecureVerify</h1>
          </div>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition">
            Logout <FiLogOut />
          </button>
        </div>

        {/* Overview */}
        <div className="px-4 mt-4">
          <p className="text-xs tracking-widest text-gray-400">OVERVIEW</p>
          <h2 className="text-2xl font-bold mt-1">Welcome back, Alex</h2>
          <div className="inline-flex items-center gap-2 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full mt-2">
            <FiCheckCircle /> Secure Connection Active
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 mt-5">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl p-5
                          cursor-pointer transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              <BsFileEarmarkText />
            </div>
            <p className="text-sm">Total Documents</p>
            <h3 className="text-3xl font-bold mt-1">24</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Active Card */}
            <div className="bg-white rounded-2xl p-4 shadow cursor-pointer transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50">
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                <FiCheckCircle className="text-green-600" />
              </div>
              <p className="text-sm text-gray-500">Active</p>
              <h4 className="text-xl font-bold">19</h4>
            </div>

            {/* Verified Card */}
            <div className="bg-white rounded-2xl p-4 shadow cursor-pointer transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50">
              <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                <BsShieldCheck className="text-blue-600" />
              </div>
              <p className="text-sm text-gray-500">Verified</p>
              <h4 className="text-xl font-bold">22</h4>
            </div>
          </div>
        </div>

        {/* Recent Documents */}
        <div className="px-4 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">Recent Documents</h3>
            <span className="text-cyan-500 text-sm cursor-pointer hover:underline">
              View All
            </span>
          </div>

          {/* Cards */}
          {[
            {
              title: "University Degree",
              subtitle: "Education · ID: #ED-8832",
              icon: <BsMortarboard className="text-blue-600" />,
              iconBg: "bg-blue-100",
              status: "Verified",
              statusColor: "bg-green-100 text-green-700",
              expiry: "Exp: Never",
              expiryIcon: <BsCalendarEvent />,
              expiryColor: "text-gray-500",
            },
            {
              title: "Employee ID Card",
              subtitle: "HR Dept · ID: #HR-2991",
              icon: <BsPersonBadge className="text-orange-600" />,
              iconBg: "bg-orange-100",
              status: "Expiring",
              statusColor: "bg-yellow-100 text-yellow-700",
              expiry: "Exp: Dec 31, 2023",
              expiryIcon: <FiAlertTriangle />,
              expiryColor: "text-orange-600",
            },
            {
              title: "Contractor Permit",
              subtitle: "External · ID: #EXT-101",
              icon: <FiXCircle className="text-red-600" />,
              iconBg: "bg-red-100",
              status: "Revoked",
              statusColor: "bg-red-100 text-red-700",
              expiry: "Revoked: Oct 12, 2023",
              expiryIcon: <FiXCircle />,
              expiryColor: "text-gray-500",
            },
            {
              title: "Background Check",
              subtitle: "Security · ID: #BG-5541",
              icon: <BsShieldCheck className="text-purple-600" />,
              iconBg: "bg-purple-100",
              status: "Verified",
              statusColor: "bg-green-100 text-green-700",
              expiry: "Exp: Jan 15, 2025",
              expiryIcon: <BsCalendarEvent />,
              expiryColor: "text-gray-500",
            },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow mb-4 cursor-pointer transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className={`w-10 h-10 ${doc.iconBg} rounded-full flex items-center justify-center`}>
                    {doc.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{doc.title}</h4>
                    <p className="text-sm text-gray-500">{doc.subtitle}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${doc.statusColor}`}>
                  {doc.status}
                </span>
              </div>
              <div className={`flex items-center gap-2 text-sm mt-3 ${doc.expiryColor}`}>
                {doc.expiryIcon} {doc.expiry}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-cyan-500
                     text-white flex items-center justify-center shadow-lg
                     transition transform duration-300 hover:scale-110 hover:bg-cyan-600"
        >
          <FiPlus className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
