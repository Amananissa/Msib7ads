import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section className="relative" >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* content */}
        <div className="pb-12 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <main>
              <div className="container mx-auto">
              <h1 className="text-3xl text-center font-bold pt-4 mt-4">
                "One Step Closer to More Effective and Connected Communication!"
              </h1>
              <br />
                <div className="flex flex-wrap lg:flex-nowrap">
                  <Image
                    id="gambarproduct"
                    src="https://s3-alpha-sig.figma.com/img/5599/87b7/ef439d45cfe1141d134517d683bcd61e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CehoIW9rwbw0f85v5hzAG-5zNM-Rs919Oe0VCu10EIpuQjeaflADvEZFQatIATFZJxIE1BKKkL-h9iR5UlL0Ud4pEnKKzGW16zWju6yqLZ9D3ei~RoYKgp34rSfNrDINrBXYSW11o6eq7jziubzjw98hPyhLpCGa61Dgxp8IP5QclEyM7Q3mLpADc0-73JQ2-YhFyKZPVH6hlZ-vgS~oYNoHC2xsYnn1aX7~xV90MEqFF7aBRluhLiPQs7V7iyxiVSYrXmHvSVJr-qDgXQiAJ6dzX-O6VkYdwSuXHyWNSfgzcCjFacbWYrmFXYWugStWLLHzh7v8ai7cY3PCP0X1Yw__"
                    alt="Responsive image"
                    width={350}
                    height={200}
                    className="mx-auto"
                  />

                  <div className="card text-left h-100 border-0">
                    <div className="tab-content p-3 text-muted">
                      <div className="tab-pane active">
                        {/* Button di atas paragraf */}
                        <div className="flex flex-col mt-6 mb-4">
                          <div className="flex justify-start mb-4">
                            <a
                              href="https://mediainovasi.id/eats.php"
                              className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Bisnis dan Pemasaran
                            </a>
                            <a
                              href="https://mediainovasi.id/eats.php"
                              className="flex text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              Komersial dan Penjualan
                            </a>
                            <a
                              href="https://mediainovasi.id/eats.php"
                              className="flex text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              Organisasi Sosial
                            </a>
                          </div>
                          <p className="mb-4 text-left">
                            Bidang ini dapat memanfaatkan fitur Broadcast
                            untuk mengirim promosi, pengumuman, dan informasi
                            produk kepada pelanggan dalam jumlah besar secara
                            efisien. Selain itu, fitur Campaign dapat
                            membantu merencanakan dan menyampaikan pesan iklan
                            dengan waktu yang tepat kepada target audiens yang
                            sesuai.
                          </p>
                        </div>
                        <br />
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
