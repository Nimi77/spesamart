"use client";
import Image from "next/image";

const NewArrival = () => {
  return (
    <section className="new-arrivals">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10">
        <div className="category-heading">
          <div className="heading flex items-center justify-items-start gap-5">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h3 className="text-orange-red text-sm font-semibold">Featured</h3>
          </div>
          <h4 className="pt-5 font-semibold">New Arrival</h4>
        </div>
        <div className="products pb-16">
          <div className="grid items-center justify-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0 xl:gap-8">
            <div className="relative flex items-center justify-center bg-black rounded-md group w-auto lg:w-[420px] xl:w-[570px] lg:h-[600px]">
              <Image
                src="/playstation.png"
                alt="PlayStation"
                width={511}
                height={511}
                className="object-center"
              />
              <div className="absolute bottom-6 left-4 text-white">
                <h5 className="text-white text-lg font-medium">PlayStation 5</h5>
                <p className="text-sm pt-1 pb-3">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-white underline font-medium focus:border-gray-500 focus:no-underline rounded">
                  Shop Now
                </button>
              </div>
            </div>

            <div>
              <div className="relative flex items-center justify-end bg-black rounded-lg lg:h-[284px] group">
                <Image
                  src="/hat-woman.png"
                  alt="Women's Collections"
                  width={420}
                  height={286}
                  className="h-full object-center rounded-r-md"
                />
                <div className="absolute bottom-6 left-4">
                  <h5 className="text-white text-lg font-medium">
                    Women&apos;s Collections
                  </h5>
                  <p className="text-white text-sm pt-1 pb-3 max-w-64">
                    Featured women collections that give you another vibe.
                  </p>
                  <button className="text-white underline font-medium focus:border-gray-500 focus:no-underline rounded">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="grid items-center justify-items-center grid-cols-2 gap-4 mt-8">
                <div className="relative flex items-center justify-center bg-black rounded-md w-full xl:w-[270px] h-[284px] group">
                  <Image
                    src="/speaker.png"
                    alt="Speakers"
                    width={160}
                    height={210}
                    className="object-center"
                  />
                  <div className="absolute bottom-6 left-4 text-white">
                    <h5 className="text-white text-lg font-medium">Speakers</h5>
                    <p className="text-sm pt-1 pb-3">Amazon wireless speakers.</p>
                    <button className="text-white underline font-medium focus:border-gray-500 focus:no-underline rounded">
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="relative flex items-center justify-center bg-black rounded-md w-full xl:w-[270px] h-[284px] group">
                  <Image
                    src="/perfume.png"
                    alt="Perfume"
                    width={201}
                    height={203}
                    className="object-center"
                  />
                  <div className="absolute bottom-6 left-4 text-white">
                    <h5 className="text-white text-lg font-medium">Perfume</h5>
                    <p className="text-sm uppercase pt-1 pb-3">Gucci Intenseoud Edp.</p>
                    <button className="text-white underline font-medium focus:border-gray-500 focus:no-underline rounded">
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