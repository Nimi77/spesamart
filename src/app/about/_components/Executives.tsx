'use client';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';

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
    id: 5,
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
    id: 6,
    name: 'Will Smith',
    title: 'Head of Sales',
    image: '/will-smith.png',
    socials: [
      { platform: 'Twitter', url: '' },
      { platform: 'Instagram', url: '' },
      { platform: 'LinkedIn', url: '' },
    ],
  },
];

const ExecutiveInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = executives.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalItems]);

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
    <section>
      <div className="relative w-full pb-12">
        <div className="flex gap-8 overflow-hidden">
          {executives.map((executive) => (
            <div
              key={executive.id}
              className="flex flex-col justify-center gap-6"
            >
              {/* images */}
              <div className="flex h-[300px] w-[300px] overflow-hidden rounded bg-neutral-100">
                <Image
                  src={executive.image}
                  alt={executive.name}
                  width={300}
                  height={300}
                  className="h-auto w-full object-contain pt-4"
                />
              </div>

              {/* executive details */}
              <div>
                <h3 className="text-lg font-medium"> {executive.name}</h3>
                <p className="pb-4">{executive.title}</p>
                <div className="flex items-center gap-4">
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
          ))}
        </div>

        {/* carousel indicators */}
        <div className="ellipse absolute bottom-0 left-0 right-0 flex -translate-y-1/2 transform items-center justify-center gap-2">
          {executives.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 cursor-pointer rounded-full focus:outline-none ${
                index === currentIndex
                  ? 'border-2 border-white bg-red-600'
                  : 'bg-primary opacity-50'
              }`}
              aria-label={`Select ${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveInfo;
