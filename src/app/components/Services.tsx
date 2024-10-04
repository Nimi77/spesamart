"use client";

import DeliveryTruck from "../public/icons/fast-delivery.svg";
import HeadPhone from "../public/icons/headphone.svg";
import Secure from "../public/icons/secure.svg";

const Services = () => {
  return (
    <section className="services my-12">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex items-center justify-around">
        <div className="s-1 flex flex-col gap-4 items-center justify-center">
          <div className="bg-secondary2 w-12 h-12 rounded-full">
            <span className="bg-black rounded-full">
              <DeliveryTruck />
            </span>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">Free and Fast Delivery</h4>
            <p className="text-sm pt-2">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="s-2 flex flex-col gap-4 items-center justify-center">
          <div className="logo bg-secondary2 w-12 h-12 rounded-full">
            <span className="bg-black rounded-full">
              <HeadPhone />
            </span>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">24/7 Customer service</h4>
            <p className="text-sm pt-2">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="s-3 flex flex-col gap-4 items-center justify-center">
          <div className="logo bg-secondary2 w-12 h-12 rounded-full">
            <span className="bg-black rounded-full">
              <Secure />
            </span>
          </div>
          <div className="text-center">
            <h4 className="font-semibold uppercase">Money Back Guarantee</h4>
            <p className="text-sm pt-2">We return money within 30days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;