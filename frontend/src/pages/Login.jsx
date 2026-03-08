import React from 'react'
import { Link } from "react-router-dom";
import loginbg from "../assets/loginbackground.jpg";
import loginleft from "../assets/loginleftbackground.jpg"

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${loginbg})` }}
    >

      <div className="flex w-full max-w-5xl h-[500px] rounded-xl overflow-hidden shadow-2xl">

        {/* Left Section */}
        <div
          className="w-1/2 bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: `url(${loginleft})` }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 px-8">
            <h1 className="text-3xl font-bold text-center mb-6">
              Welcome to Smart Hire Desk
            </h1>

            <p className="text-justify text-sm leading-relaxed">
              Login to your Smart Hire Desk account to continue your job search.
              Discover new opportunities that match your skills and interests.
              Apply for jobs and manage your applications in one place.
              Start building your professional future today.
            </p>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white flex items-center justify-center p-8">

          <div className="w-full max-w-sm">

            <h2 className="text-2xl font-bold mb-6 text-center">
              User Login
            </h2>

            <form className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>

            </form>
            <p className="text-right text-sm mt-1">
  <Link to="/forgot-password" className="text-blue-600 hover:underline">
    Forgot Password?
  </Link>
</p>

            <p className="text-center mt-4 text-gray-600">
              Don't have an account?
              <Link to="/Register" className="text-blue-600 font-semibold hover:underline ml-1">
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login