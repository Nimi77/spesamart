"use client";

import { IoArrowBack, IoArrowForward, IoWatchOutline } from "react-icons/io5";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiBookDuotone, PiGameControllerLight } from "react-icons/pi";
import { SlScreenSmartphone } from "react-icons/sl";
import { TbDeviceWatchStats } from "react-icons/tb";
import { FiBook } from "react-icons/fi";
import { useState } from "react";

type Category = {
  icon: React.ComponentType;
  label: string;
};

const categoriesData: Category[] = [
  { icon: SlScreenSmartphone, label: "Phones" },
  { icon: HiOutlineComputerDesktop, label: "Computer" },
  { icon: TbDeviceWatchStats, label: "SmartWatch" }, 
  { icon: CiCamera, label: "Camera" },
  { icon: CiHeadphones, label: "HeadPhones" },
  { icon: PiGameControllerLight, label: "Gaming" },
  { icon: SlScreenSmartphone, label: "Tablets" },
  { icon: HiOutlineComputerDesktop, label: "Laptops" },
  { icon: IoWatchOutline, label: "Wearables" },
  { icon: FiBook, label: "Novels " },
  { icon: PiBookDuotone, label: "Book" },
  { icon: PiGameControllerLight, label: "Consoles" }
];

const categoryItem = (category: Category, index: number): React.JSX.Element => {
  const IconComponent = category.icon;

  return (
    <button
      key={index}
      className="c-item w-44 h-36 border border-gray-300 rounded transition-all duration-300 ease-in-out
      hover:bg-secondary3 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-2xl">
          <IconComponent />
        </div>
        <span className="font-medium">{category.label}</span>
      </div>          
    </button>
  );
};

const Category = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const categoriesPerSlide = 6;

  const displayedCategories = categoriesData.slice(
    currentSlide,
    currentSlide + categoriesPerSlide
  );

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const handleNextSlide = () => {
    if (currentSlide + categoriesPerSlide < categoriesData.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="categories">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto my-14 flex flex-col gap-10 border-b border-customColor">
        <div className="category-heading">
          <div className="heading flex items-center justify-items-start gap-5">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h3 className="text-orange-red text-sm font-semibold">
              Categories
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5 font-semibold">Browse By Category</h4>
            <div className="pagination-controls flex items-center justify-center gap-2">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className="bg-secondary p-1 rounded-full items-center hover:bg-gray-200 focus:outline-none disabled:opacity-40"
              >
                <IoArrowBack className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={
                  currentSlide + categoriesPerSlide >= categoriesData.length
                }
                className="bg-secondary p-1 rounded-full items-center hover:bg-gray-400 focus:outline-none disabled:opacity-40"
              >
                <IoArrowForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="categories grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 items-center justify-center pb-12">
          {displayedCategories.map((category, index) =>
            categoryItem(category, index)
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;