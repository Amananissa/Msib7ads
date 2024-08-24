"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulasi pendaftaran pengguna. Ganti ini dengan logika pendaftaran nyata jika ada.
    // Misalnya, Anda bisa memanggil API untuk mendaftarkan pengguna.
    try {
      // Asumsikan kita memiliki API untuk pendaftaran yang diakses melalui fetch
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        setMessage('Registration successful! You can now log in.');
        // Redirect to login page atau halaman lain setelah pendaftaran berhasil
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className=" ">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create an Account
          </h2>
          <p className='text-center'>Join us today! Create an account to get started.</p>

          <form className="space-y-6 mt-4" onSubmit={handleSubmit}>

          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>


            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

           
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Register
              </button>
              <p className='text-center mt-4'>Sudah punya akun? <a href="/login" className='text-blue-500'>Masuk di sini</a></p>
            </div>
          </form>

          {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}
