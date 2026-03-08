import React from 'react'
import { Link } from "react-router-dom";
import loginbg from "../assets/loginbackground.jpg";
import loginleft from "../assets/loginleftbackground.jpg"

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${loginbg})` }}
    >

      <div className="flex w-full max-w-5xl h-[540px] rounded-xl overflow-hidden shadow-2xl">

        {/* Left Section */}
        <div
          className="w-1/2 bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: `url(${loginleft})` }}
        >

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 px-8">
            <h1 className="text-3xl font-bold text-center mb-6">
              Join Smart Hire Desk
            </h1>

            <p className="text-justify text-sm leading-relaxed">
              Create your Smart Hire Desk account to start exploring exciting
              job opportunities. Build your professional profile, apply for
              jobs easily, and track your applications in one place.
              Your career journey begins here.
            </p>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white flex items-center justify-center p-8">

          <div className="w-full max-w-sm">

            <h2 className="text-2xl font-bold mb-6 text-center">
              Create Account
            </h2>

            <form className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

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

              <input
                type="password"
                placeholder="Confirm Password"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                Register
              </button>

            </form>

            <p className="text-center mt-4 text-gray-600">
              Already have an account?
              <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register