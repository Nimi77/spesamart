'use client';

import { IoArrowForward, IoLogoApple } from 'react-icons/io5';
import ProductCategory from './ProductCategory';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroImages = [
  { src: '/hero-img1.png', alt: 'Image 1' },
  { src: '/hero-img2.png', alt: 'Image 2' },
  { src: '/hero-img.png', alt: 'Image 3' },
  { src: '/hero-img2.png', alt: 'Image 4' },
  { src: '/hero-img4.png', alt: 'Image 5' },
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState<number>(2);
  const totalImages = heroImages.length;

  const changeImage = (index: number) => {
    setActiveImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section id="main" className="hero">
      <div className="flex items-start justify-center lg:flex-row">
        <div className="hidden border-r border-custom pr-6 pt-6 lg:block">
          <ProductCategory />
        </div>
        <div className="mt-10 w-full lg:pl-10">
          <div className="relative flex items-center justify-between bg-black px-6 py-7 text-white md:px-12 lg:py-2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-start justify-center gap-2">
                <IoLogoApple size={22} aria-hidden="true" />
                <p>iPhone 14 Series</p>
              </div>
              <h2 className="max-w-72 text-3xl font-semibold sm:text-4xl md:text-5xl">
                Up to 10% off Voucher
              </h2>
              <div className="relative flex items-center gap-1">
                <Link href="/" className="font-medium">
                  Shop Now
                </Link>
                <span className="bg-neutal-200 absolute left-0 top-6 w-3/4 rounded-md border" />
                <IoArrowForward size={18} />
              </div>
            </div>
            <div className="hero-image">
              <Image
                src={heroImages[activeImage].src}
                alt={heroImages[activeImage].alt}
                width={360}
                height={280}
                className="h-auto w-[310px] object-cover lg:w-[360px]"
              />
            </div>
            <div className="ellipse absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeImage(index)}
                  className={`h-3 w-3 cursor-pointer rounded-full ${
                    index === activeImage
                      ? 'border-2 border-white bg-red-600'
                      : 'bg-primary opacity-50'
                  }`}
                  aria-label={`Select ${image.alt}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
