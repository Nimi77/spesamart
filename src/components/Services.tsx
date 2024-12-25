'use client';

import DeliveryTruck from '@/assets/fast-delivery.svg';
import HeadPhone from '@/assets/headphone.svg';
import Secure from '@/assets/secure.svg';

const Services = () => {
  return (
    <section className="services my-24">
      <div className="mx-auto grid max-w-[90%] items-center justify-items-center gap-9 md:grid-cols-3 xl:max-w-6xl">
        {/* first service */}
        <div className="s-1 flex flex-col items-center justify-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D9D9D9]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <DeliveryTruck aria-hidden="true" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">Free and Fast Delivery</h4>
            <p className="min-w-max pt-1 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        {/* second service */}
        <div className="s-2 flex flex-col items-center justify-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D9D9D9]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <HeadPhone aria-hidden="true" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">24/7 Customer Service</h4>
            <p className="pt-1 text-sm">Friendly 24/7 customer support</p>
          </div>
        </div>
        {/* third service */}
        <div className="s-3 flex flex-col items-center justify-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D9D9D9]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <Secure aria-hidden="true" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="min-w-max font-semibold uppercase">
              Money Back Guarantee
            </h4>
            <p className="pt-1 text-sm">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
