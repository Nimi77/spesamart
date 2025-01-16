'use client';

import TimerDisplay from '@/features/TimerDisplay';
import useCartStore from '@/hooks/cartStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SalesCategoryTimer = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white text-sm leading-[15px]">
    <span className="font-semibold">{value}</span>
    <span>{label}</span>
  </div>
);

const SalesCategory = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const handleBuyNow = () => {
    const productDetails = {
      productName: 'Movable Speaker',
      productImage: '/movable-speaker',
      altText: 'Movable audio speaker',
      price: 99.99,
      quantity: 1,
    };

    addToCart(productDetails);
    router.push('/cart');
  };

  return (
    <section className="sales-category">
      <div className="bg-black">
        <div className="flex flex-col-reverse items-center justify-between gap-8 p-6 md:flex-row md:p-10">
          {/* text content */}
          <div className="flex flex-col md:items-start md:text-left">
            <h2 className="hidden text-lg font-medium text-lightGreen md:block">
              Categories
            </h2>
            <div className="s-content flex flex-col items-center justify-center pt-6 md:items-start md:justify-start">
              <h3 className="text-2xl font-semibold text-white sm:text-4xl md:max-w-[300px]">
                Enhance Your Music Experience
              </h3>
              <div className="timing flex justify-center gap-4 pb-7 pt-4 md:justify-start">
                <TimerDisplay TimeUnit={SalesCategoryTimer} />
              </div>
              <button
                type="button"
                onClick={handleBuyNow}
                className="rounded bg-accent px-6 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-[#01e25b]"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* image content */}
          <div className="img-container relative flex w-full md:w-1/2">
            <div className="absolute inset-0 left-0 right-0 h-full rounded-full bg-[#D9D9D9] blur-[196px] filter" />
            <Image
              src="/movable-speaker.png"
              alt="Movable audio speaker"
              width={540}
              height={320}
              className="relative h-auto w-full object-contain md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCategory;
