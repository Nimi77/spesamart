'use client';

import TimerDisplay from '@/features/TimerDisplay';
import Link from 'next/link';
import Image from 'next/image';

const SalesCategoryTimer = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white text-[13px] leading-[15px]">
    <span className="font-semibold">{value}</span>
    <span>{label}</span>
  </div>
);

const SalesCategory = () => {
  return (
    <section className="sales-category">
      <div className="mx-auto max-w-[90%] bg-black xl:max-w-6xl">
        <div className="flex items-center justify-between p-10">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-light-green">Categories</h3>
            <div className="s-content flex flex-col items-start justify-center pt-6">
              <h4 className="max-w-[443px] text-4xl font-medium text-white">
                Enhance Your Music Experience
              </h4>
              <div className="timing flex items-center justify-start gap-4 pb-7 pt-4">
                <TimerDisplay TimeUnit={SalesCategoryTimer} />
              </div>
              <Link href="">
                <button
                  type="button"
                  className="rounded bg-[#01D456] px-6 py-2 text-custom text-white hover:bg-[#01E25B]"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="img-container relative flex items-center">
            <div className="absolute inset-0 left-0 right-0 h-full rounded-full bg-[#D9D9D9] blur-[196px] filter" />
            <Image
              src="/movable-speaker.png"
              alt="Movable audio speaker"
              width={540}
              height={320}
              className="relative h-auto w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCategory;
