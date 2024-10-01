"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Category = () => {
  return (
    <section className="categories my-14 border-b border-customColor">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-[60px]">
        <div className="category-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary2 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold pl-5">
              Categories
            </h5>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5 font-semibold">Browse By Category</h4>
            <div className="arrow flex items-center justify-center gap-2">
              <button className="bg-secondary p-1 rounded-full items-center disabled:opacity-40">
                <IoArrowBack className="w-5 h-5" />
              </button>
              <button className="bg-secondary p-1 rounded-full items-center disabled:opacity-40">
                <IoArrowForward className="w-5 h-5" />
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
