import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold">Todo Website</h2>
        <ul className="flex space-x-6">
          <li>
            <Link to="/LogIn" className="hover:text-blue-400 text-lg">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="hover:text-blue-400 text-lg">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-20 space-y-6">
        <h1 className="text-5xl font-bold">Welcome to Todo Website</h1>
        <p className="text-xl">
          Sign up or log in to start managing your tasks and todos with ease!
        </p>

        <div className="flex space-x-6">
          <Link
            to="/SignUp"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xl"
          >
            Sign Up
          </Link>
          <Link
            to="/LogIn"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-xl"
          >
            Log In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center justify-center py-16 bg-white space-y-12">
        <h2 className="text-4xl font-semibold text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Task Management</h3>
            <p className="text-gray-600 mt-4">
              Easily manage your tasks and to-do lists in a user-friendly interface.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Secure & Reliable</h3>
            <p className="text-gray-600 mt-4">
              Your data is stored securely and protected with the latest technology.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Collaborate Easily</h3>
            <p className="text-gray-600 mt-4">
              Share your tasks with others and collaborate efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 Todo Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
