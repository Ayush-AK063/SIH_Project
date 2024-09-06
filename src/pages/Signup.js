import React from 'react';

const Signup = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center"
         style={{ backgroundImage: '' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-black mb-6">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 rounded border border-lime-400 bg-transparent text-black placeholder-gray-200"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded border border-lime-400 bg-transparent text-black placeholder-gray-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded border border-lime-400 bg-transparent text-black placeholder-gray-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-400 text-white p-2 rounded hover:bg-lime-200 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
