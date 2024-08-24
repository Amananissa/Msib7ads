import React from 'react';

const Statistics = ({ isDarkMode }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-xl font-bold mb-4">Total Statistik Pesan</h2>
      <div className="flex items-center">
        <div className="w-1/2">
          <div className="mb-2">
            <span className="font-semibold">Total Pesan Keluar:</span> 45
          </div>
          <div className="mb-2">
            <span className="font-semibold">Total Pesan Gagal:</span> 8
          </div>
          <div className="mb-2">
            <span className="font-semibold">Total Pesan Masuk:</span> 23
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <svg className="w-32 h-32" viewBox="0 0 36 36">
              <path
                className={`${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="text-blue-500"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="70, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold">70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
