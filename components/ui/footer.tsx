import Link from "next/link";
import Logo from "./logo";
import { useState } from 'react';

export default function Footer({ border = false }: { border?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer style={{ backgroundColor: "#3366FF"  }}>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
  <div className="max-w-md mx-auto">
    <h1 className="text-center mt-4 text-2xl leading-8 font-bold tracking-tight text-white sm:text-2xl ">Frequently Asked Questions</h1>
    <div className="flex space-x-4 mt-4">
      <input 
        type="search" 
        id="search-input" 
        className="block p-3 w-full text-sm text-gray-900 bg-white-50 rounded-[5.16px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search ..." 
        required 
      />
      <button 
        type="submit" 
        className="p-3 text-sm font-medium text-white bg-blue-700 rounded-[5.16px] border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
    
    <div className="bg-white mt-10 rounded-[10px] p-2 space-y-4">
  <div className="flex items-center space-x-4">
    <h1 className="font-bold flex-grow">Apa itu Forwardin?</h1>
    <button 
      type="button" 
      className="p-1 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? '—' : '—'}
    </button>
  </div>
  {isOpen && (
    <p className="m-5">
      Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.
    </p>
  )}
</div>

    

    <div className="bg-white mt-10 rounded-[10px] p-2 flex items-center space-x-4">
    <h1 className="font-bold flex-grow">Apakah Forwardin cocok untuk saya?</h1>
  <button 
    type="submit" 
    className="p-1 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    —
  </button>
      
    </div>
    <div className="bg-white mt-10 rounded-[10px] p-2 flex items-center space-x-4 ">
    <h1 className="font-bold flex-grow">Apakah Forwardin perlu di-install ke komputer?</h1>
  <button 
    type="submit" 
    className="p-1 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    —
  </button>
      
    </div>
    

  </div>

  {/* Top area: Blocks */}
  
  <div
    className={`grid gap-[120px] py-8 sm:grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-12 md:py-12 `}
  >
    
    {/* 1st block */}
    <div className="space-y-2 sm:col-span-2 md:col-span-4 lg:col-span-4">
      <div>
        <Logo />
      </div>
      <div className="text-sm text-white">
        Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. 
        Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
        
      </div>
    </div>

    {/* 2nd block */}
    <div className="space-y-2 sm:col-span-2 md:col-span-4 lg:col-span-4">
      <div>
        <h3 className="text-sm text-white font-bold">Contact Us</h3>
      </div>
      <div className="text-sm text-white">
        Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference in the world. Stay informed about our latest projects, partnership opportunities, and tips on how to maximize the potential of your communication efforts.
        <br /><br />
        Email: info@fowardin.com<br />
        Phone: +1 (123) 456-7890
      </div>
    </div>

    {/* 3rd block */}
    <div className="space-y-2 sm:col-span-1 md:col-span-2 lg:col-span-2">
      <h3 className="text-sm text-white font-bold">Let's Talk</h3>
      <div className="text-sm text-white">
        Facebook<br />
        Instagram<br />
        Twitter
      </div>
    </div>
  </div>
</div>


<div className="space-y-2 sm:col-span-1 md:col-span-2 lg:col-span-2">
<h3 className="text-sm text-center">Powered By  <Logo />
  </h3></div>
    </footer>
  );
}
