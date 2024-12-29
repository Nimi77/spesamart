'use client';

import DeliveryTruck from '@/assets/fast-delivery.svg';
import HeadPhone from '@/assets/headphone.svg';
import Secure from '@/assets/secure.svg';

const Services = () => {
  return (
    <section className="services mb-16">
      <div className="grid items-center justify-items-center gap-9 md:grid-cols-3">
        {/* first service */}
        <div className="s-1 flex flex-col items-center justify-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D9D9D9]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
              <DeliveryTruck aria-hidden="true" />
            </div>
          </div>
          <div className="text-center">
            <span className="font-semibold uppercase">
              Free and Fast Delivery
            </span>
            <p className="min-w-max pt-1">
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
            <span className="font-semibold uppercase">
              24/7 Customer Service
            </span>
            <p className="pt-1">Friendly 24/7 customer support</p>
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
            <span className="min-w-max font-semibold uppercase">
              Money Back Guarantee
            </span>
            <p className="pt-1">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
