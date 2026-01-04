// LogoutPage.jsx
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";

export default function LogoutPage() {
  const [open, setOpen] = useState(true);

  const handleLogout = () => {
    console.log("User logged out");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          
          {/* Modal */}
          <div className="bg-white w-[360px] rounded-2xl px-6 pt-8 pb-6 text-center shadow-xl">
            
            {/* Icon */}
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <FiLogOut className="w-7 h-7 text-red-500" />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Log out
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Are you sure you want to logout? You will need to re-verify your
              credentials to sign back in.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="flex-1 py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700"
              >
                Log Out
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
