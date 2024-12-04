"use client";

import Link from "next/link";
import Image from "next/image";
import TimerDisplay from "../features/TimerDisplay";

const SalesCategoryTimer = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="bg-white text-[13px] leading-[15px] w-14 h-14 flex flex-col items-center justify-center rounded-full">
    <span className="font-semibold">{value}</span>
    <span>{label}</span>
  </div>
);

const SalesCategory = () => {
  return (
    <section className="sales-category">
      <div className="xl:max-w-6xl max-w-[90%] mx-auto bg-black">
        <div className="flex items-center justify-between p-10">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-light-green">Categories</h3>
            <div className="s-content flex flex-col items-start justify-center pt-6">
              <h4 className="max-w-[443px] text-white text-4xl font-medium">
                Enhance Your Music Experience
              </h4>
              <div className="timing flex items-center justify-start gap-4 pt-4 pb-7">
                <TimerDisplay TimeUnit={SalesCategoryTimer} />
              </div>
              <Link href="">
                <button
                  type="button"
                  className="bg-[#01D456] text-white text-custom px-6 py-2 rounded hover:bg-[#01E25B]"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="img-container relative flex items-center">
            <div className="h-full left-0 right-0 absolute inset-0 rounded-full bg-[#D9D9D9] filter blur-[196px]" />
            <Image
              src={"/movable-speaker.png"}
              alt="movable audio speaker"
              loading="lazy"
              width={540}
              height={320}
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCategory;
