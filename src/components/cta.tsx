import Image from "next/image";


export default function Cta() {
  return (
    
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">Our Pricing</h2><br/>
          <div className="text-center bg-white rounded-[20px] p-0.5 self-center relative inline-block shadow-md ">
    
      <button
        type="button"
        className=" inline-block ml-0.5 relative w-1/2 border rounded-[20px] py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900"
      >
        Monthly</button>
        <button
        type="button"
        className=" inline-block relative w-1/2 rounded-[20px] py-2  text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-blue-700 border-slate-50 text-white hover:bg-blue-800 shadow-sm m-1 "
      >
        Yearly
      </button>
        </div><br/> <br/> 
          <p className="text-base bg-slate text-indigo-600 tracking-wide  bg-[#E6E8F0] inline-block rounded-[5px] m-2">
          Hemat hingga 25% dengan paket tahunan  
          </p>
        </div>
        <div className="mt-10 ml-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {/* Plan 1 - Basic */}
            <div className="g-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] bg-opacity-0 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:rounded-[8.44px] hover:bg-white bg-[#E6E8F0]-100">
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Starter</h3>
              <p className="mt-4 text-sm text-gray-500">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p><br/><br/>
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Gratis</h3><br/>
              <a href="/signup" className="flex text-center text-white bg-blue-700 hover:bg-[#FFB020] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#FFB020] focus:outline-none dark:focus:ring-[#FFB020]">
              Start Now
                  </a>
                  <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="blue" d="M8 17h1.85l.575-1.75h3.1L14.1 17H16l-3-8.45h-2zm2.9-3.2l1.1-3.3l1.075 3.3zM9
                3V1h6v2zm3 19q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22"/></svg>
                <span className="ml-3 text-base text-gray-500">100 Auto reply</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M2 20v-3q1.25 0 2.125.875T5 20zm5 0q0-2.075-1.463-3.537T2 15v-2q2.925 0 4.963 2.038T9 20zm4 0q0-1.875-.712-3.512t-1.926-2.85t-2.85-1.925T2 11V9q2.275 0 4.275.863t3.5 2.362t2.363 3.5T13 20zm4 0q0-2.7-1.025-5.062t-2.787-4.126t-4.126-2.787T2 7V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"/></svg>
                  <span className="ml-3 text-base text-gray-500">500 Broadcast</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M19.5 20.5q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 22q-2.575 0-4.788-1.225T3.725 17.6l4.4-4.4L11.4 16l4.6-4.575V13h2V8h-5v2h1.575L11.3 13.275L8 10.5l-5.275 5.275q-.35-.825-.538-1.862T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v8q0 .825-.587 1.413T20 22z"/></svg>
                <span className="ml-3 text-base text-gray-500">50 Campaign</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18" />
                </svg>
                <span className="ml-3 text-base text-gray-500">500 Contact</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M8 9V7h8v2zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z" />
                  </svg>
                <span className="ml-3 text-base text-gray-500">50 Device</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Excel / CSV Contact Import</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M10.925 14.05L16.6 8.4l-1.425-1.425l-4.25 4.25L8.8 9.1l-1.4 1.4zM1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Google Contact Sync</span>
                </li>            
               
                
                
              </ul>
            </div>

            {/* Plan 2 - Standard */}
            <div className="bg-white bg-opacity-0 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:rounded-[8.44px] hover:bg-white">
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Basic</h3>
              <p className="mt-4 text-sm text-gray-500">Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p><br/>
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Rp. 65.000 /bulan</h3>
              <h4 className="flex items-center" >Rp. 650.000 /tahun</h4>              
              <a href="/signup" className="flex text-center text-white bg-blue-700 hover:bg-[#FFB020] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#FFB020] focus:outline-none dark:focus:ring-[#FFB020]">
              Get Started
                  </a>
                  <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="blue" d="M8 17h1.85l.575-1.75h3.1L14.1 17H16l-3-8.45h-2zm2.9-3.2l1.1-3.3l1.075 3.3zM9
                3V1h6v2zm3 19q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22"/></svg>
                <span className="ml-3 text-base text-gray-500">100 Auto reply</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M2 20v-3q1.25 0 2.125.875T5 20zm5 0q0-2.075-1.463-3.537T2 15v-2q2.925 0 4.963 2.038T9 20zm4 0q0-1.875-.712-3.512t-1.926-2.85t-2.85-1.925T2 11V9q2.275 0 4.275.863t3.5 2.362t2.363 3.5T13 20zm4 0q0-2.7-1.025-5.062t-2.787-4.126t-4.126-2.787T2 7V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"/></svg>
                  <span className="ml-3 text-base text-gray-500">500 Broadcast</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M19.5 20.5q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 22q-2.575 0-4.788-1.225T3.725 17.6l4.4-4.4L11.4 16l4.6-4.575V13h2V8h-5v2h1.575L11.3 13.275L8 10.5l-5.275 5.275q-.35-.825-.538-1.862T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v8q0 .825-.587 1.413T20 22z"/></svg>
                <span className="ml-3 text-base text-gray-500">50 Campaign</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18" />
                </svg>
                <span className="ml-3 text-base text-gray-500">500 Contact</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M8 9V7h8v2zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z" />
                  </svg>
                <span className="ml-3 text-base text-gray-500">50 Device</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Excel / CSV Contact Import</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M10.925 14.05L16.6 8.4l-1.425-1.425l-4.25 4.25L8.8 9.1l-1.4 1.4zM1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Google Contact Sync</span>
                </li>
                
               
                
                
              </ul>
            </div>

            {/* Plan 3 - Premium */}
            <div className="bg-white bg-opacity-0 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:rounded-[8.44px] hover:bg-white">
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Premium</h3>
              <p className="mt-4 text-sm text-gray-500">Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p><br/>
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Rp. 76.000 /bulan</h3>
              <h4 className="flex items-center">Rp. 800.000 /tahun</h4>
              <a href="/signup" className="flex text-center text-white bg-blue-700 hover:bg-[#FFB020] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#FFB020] focus:outline-none dark:focus:ring-[#FFB020]">
              Get Started
                  </a>
                  <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="blue" d="M8 17h1.85l.575-1.75h3.1L14.1 17H16l-3-8.45h-2zm2.9-3.2l1.1-3.3l1.075 3.3zM9
                3V1h6v2zm3 19q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22"/></svg>
                <span className="ml-3 text-base text-gray-500">100 Auto reply</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M2 20v-3q1.25 0 2.125.875T5 20zm5 0q0-2.075-1.463-3.537T2 15v-2q2.925 0 4.963 2.038T9 20zm4 0q0-1.875-.712-3.512t-1.926-2.85t-2.85-1.925T2 11V9q2.275 0 4.275.863t3.5 2.362t2.363 3.5T13 20zm4 0q0-2.7-1.025-5.062t-2.787-4.126t-4.126-2.787T2 7V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"/></svg>
                  <span className="ml-3 text-base text-gray-500">500 Broadcast</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M19.5 20.5q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 22q-2.575 0-4.788-1.225T3.725 17.6l4.4-4.4L11.4 16l4.6-4.575V13h2V8h-5v2h1.575L11.3 13.275L8 10.5l-5.275 5.275q-.35-.825-.538-1.862T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v8q0 .825-.587 1.413T20 22z"/></svg>
                <span className="ml-3 text-base text-gray-500">50 Campaign</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18" />
                </svg>
                <span className="ml-3 text-base text-gray-500">500 Contact</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M8 9V7h8v2zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z" />
                  </svg>
                <span className="ml-3 text-base text-gray-500">50 Device</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Excel / CSV Contact Import</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M10.925 14.05L16.6 8.4l-1.425-1.425l-4.25 4.25L8.8 9.1l-1.4 1.4zM1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Google Contact Sync</span>
                </li>
                
               
                
                
              </ul>
            </div>

            {/* Plan 4 - Enterprise */}
            <div className="bg-white bg-opacity-0 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:rounded-[8.44px] hover:bg-white">
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Pro</h3>
              <p className="mt-4 text-sm text-gray-500">Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p><br/>
              <h3 className="text-lg leading-6 font-bold text-black"  style={{ fontSize: '25px'  }}>Rp. 86.000 /bulan</h3>
              <h4 className="flex items-center">Rp. 900.000 /tahun</h4>
              <a href="/signup" className="flex text-center text-white bg-blue-700 hover:bg-[#FFB020] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#FFB020] focus:outline-none dark:focus:ring-[#FFB020]">
              Get Started
                  </a>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="blue" d="M8 17h1.85l.575-1.75h3.1L14.1 17H16l-3-8.45h-2zm2.9-3.2l1.1-3.3l1.075 3.3zM9
                3V1h6v2zm3 19q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22"/></svg>
                <span className="ml-3 text-base text-gray-500">100 Auto reply</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M2 20v-3q1.25 0 2.125.875T5 20zm5 0q0-2.075-1.463-3.537T2 15v-2q2.925 0 4.963 2.038T9 20zm4 0q0-1.875-.712-3.512t-1.926-2.85t-2.85-1.925T2 11V9q2.275 0 4.275.863t3.5 2.362t2.363 3.5T13 20zm4 0q0-2.7-1.025-5.062t-2.787-4.126t-4.126-2.787T2 7V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"/></svg>
                  <span className="ml-3 text-base text-gray-500">500 Broadcast</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="blue" d="M19.5 20.5q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 22q-2.575 0-4.788-1.225T3.725 17.6l4.4-4.4L11.4 16l4.6-4.575V13h2V8h-5v2h1.575L11.3 13.275L8 10.5l-5.275 5.275q-.35-.825-.538-1.862T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v8q0 .825-.587 1.413T20 22z"/></svg>
                <span className="ml-3 text-base text-gray-500">50 Campaign</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18" />
                </svg>
                <span className="ml-3 text-base text-gray-500">500 Contact</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<path fill="blue" d="M8 9V7h8v2zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z" />
                  </svg>
                <span className="ml-3 text-base text-gray-500">50 Device</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Excel / CSV Contact Import</span>
                </li>
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                  	<path fill="blue" d="M10.925 14.05L16.6 8.4l-1.425-1.425l-4.25 4.25L8.8 9.1l-1.4 1.4zM1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18z" />
                    </svg>
                <span className="ml-3 text-base text-gray-500">Google Contact Sync</span>
                </li>
                
               
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
