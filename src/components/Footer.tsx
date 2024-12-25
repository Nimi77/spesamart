'use client';

import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { RxInstagramLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoApple } from 'react-icons/io5';
import Playstore from '@/assets/playstore.svg';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-black">
        <div className="mx-auto max-w-[90%] py-10 md:py-16 xl:max-w-6xl">
          <div className="grid grid-cols-1 items-start justify-between gap-6 text-white sm:grid-cols-3 lg:flex">
            <div className="newsletter">
              <div className="text-lg font-semibold">Buyo</div>
              <div className="pt-6">
                <fieldset>
                  <legend className="font-medium">Subscribe</legend>
                  <p className="pb-4 pt-2">Get 10% off your first order </p>
                  <div className="flex h-10 items-center justify-between rounded-md border-2 bg-transparent">
                    <input
                      name="email_address"
                      id="email_address"
                      type="text"
                      placeholder="Enter your email"
                      aria-label="Enter your enail address"
                      className="border-0 bg-transparent px-2 py-3 text-sm text-white-gray outline-0"
                    />
                    <button aria-label="Send email address" className="p-2">
                      <PaperAirplaneIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="support">
              <h4 className="font-medium">Support</h4>
              <div className="pt-6">
                <ul className="space-y-4 text-sm">
                  <li className="max-w-44">
                    111 Surulere street, Gbangilada road, DH 1515, Delta.
                  </li>
                  <li>buyo@gmail.com</li>
                  <li>(+234) 814 888 412</li>
                </ul>
              </div>
            </div>
            <div className="account">
              <h4 className="font-medium">Account</h4>
              <div className="pt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link href="/account">My Account</Link>
                  </li>
                  <li>
                    <Link href="/register">Login / Register</Link>
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
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link href="/">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="download space-y-6">
              <h4 className="heading font-medium">Download App</h4>
              <div className="space-y-2">
                <p className="text-white-gray">
                  Save $3 with App New User Only
                </p>
                <div className="flex flex-col items-start justify-center gap-2 lg:flex-row">
                  <div className="qr-code flex shrink-0 items-center justify-center border-2 border-gray-100">
                    <Image
                      src={'/qrCode.png'}
                      alt="Buyo QR Code"
                      width={80}
                      height={80}
                      className="h-20 w-20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      className="google-store flex max-h-10 items-center rounded border bg-transparent p-1"
                    >
                      <Playstore aria-hidden="true" />
                      <div className="flex flex-col items-start justify-center">
                        <span className="text-[10px] font-medium uppercase">
                          Get it on
                        </span>
                        <span className="text-sm font-semibold">
                          Google Play
                        </span>
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
                        <span className="text-sm font-semibold">App Store</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="social-icons">
                <div className="flex items-center justify-start gap-6">
                  <a
                    href="/"
                    aria-label="Vist our Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook size={26} aria-hidden="true" />
                  </a>
                  <a
                    href="/"
                    aria-label="Vist our X page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="/"
                    aria-label="Vist our Instagran page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RxInstagramLogo size={22} aria-hidden="true" />
                  </a>
                  <a
                    href="/"
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
            <p className="text-sm">
              Copyright <a href="github.com/Nimi77">Abimbola Oladejo</a> 2024.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
