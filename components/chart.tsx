// components/Charts.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Charts = () => {
  const hourlyData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [
      {
        label: 'Grafik chart perjam',
        data: [12, 19, 3, 5, 2, 3, 10, 15, 22, 30, 25, 18, 12, 19, 3, 5, 2, 3, 10, 15, 22, 30, 25, 18],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const interactionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Solid Line',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 90],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Dotted Line 1',
        data: [28, 48, 40, 19, 86, 27, 90, 85, 60, 50, 45, 30],
        borderColor: 'rgba(153,102,255,1)',
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: 'Dotted Line 2',
        data: [18, 38, 30, 29, 76, 37, 80, 75, 50, 40, 35, 20],
        borderColor: 'rgba(255,159,64,1)',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  return (
    <div>
      <div>
        <h2>Hari Ini: 24</h2>
        <h2>Rata-rata harian: 7</h2>
        <h2>Bulan Ini: 23</h2>
        <h2>Rata-rata waktu: 00:02:42</h2>
      </div>
      <div>
        <h3>Grafik chart perjam</h3>
        <Line data={hourlyData} />
      </div>
      <div>
        <h3>Trend Interaksi Pesan</h3>
        <Line data={interactionData} />
      </div>
    </div>
  );
};

export default Charts;
