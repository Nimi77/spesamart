"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Category = () => {
  return (
    <section className="categories my-14 border-b border-customColor">
      <div className="max-w-6xl mx-auto flex flex-col gap-[60px]">
        <div className="category-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary2 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold pl-5">
              Categorie&apos;s
            </h5>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5">Browse By Category</h4>
            <div className="arrow flex items-center justify-center gap-2">
              <button className="w-12 h-12 bg-secondary rounded-full">
                <IoArrowBack className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 bg-secondary rounded-full">
                <IoArrowForward className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="categories flex gap-8 items-center justify-center">
          <div className="c-item"></div>
        </div>
      </div>
    </section>
  );
};
export default Category;
