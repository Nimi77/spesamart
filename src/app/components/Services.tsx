"use client";

import DeliveryTruck from "@/assets/fast-delivery.svg";
import HeadPhone from "@/assets/headphone.svg";
import Secure from "@/assets/secure.svg";

const Services = () => {
  return (
    <section className="services my-24">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto grid md:grid-cols-3 items-center justify-center gap-9">
        {/* first service */}
        <div className="s-1 flex flex-col gap-6 items-center justify-center">
          <div
            className="w-20 h-20 rounded-full bg-[#D9D9D9] flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <DeliveryTruck aria-label="Free and Fast Delivery" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">Free and Fast Delivery</h4>
            <p className="min-w-max text-sm pt-1">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        {/* second service */}
        <div className="s-2 flex flex-col gap-6 items-center justify-center">
          <div
            className="w-20 h-20 rounded-full bg-[#D9D9D9] flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <HeadPhone aria-label="24/7 Customer Service" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">24/7 Customer Service</h4>
            <p className="text-sm pt-1">Friendly 24/7 customer support</p>
          </div>
        </div>
        {/* third service */}
        <div className="s-3 flex flex-col gap-6 items-center justify-center">
          <div
            className="w-20 h-20 rounded-full bg-[#D9D9D9] flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <Secure aria-label="Money Back Guarantee" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="min-w-max font-semibold uppercase">
              Money Back Guarantee
            </h4>
            <p className="text-sm pt-1">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;