import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiEyeOff, FiChevronDown } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

export default function RegisterPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex items-center gap-3 py-4">
          <FiArrowLeft className="text-xl text-gray-700 cursor-pointer" />
          <h1 className="text-lg font-semibold">Create Account</h1>
        </div>

        {/* Banner */}
        <div className="rounded-2xl overflow-hidden mb-6">
          <div className="relative h-44 bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.3),transparent_60%)]" />
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center z-10">
              <BsShieldCheck className="text-white text-3xl" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Join SecureDoc</h2>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Secure your documents today with trusted verification.
        </p>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-2 flex items-center border rounded-xl px-3 py-3 bg-gray-50">
              <FiUser className="text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <div className="mt-2 flex items-center border rounded-xl px-3 py-3 bg-gray-50">
              <FiMail className="text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="name@example.com"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">I am a...</label>
            <div className="mt-2 flex items-center border rounded-xl px-3 py-3 bg-gray-50">
              <BsShieldCheck className="text-gray-400 text-lg" />
              <select className="ml-3 w-full bg-transparent outline-none text-gray-500">
                <option>Select your role</option>
                <option>User</option>
                <option>Admin</option>
                <option>Verifier</option>
              </select>
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="mt-2 flex items-center border rounded-xl px-3 py-3 bg-gray-50">
              <FiLock className="text-gray-400 text-lg" />
              <input
                type={show ? "text" : "password"}
                placeholder="Create a password"
                className="ml-3 w-full bg-transparent outline-none"
              />
              <FiEyeOff
                onClick={() => setShow(!show)}
                className="text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition">
            Register Account <HiArrowRight />
          </button>

          {/* Secure Text */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-4">
            <FiLock /> Your data is encrypted and secure
          </div>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-cyan-500 cursor-pointer font-medium">Login</span>
        </p>
      </div>
    </div>
  );
}
