import { useState } from "react";
import { FiMail, FiLock, FiEyeOff } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 relative">
        
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-cyan-400 to-green-400" />

        {/* Icon */}
        <div className="flex justify-center mt-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-50">
            <BsShieldCheck className="text-cyan-500 text-3xl" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mt-4">Welcome Back</h2>
        <p className="text-center text-gray-500 mt-2">
          Sign in to verify your documents <br /> securely.
        </p>

        {/* Email */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-2 flex items-center border rounded-xl px-3 py-3 bg-gray-50">
            <FiMail className="text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="user@example.com"
              className="ml-3 w-full bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-2 flex items-center border rounded-xl px-3 py-3 bg-gray-50">
            <FiLock className="text-gray-400 text-lg" />
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="ml-3 w-full bg-transparent outline-none text-gray-700"
            />
            <FiEyeOff
              onClick={() => setShow(!show)}
              className="text-gray-400 text-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Forgot */}
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-cyan-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="mt-6 w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition">
          Secure Login <HiArrowRight className="text-lg" />
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-400">
            Or sign in with
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Face ID */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-50 transition">
          <FaUserCircle className="text-gray-600 text-xl" />
          <span className="font-medium">Use Face ID</span>
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          New user?{" "}
          <span className="text-cyan-500 cursor-pointer">
            Register here
          </span>
        </p>
      </div>

      
    </div>
  );
}
