import Image from "next/image";



export default function FeaturesPlanet() {
  return (
    <section className="relative " style={{ backgroundColor: "#ECF2FA"  }}>
       <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero content */}
      <div className="pb-12 pt-32 md:pb-20 md:pt-40 mr-2 ml-2">
        <div className="pb-12 text-center md:pb-16">
          <main>
            <div className="container mx-auto">
              <div className="flex flex-wrap">
              <div className="relative w-full h-[300px] lg:w-1/2 p-4 ">
              <div className="absolute -top-[100px] -left-10 w-[200px] h-[200px]">
        <Image
          src="https://s3-alpha-sig.figma.com/img/ac87/e09f/ca45337a69a8f3b7f247fe1dec192ef9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MncmELozZkSOjC3yyyhAr~3sEeKh6TDEHWtiNw2huHT0lSpzzFxacqSgO207O79KGxU49rTLcby5DjDOXkH4JKnV9z5Bv7Ul4SG~whVnbZzpDRpKt-PbT3ipU-zdHSJMYjThjsMJHcLgHCJ7XmYbqkb01qAKlwPpuH8~M7gPwehOWjvax1o0gFq2wHMNdc1PvqNRfyq2wAHePVZlHISwFqELMfJMA0KotiG~frfePLYO-lT0osS9BGFZhHWZu~E9wHQ~bchBNiEe7nG5loNhij6IkbeTaKUSZR2dIVnGvfAVwfnJzMe3M7AdLvTczHUaL29Ur0FQJ1OVHwmCUodBTA__"
          alt="Image 3"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>

      <div className="absolute top-10 left-[150px] w-[200px] h-[200px]">
        <Image
          src="https://s3-alpha-sig.figma.com/img/5743/54fd/9a4e9a64436e80e6bb0220275e2369e5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O2scICaIFqB1iiuZBiBeFoH5GYPxm7YRxjqslgRxJN6~wsFqDlqdC6lc0jaAy4olAvCWswqQf~TrRwRuzmLte6tzmoyyoqTehx-XNSdDKpuDRcseKbZwXCLZFFqocQYMLbmFvJQq~PZIALzk2zUUq1rvycbrzRV8DwWSjPxdB0Si2Vtb-wGSkzMu~ha3ut0g6U84Bnhz5HQbGoIY4upZv9sgdHqOGkv6A4-S3Uw2se1ir32V0~gybf6F2R36R7IZ3ETsDpjbRQY6PJ-7s71uL4e9jQ5dwBjK9qrEbT2U3dTk321j4ZvIZd6gvoVMjRABBJzX6cqAhn06ATcGCxF-FQ__"
          alt="Image 2"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      

      <div className="absolute top-[200px] left-0 w-[400px] h-[400px]">
        <Image
          src="https://s3-alpha-sig.figma.com/img/ec97/232d/077f872f38c2fbbcb774d75a6647d025?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPTO8MdsiAIZOcPLMaNu7IK3jcAmOQL5CTlzmEG4p5F4Y5SWaW1fU9R77BS58Y4o6laHFv~3SscQXrPCVAJzQDiGX2KEY36onPKgwg8WgjkwRX-ZkzKz-9ZA66VUSJewzpXn0MRuF6Rn3usAhlnTbMbi0c6-dGYEawev0gDPMU3VY-M1MwDEssq120Ez0V8uWPAVpVDRvFxhiDO4MKeC9ueeXg8IefsiijUonffl9OL33D76MwqKAxShsgiak2eovHzLwc9Sm6SHNvdG6zDHLgrRA9iQks99BCRK7kq2CKoTbsFwB0S0fM7~9QwVu6OfI330dsyt85rKm~ix2wkkcw__"
          alt="Image 1"
          width={500}
          height={400}
          className="rounded-[5px]"
        />
      </div>
    </div>
                <div className="w-full lg:w-1/2 p-2">
                  <div className="card text-center h-100 border-0">
                    <div className="card-body">
                      <div className="tab-content p-3 text-muted">
                        <div className="tab-pane active text-box" >
                          <h1 className="text-3xl text-left font-bold">
                          Reach Further with Ease
                          </h1>
                          <br />
                          <p className="mb-0 text-left">
                          Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. 
                          Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. 
                          Menjangkau audiens Anda tidak pernah semudah ini.
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
    </div>
  </section>
  );
}
