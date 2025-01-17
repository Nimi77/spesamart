'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import { useState } from 'react';

const executives = [
  {
    id: 1,
    name: 'Tom Cruise',
    title: 'Founder & CEO',
    image: '/tom-cruise.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
  {
    id: 2,
    name: 'Emma Watson',
    title: 'Managing Director',
    image: '/emma-watson.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
  {
    id: 3,
    name: 'Will Smith',
    title: 'Head of Sales',
    image: '/will-smith.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
  {
    id: 4,
    name: 'Rima Gomez',
    title: 'CFO',
    image: '/rima-gomez.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
  {
    id: 5,
    name: 'Scarlett Johansson',
    title: 'CTO',
    image: '/scarlett.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
  {
    id: 6,
    name: 'Tammy Williams',
    title: 'HR',
    image: '/emma-watson.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
];

const ExecutiveInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: import('swiper').Swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter':
        return <BsTwitterX size={18} aria-hidden="true" />;
      case 'Instagram':
        return <FaInstagram size={18} aria-hidden="true" />;
      case 'LinkedIn':
        return <FaLinkedinIn size={18} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full pb-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        onSlideChange={handleSlideChange}
        className="pb-8"
      >
        {executives.map((executive) => (
          <SwiperSlide key={executive.id}>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex h-[260px] w-[280px] justify-center overflow-hidden rounded bg-neutral-100">
                <Image
                  src={executive.image}
                  alt={executive.name}
                  width={300}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="executive-details text-center">
                <h3 className="text-lg font-medium">{executive.name}</h3>
                <p className="text-gray-600">{executive.title}</p>
                <div className="mt-2 flex items-center justify-center gap-4">
                  {executive.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-transform hover:scale-110 hover:bg-gray-50"
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* swiper indicators */}
      <div className="ellipse absolute bottom-0 left-0 right-0 flex -translate-y-1/2 transform items-center justify-center gap-2">
        {executives.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full focus:outline-none ${
              index === currentIndex
                ? 'border-2 border-neutral-200 bg-red-600'
                : 'bg-gray-200 opacity-50'
            }`}
            aria-label={`Select ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ExecutiveInfo;
