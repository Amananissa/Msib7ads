"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import Image from 'next/image';

export default function Header() {
  const [top, setTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="relative min-h-screen " style={{ backgroundColor: "#ECF2FA"  }}>
      {/* Sidebar */}
      <aside className="fixed top-1/3 left-10 h-96 w-64 p-6 hidden lg:block">
        {/* Garis di Kiri Sidebar */}
        <div className="absolute top-10 inset-y-0 left-4 w-1 bg-black" />
        <nav className="mt-6">
          <ul className="text-[14px] font-inter color:gray">
            <li>
              <Link href="/" className="block px-4 py-2 hover:font-bold">
                Get Started
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                Broadcast
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block px-4 py-2 hover:font-bold">
                Campaign
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                Auto Reply
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                Opportunity
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="ml-64 flex-1 ml-10">
        <header className="relative z-50 w-full mt-6">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="relative flex h-14 items-center justify-between gap-2 rounded-2xl bg-white/90 px-9 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
              {/* Site branding */}
              <div className="flex items-center">
                <Logo />
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-blue-500 text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>

              {/* Desktop sign in links */}
              <ul className="hidden lg:flex items-center justify-center gap-3 pl-8 mr-[100px] ">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm bg-blue-800 text-white px-4 py-2 rounded">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            
            <div className="fixed inset-0 bg-white z-50 lg:hidden">
              <ul className="flex flex-col items-center gap-3 mt-4">
              <button
                  className="absolute top-4 right-4 text-blue-500 text-2xl"
                  onClick={() => setMenuOpen(false)}
                >
                   ☰
                </button>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:font-bold">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm bg-gray-800 text-white px-4 py-2 rounded">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </header>

        
        <main className="mt-10 pt-20 ml-[100px]" >
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 p-4">
        <div className="card text-center h-100 border-0">
          <div className="card-body">
            <div className="tab-content p-3 text-muted">
              <div className="tab-pane active text-box" >
              <h1 className="text-3xl text-left font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1><br/>
                <p className="mb-0 text-left">
                  Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami.
                   Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact.
                   Dapatkan kendali penuh pesan dengan manajemen konten yang praktis..<br />
                  <br /><br />
                </p>
                <a href="https://mediainovasi.id/eats.php" className="btn left justify-start" style={{ background: "black", color: "white", borderColor: "black", borderRadius: "5px" }}>
                Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 p-4 text-center">
      <Image
         src="https://s3-alpha-sig.figma.com/img/2867/c34e/8dbb3680bd4f15ab7104cd56a5e3aa1c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0qRcozF~jjH4NUUNy842YklPFS8tFTI6ad6WHqvMqhmk4vWlXVIrO3z-C6CDaplaayV-L6Gz3adR4Wf-NjWQfj~qc5646XRvZqgsd~isTE~HIQ9QrZm3qzeibQWgR15gbQMdAKT2yQYipbFYnur0Ra-ksUR-qWb3KfgM57mhAz1~uQmMGUlYnaMg-IJYU7~EKZ689CmoL5duwIPepgnSJIhi7wPel4G5Z60v0wXimz4rtKK03XAqFWQlBafWXhAtuObDd3y~T~iPG-5kYz0HBbYPdL7lKisne~mgeJ4FlbesrMgE1wTv74ovzmbWIIZwxg8HsQmfm1VpiIB55A8fg__"
        alt="Description of image"
        width={500} // specify the width
        height={300} // specify the height
        className="absolute top-0 left-0 rounded-[10px] object-cover"
      />
      <Image
       src="https://s3-alpha-sig.figma.com/img/2301/a74b/585db015f14bc84a92599648cec5a1b1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfT3wz8-3Y4zJ-7BlqhP3-unhS9N1FdwyDT0vWmo8q6hjOl9vI~OCFBjExIMtsUZOSjErzcEOiTfwkS3LxaDRdpe1qBiT6IED53z08k1vI~MAApHc~kKds~efgbTiahnRKYLhVuwnhInwLxC~IpapYy99IKp6pFQJYizcnIE3LG888JpEhEEufZy63gLfeEG-KHqQmzpirfWbc-Np3jPYFQRCytnDmM5Mr~iH57hiW0qTkxx61UoDGgrnF1TlAaHX4gW9Pokw4Q46DDlxJXGDFLQ~9MdShrWuQs7BG5dM-cUJFxlxOY8QS0AfK5Ir9tQ3MsPxHWxql~SY02CpFoIWQ__"
       
        alt="Description of image"
        width={500} // specify the width
        height={300} // specify the height
        className="relative top-20 left-20 rounded-[10px] object-cover"
      />
    </div>
    </div>
  </div>
</main>

      </div>
    </div>
  );
}
