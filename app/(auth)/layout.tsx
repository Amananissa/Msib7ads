import Image from "next/image";
import Logo from "@/components/ui/logo";
import AuthBg from "@/public/images/auth-bg.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="absolute z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex grow">
        <div
          className="pointer-events-none absolute bottom-0 right-0 translate-x-1/3"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
        </div>

        {/* Content */}
        <div className="w-full">
          <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem]">
            <div className="px-4 sm:px-6">
              <div className="mx-auto w-full max-w-sm">
                <div className="py-16 md:py-20">{children}</div>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* Left side */}
          <main className="mt-10 pt-20" >
  <div className="container mx-auto">
    <div className="flex flex-col">
  
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
    <div className="w-full lg:w-1/2 p-4 mt-10">
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
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</main>
        </>
      </main>
    </>
  );
}
