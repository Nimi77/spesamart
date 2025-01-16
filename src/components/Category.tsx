'use client';

import { IoArrowBack, IoArrowForward, IoWatchOutline } from 'react-icons/io5';
import { CiCamera, CiHeadphones } from 'react-icons/ci';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { PiBookDuotone, PiGameControllerLight } from 'react-icons/pi';
import { SlScreenSmartphone } from 'react-icons/sl';
import { TbDeviceWatchStats } from 'react-icons/tb';
import { FiBook } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

type Category = {
  icon: React.ComponentType;
  label: string;
};

const categoriesData: Category[] = [
  { icon: SlScreenSmartphone, label: 'Phones' },
  { icon: HiOutlineComputerDesktop, label: 'Computer' },
  { icon: TbDeviceWatchStats, label: 'SmartWatch' },
  { icon: CiCamera, label: 'Camera' },
  { icon: CiHeadphones, label: 'HeadPhones' },
  { icon: PiGameControllerLight, label: 'Gaming' },
  { icon: SlScreenSmartphone, label: 'Tablets' },
  { icon: HiOutlineComputerDesktop, label: 'Laptops' },
  { icon: IoWatchOutline, label: 'Wearables' },
  { icon: FiBook, label: 'Novels' },
  { icon: PiBookDuotone, label: 'Book' },
  { icon: PiGameControllerLight, label: 'Consoles' },
];

const categoryItem = (category: Category, index: number): React.JSX.Element => {
  const IconComponent = category.icon;

  return (
    <Link
      key={index}
      href={`/category/${category.label.toLowerCase()}`}
      className="rounded border border-gray-300 py-[2.4rem] transition-all duration-300 ease-in-out hover:bg-secondary3 hover:text-white focus:outline-none"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-3xl">
          <IconComponent />
        </div>
        <span className="font-medium">{category.label}</span>
      </div>
    </Link>
  );
};

const Category = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const categoriesPerSlide = 6;

  const displayedCategories = categoriesData.slice(
    currentSlide,
    currentSlide + categoriesPerSlide,
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
    <section aria-labelledby="categories-heading">
      <div className="flex flex-col gap-10 border-b border-custom">
        <div className="category-heading">
          <div className="heading flex items-center justify-items-start gap-5">
            <span className="h-10 w-5 rounded-md bg-secondary3"></span>
            <h2 className="font-medium text-orangeRed">Categories</h2>
          </div>
          <div className="flex items-center justify-between pt-5">
            <h3 className="text-lg font-semibold">Browse By Category</h3>
            <div className="pagination-controls flex items-center justify-center gap-2">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className="duration-colors rounded-full bg-secondary p-1 transition-all ease-out hover:bg-gray-200 disabled:opacity-40"
              >
                <IoArrowBack className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={
                  currentSlide + categoriesPerSlide >= categoriesData.length
                }
                className="rounded-full bg-secondary p-1 transition-colors duration-300 ease-out hover:bg-gray-200 disabled:opacity-40"
              >
                <IoArrowForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="categories grid grid-cols-[repeat(auto-fit,_minmax(176px,_2fr))] gap-8 overflow-hidden pb-16">
          {displayedCategories.map((category, index) =>
            categoryItem(category, index),
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
