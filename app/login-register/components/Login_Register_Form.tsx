'use client';
import { useState, MouseEvent, FormEvent } from 'react';

const Login_Register_Form = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const toggleTab = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-4">
        {/* Tab buttons */}
        <button
          className={`${
            activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } flex-1 py-2 px-4 text-center rounded-l`}
          onClick={() => toggleTab('login')}
        >
          Login
        </button>
        <button
          className={`${
            activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } flex-1 py-2 px-4 text-center rounded-r`}
          onClick={() => toggleTab('register')}
        >
          Register
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Form fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {activeTab === 'login' ? 'Email' : 'Username'}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={activeTab === 'login' ? 'email' : 'text'}
            placeholder={activeTab === 'login' ? 'Enter your email' : 'Choose a username'}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {activeTab === 'login' ? 'Log In' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login_Register_Form;
