import Image from "next/image";



export default function FeaturesPlanet() {
  return (
    <section className="relative"style={{ backgroundColor: "#ECF2FA"  }}>
       <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero content */}
      <div className="pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="pb-12 text-center md:pb-16">
          <main>
            <div className="container mx-auto">
              <div className="flex flex-wrap">
              <div className="relative w-full lg:w-1/2 p-4 text-center">
      <Image
         src="https://s3-alpha-sig.figma.com/img/db94/2b33/7bfdaf23e2dd8ec824982243dd7de8a4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mz9NYm5h1AEhZaI31K6Qb2LNCHFwwsK4nHezNfo8Ew0lDQyhVSYa-uAL8ui1wDRa2Ka49JVQ0llKGtLnhs0115-q1PDPHp3T2hbWGQhs0VGu56TkjVN~B5JPwdUr--Dl9G6mFxDN37AQLvqDfqFJH75YqQbGWD9ewPUTglGspKPuAX-jJChvTeX5L9VFihFMu8R3BvEYgv3HXzW4vWTzbrFxsRSc0EGJo1RDj2HFo3QN39AT6cmqiPYMXkFtS8Hquhabxx3XBsqIh9wz1dReUp7AFKq3hFZ-fuH9uzNovuuc~s0pYmx-PBV39yKhAJtkWqPLXmv3w4vibwJSHNa75Q__"
        alt=""
         width={500} // specify the width
        height={300} // specify the height
        className="absolute top-0 left-0 rounded-[5px] object-cover"
      />
      <Image
       src="https://s3-alpha-sig.figma.com/img/c54e/5dd0/a8efdb0dd3ecb465e07e14b0545da6f2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0c08ki6B~EtgIll4hkePRd9wjaOIoF1CDazp~TgqnLMALO0OTzfn35HwFkFKIALzzEtSfP2W76R6gG6NVcUcULbF~H2zpk5yE9P7tQoOCKgQrxT91jPcMHZRf3tyfF~pc1Tutz9iFcVBbG41Wh9O85YdeTs6aCXE5VnKEUoU-ihGSb-XVtK-YhXoFttjrH79MXGD2I6qegX7Q0VbGN80bnwZN7VXxM6D0F27~ew-1AiPB7h1YCTpPiBqNK74347d9NIPsQEddUmRncO8BhlYNfkAwLjpT4RZs1fbQq36hBDq0fxl~C~YizZLNZMz4cfTLxIxteuOWHZW6Bv5qUdgQ__"
        alt="Description of image"
        width={200} // specify the width
        height={100} // specify the height
        className="relative top-[60px] left-[200px] rounded-[5px] object-cover mb-10"
      />
    </div>
                <div className="w-full lg:w-1/2 p-4">
                  <div className="card text-center h-100 border-0">
                    <div className="card-body">
                      <div className="tab-content p-3 text-muted">
                        <div className="tab-pane active text-box" >
                          <h1 className="text-3xl ml-2 text-left font-bold">
                          Respond Faster with the Convenience of Auto Reply
                          </h1>
                          <br />
                          <p className="mb-2 ml-2 text-left">
                          Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. 
                          Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
                            <br />
                            <br />
                            <br />
                          </p>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

         
        </div>
      </div>
    </div><br/><br/>
  </section>
  );
}
