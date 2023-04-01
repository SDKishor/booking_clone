import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/auth/register",
        credentials
      );
      console.log(res);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Create A New Account
          </h2>
          <p className="mt-2 text-base text-gray-600 ">
            Already have an account?
            <a
              href="/login"
              title=""
              className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 pl-2"
            >
              Sign In
            </a>
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            method="POST"
            className="mt-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900 "
                >
                  User Name
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your User Name"
                    id="username"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 "
                >
                  Email address
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900 "
                >
                  Password
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter Your Password"
                    id="password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <p>
              <span className="text-gray-500  text-sm">
                Read our
                <span className="capitalize text-indigo-600">
                  privacy policy
                </span>
                and
                <span className="capitalize text-indigo-600">
                  terms of service
                </span>
                to learn more
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
