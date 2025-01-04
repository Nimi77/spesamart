'use client';

import Image from 'next/image';

const NewArrival = () => {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <div className="category-heading">
          <div className="heading flex items-center justify-items-start gap-5">
            <span className="h-10 w-5 rounded-md bg-secondary3"></span>
            <h3 className="font-medium text-orange-red">Featured</h3>
          </div>
          <h4 className="pt-5 text-lg font-semibold">New Arrival</h4>
        </div>
        <div className="new-products">
          <div className="flex flex-col items-center gap-6 mdl:flex-row">
            <div className="group relative flex w-full items-center justify-center rounded-md bg-black sm:h-[600px]">
              <Image
                src="/playstation.png"
                alt="PlayStation"
                width={511}
                height={511}
                className="h-auto w-auto object-center"
              />
              <div className="absolute bottom-6 left-4 text-white">
                <h5 className="text-lg font-medium text-white">
                  PlayStation 5
                </h5>
                <p className="pb-3 pt-1">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button
                  className="rounded font-medium text-white underline focus:border-gray-500 focus:no-underline"
                  aria-label="Shop PlayStation 5"
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="group relative flex items-center justify-end rounded-lg bg-black lg:h-[284px]">
                <Image
                  src="/hat-woman.png"
                  alt="Women's Collections"
                  width={420}
                  height={286}
                  className="h-full rounded-r-md object-center"
                />
                <div className="absolute bottom-6 left-4">
                  <h5 className="text-lg font-medium text-white">
                    Women&apos;s Collections
                  </h5>
                  <p className="max-w-64 pb-3 pt-1 text-white">
                    Featured women collections that give you another vibe.
                  </p>
                  <button
                    className="rounded font-medium text-white underline focus:border-gray-500 focus:no-underline"
                    aria-label="Shop women's collections"
                  >
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-4">
                <div className="group relative flex h-[284px] w-full items-center justify-center rounded-md bg-black xl:w-[270px]">
                  <Image
                    src="/speaker.png"
                    alt="Speakers"
                    width={160}
                    height={210}
                    className="h-52 w-40 object-contain"
                  />
                  <div className="absolute bottom-6 left-4 text-white">
                    <h5 className="text-lg font-medium text-white">Speakers</h5>
                    <p className="pb-3 pt-1">Amazon wireless speakers.</p>
                    <button
                      className="rounded font-medium text-white underline focus:border-gray-500 focus:no-underline"
                      aria-label="Shop Speakers"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="group relative flex h-[284px] w-full items-center justify-center rounded-md bg-black xl:w-[270px]">
                  <Image
                    src="/perfume.png"
                    alt="Perfume"
                    width={201}
                    height={203}
                    className="h-52 w-52 object-center"
                  />
                  <div className="absolute bottom-6 left-4 text-white">
                    <h5 className="text-lg font-medium text-white">Perfume</h5>
                    <p className="pb-3 pt-1 uppercase">Gucci Intenseoud Edp.</p>
                    <button
                      className="rounded font-medium text-white underline focus:border-gray-500 focus:no-underline"
                      aria-label="Shop Perfume now"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
