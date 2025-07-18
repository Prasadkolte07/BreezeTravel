import React from 'react';

export default function Login() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="block w-full mb-4 p-2 border rounded" />
      <input type="password" placeholder="Password" className="block w-full mb-4 p-2 border rounded" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Login</button>
    </div>
  );
}