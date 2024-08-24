"use client";


import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res && res.ok) {
      setMessage('Login successful!');
      // Redirect to dashboard or other page
    } else {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className=" ">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Welcome Back
          </h2> <p className='text-center'>We’re so excited to see you again!</p>

          <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <a href="" className='text-blue-500'>
      <a>Lupa Password?</a>
    </a>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Sign In
              </button>
              <p className='text-center'>Butuh buat akun?<a className='text-center text-blue-500'> Daftar di sini</a></p>
            </div>
          </form>

          {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}
