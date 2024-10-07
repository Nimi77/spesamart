"use client";

import Link from "next/link";
import Image from "next/image";

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white text-[13px] leading-[15px] w-14 h-14 flex flex-col items-center justify-center rounded-full">
    <span className="font-semibold">{value}</span>
    <span>{label}</span>
  </div>
);

const SalesCategory = () => {
  return (
    <section className="s-category">
      <div className="xl:max-w-6xl max-w-[90%] mx-auto bg-black">
        <div className="flex items-center justify-between p-12">
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-light-green">Categories</h5>
            <div className="s-content flex flex-col items-start justify-center gap-5 pt-6">
              <h2 className="text-white">Enhance Your Music Experience</h2>

              <div className="timing flex items-center justify-start gap-4">
                <TimeUnit value="06" label="Hours" />
                <TimeUnit value="20" label="Minutes" />
                <TimeUnit value="12" label="Seconds" />
              </div>

              <Link href="">
                <button className="bg-[#01e25b] text-white text-custom px-4 py-2 rounded">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="img-container relative">
            {/* <div className="absolute inset-0 rounded-full bg-[#D9D9D9] filter blur-[30%]"></div> */}
            <Image
              src={"/movable-speaker.png"}
              alt="movable audio speaker"
              loading="lazy"
              width={600}
              height={420}
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCategory;