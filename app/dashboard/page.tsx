"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import Charts from '@/components/chart';
import Logo from "@/components/ui/logo";
import Statistics from '@/components/charts2'; // Import the Charts component


const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} h-screen transition-colors`}>
      <div className={`flex flex-col w-64 h-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors`}>
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} transition-colors`}>
        <div className="flex items-center">
                <Logo />
              </div>
              <button 
  onClick={toggleTheme}
  className={`mt-4 px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} text-${isDarkMode ? 'white' : 'black'}`}
>
  {isDarkMode ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-11.485l-.707-.707M6.343 17.657l-.707-.707m11.314 0l-.707.707M6.343 6.343l-.707-.707M21 12h-1M4 12H3m16.485 7.071l-.707-.707M6.343 6.343l-.707-.707" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-11.485l-.707-.707M6.343 17.657l-.707-.707m11.314 0l-.707.707M6.343 6.343l-.707-.707M21 12h-1M4 12H3m16.485 7.071l-.707-.707M6.343 6.343l-.707-.707" />
      <circle cx="12" cy="12" r="5" fill="currentColor" />
    </svg>
  )}
</button>

        </div>
        <ul className="flex-1">
          <li className={`p-4 hover:bg-${isDarkMode ? 'gray-700' : 'gray-200'}`}>Contacts</li>
          <li className={`p-4 hover:bg-${isDarkMode ? 'gray-700' : 'gray-200'}`}>Groups List</li>
          <li className={`p-4 hover:bg-${isDarkMode ? 'gray-700' : 'gray-200'}`}>Message List</li>
          <li className={`p-4 hover:bg-${isDarkMode ? 'gray-700' : 'gray-200'}`}>Outgoing Chat</li>
          <li className={`p-4 hover:bg-${isDarkMode ? 'gray-700' : 'gray-200'}`}>Incoming Chat</li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <nav className={`p-4 flex justify-end gap-4 items-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors`}>
          <div className="flex items-right gap-4">
            <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-gray-600`}>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-gray-600`}>
              Amanda
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-gray-600`}>
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </nav>

        <main className="flex-1 p-4 mt-4 overflow-y-auto">
          <h1 className={`text-xl mb-4 font-semibold p-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Welcome Amanda!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              {/* Starter Pack Content */}
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Selasa, 29 Agustus 2023</p>
              <h2 className="text-2xl font-bold">Paket Starter Free</h2>
              <div className="mb-4">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Devices: 0 dari 10 device yang tersedia</p>
                <div className="w-full bg-red-200 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contacts: 5 dari 100 kontak yang tersedia</p>
                <div className="w-full bg-teal-200 rounded-full h-4">
                  <div className="bg-teal-500 h-4 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
              <button className={`w-full py-2 rounded-lg ${isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                Upgrade Paket
              </button>
            </div>
            <div className={`p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>

                
              {/* pesan Content */}
              
              <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} mt-10 rounded-[10px] text-center pt-1 mt-1 flex items-center space-x-4 overflow-aut0`}>
                <h1 className={`font-bold flex-grow ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Pesan terakhir</h1>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} mt-10 rounded-[10px] p-2 flex items-center space-x-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<g fill="blue" fill-rule="blue">
		<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
	</g>
</svg>
                <h1 className={` font-bold flex-grow ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Anda</h1>
               
                <button 
                  type="submit" 
                  className="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Terkirim
                </button>
              </div>
              <p className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} ml-2 -mt-4 ml-20`}>Hai apa kabarmu hari ini? Semoga...</p>

              <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} mt-10 rounded-[10px] p-2 flex items-center space-x-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<g fill="blue" fill-rule="blue">
		<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
	</g>
</svg>
                <h1 className={` font-bold flex-grow ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Anda</h1>
               
                <button 
                  type="submit" 
                  className="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Terkirim
                </button>
              </div>
              <p className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} ml-2 -mt-4 ml-20`}>Hai apa kabarmu hari ini? Semoga...</p>

              <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} mt-10 rounded-[10px] p-2 flex items-center space-x-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<g fill="blue" fill-rule="blue">
		<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
	</g>
</svg>
                <h1 className={` font-bold flex-grow ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Anda</h1>
               
                <button 
                  type="submit" 
                  className="inline-box text-green-700 text-xs hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Diterima
                </button>
              </div>
              

              
              <p className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} ml-2 -mt-4 ml-20`}>Hai apa kabarmu hari ini? Semoga...</p>
            </div>
                     
          </div>

          
          <div className={`mt-4 p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Statistics />
           
         
                     
          </div>
          </div>




          {/* chart */}

          <div className={`mt-4 p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <Charts />
          </div>
          




        </main>
      </div>
    </div>
  );
};

export default Dashboard;
