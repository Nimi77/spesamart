"use client";

import DeliveryTruck from "@/assets/fast-delivery.svg";
import HeadPhone from "@/assets/headphone.svg";
import Secure from "@/assets/secure.svg";

const Services = () => {
  return (
    <section className="services my-12">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex items-center justify-around">
        <div className="s-1 flex flex-col gap-6 items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-secondary2 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <DeliveryTruck />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">Free and Fast Delivery</h4>
            <p className="text-sm pt-1">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="s-2 flex flex-col gap-6 items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-secondary2 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <HeadPhone />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">24/7 Customer service</h4>
            <p className="text-sm pt-1">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="s-3 flex flex-col gap-6 items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-secondary2 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <Secure />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">Money Back Guarantee</h4>
            <p className="text-sm pt-1">We return money within 30days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;