"use client";
import Image from "next/image";

const NewArrival = () => {
  return (
    <section className="New my-14">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10 border-b border-customColor">
        <div className="category-heading">
          <div className="heading flex items-center justify-items-start gap-5">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold">Featured</h5>
          </div>
          <h4 className="pt-5 font-semibold">New Arrival</h4>
        </div>
        <div className="products pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative bg-black rounded-md group md:col-span-2 lg:w-[570px] lg:h-[600px] w-auto">
              <Image
                src="/playstation.png"
                alt="PlayStation"
                width={511}
                height={511}               
                className="w-full h-full object-center"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="font-bold">PlayStation 5</h2>
                <p className="text-sm">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-white font-medium mt-2 group-hover:bg-gray-800 focus:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative bg-black rounded-md h-auto lg:w-[570px] lg:h-[284px] group">
              <Image
                src="/hat-woman.png"
                alt="Women's Collections"
                width={432}
                height={286}              
                className="w-full h-full object-center"
              />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-lg font-medium">
                  Women&apos;s Collections
                </h2>
                <p className="text-white text-sm">
                  Featured women collections that give you another vibe.
                </p>
                <button className="text-white font-medium mt-2 group-hover:bg-gray-800 focus:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
              <div className="relative bg-black h-auto lg:w-[270px] lg:h-[284px] group">
                <Image
                  src="/speaker.png"
                  alt="Speakers"
                  width={190}
                  height={221}                
                  className="w-full h-full object-center"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="font-medium">Speakers</h2>
                  <p className="text-sm">Amazon wireless speakers.</p>
                  <button className="font-medium mt-2 group-hover:bg-gray-800 focus:bg-gray-800">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="relative h-auto bg-black lg:w-[270px] lg:h-[284px] group">
                <Image
                  src="/perfume.png"
                  alt="Perfume"                 
                  width={201}
                  height={203}
                  className="w-full h-full object-right"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="font-medium">Perfume</h2>
                  <p className="text-sm uppercase">
                    Gucci Intenseoud Edp.
                  </p>
                  <button className="font-medium px-4 py-2 mt-2 rounded-md group-hover:bg-gray-800 focus:bg-gray-800">
                    Shop Now
                  </button>
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