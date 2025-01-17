'use client';

import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { RxInstagramLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoApple } from 'react-icons/io5';
import Playstore from '@/assets/playstore.svg';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { showNotification } from '@/utilis/showNotification';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError('Email address is required');
      return;
    }
    setError('');
    setEmail('');

    showNotification({
      icon: 'success',
      title: 'Subscribed! Thank you for subscribing..',
      position: 'top-end',
    });
  };

  return (
    <footer>
      <div className="w-full bg-black">
        <div className="mx-auto max-w-[90%] py-10 md:py-16 xl:max-w-6xl">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] justify-between gap-6 text-white md:grid-cols-3 lg:flex">
            <div className="newsletter">
              <div className="text-lg font-semibold">SpesaMart</div>
              <div className="pt-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe();
                  }}
                >
                  <fieldset>
                    <legend className="font-medium">Subscribe</legend>
                    <p className="pb-4 pt-2">Get 10% off your first order </p>
                    <div className="flex h-10 items-center justify-between rounded-md border-2 bg-transparent">
                      <input
                        name="emailAddress"
                        id="emailAddress"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        aria-label="Enter your email"
                        className="text-neutal-200 border-0 bg-transparent px-2 py-3 outline-0"
                      />
                      <button
                        aria-label="Send email address"
                        className="p-2 focus:outline-none"
                      >
                        <PaperAirplaneIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    {error && (
                      <p className="pt-2 text-red-400" role="alert"></p>
                    )}
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="support">
              <h4 className="font-medium">Support</h4>
              <div className="pt-6">
                <ul className="space-y-4">
                  <li className="max-w-44">
                    111 Surulere street, Gbangilada road, DH 1515, Delta.
                  </li>
                  <li>SpesaMart@gmail.com</li>
                  <li>(+234) 814 888 412</li>
                </ul>
              </div>
            </div>
            <div className="account">
              <h4 className="font-medium">Account</h4>
              <div className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <Link href="/account">My Account</Link>
                  </li>
                  <li>
                    <Link href="/auth/signup">Login / Register</Link>
                  </li>
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="/cart">Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="support">
              <h4 className="heading font-medium">Quick Link</h4>
              <div className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <Link href="">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link href="">FAQ</Link>
                  </li>
                  <li>
                    <Link href="">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="download space-y-6">
              <h4 className="heading font-medium">Download App</h4>
              <div className="space-y-2">
                <p className="text-neutral-200">
                  Save $3 with App New User Only
                </p>
                <div className="flex items-start gap-2">
                  <div className="qr-code flex shrink-0 items-center border-2 border-gray-100">
                    <Image
                      src={'/qrCode.png'}
                      alt="SpesaMart QR Code"
                      width={80}
                      height={80}
                      className="h-20 w-20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      className="google-store flex max-h-10 items-center rounded border bg-transparent p-1 focus:outline-none"
                    >
                      <Playstore aria-hidden="true" />
                      <div className="flex flex-col items-start justify-center">
                        <span className="text-xs font-medium uppercase">
                          Get it on
                        </span>
                        <span className="font-semibold">Google Play</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="apple-store flex max-h-10 w-fit items-center rounded border bg-transparent p-1 focus:outline-none"
                    >
                      <IoLogoApple size={23} aria-hidden="true" />
                      <div className="ml-2 flex flex-col items-start">
                        <span className="text-[10px] font-medium uppercase">
                          Download on the
                        </span>
                        <span className="font-semibold">App Store</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="social-icons">
                <div className="flex items-center justify-start gap-6">
                  <a
                    href=""
                    aria-label="Vist our Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook size={26} aria-hidden="true" />
                  </a>
                  <a
                    href=""
                    aria-label="Vist our X page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX size={20} aria-hidden="true" />
                  </a>
                  <a
                    href=""
                    aria-label="Vist our Instagran page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RxInstagramLogo size={22} aria-hidden="true" />
                  </a>
                  <a
                    href=""
                    aria-label="Vist our LinkedIn page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialLinkedin size={26} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-t border-gray-600 py-4">
          <div className="flex items-center justify-center gap-[6px] text-gray-400">
            <AiOutlineCopyrightCircle aria-hidden="true" />
            <p>
              Copyright <a href="https://github.com/Nimi77">Abimbola Oladejo</a>{' '}
              {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
