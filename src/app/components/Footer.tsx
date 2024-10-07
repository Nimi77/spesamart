"use client";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import SendIcon from "@/assets/send.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer mt-12">
      <div className="bg-black">
        <div className="max-w-[90%] xl:max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-content-center text-white">
            <div className="newsletter w-max">
              <div className="logo font-semibold text-lg">
                <span>Buyo</span>
              </div>
              <div className="pt-6">
                <h4 className="font-medium">Subscribe</h4>
                <p className="pt-2 pb-4">Get 10% off your first order </p>
                <div className="h-10 bg-transparent flex items-center justify-between py-3 px-2 text-gray-500 border-2 rounded-md">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="text-sm text-white-gray bg-transparent border-0 outline-0"
                  />
                  <SendIcon />
                </div>
              </div>
            </div>
            <div className="support">
              <h4 className="heading font-medium">Support</h4>
              <div className="pt-6">
                <ul className="space-y-4 text-sm">
                  <li>111 Surulere street, Gbangilada road, DH 1515, Delta.</li>
                  <li>buyo@gmail.com</li>
                  <li>(+234) 814 888 412</li>
                </ul>
              </div>
            </div>
            <div className="account">
              <h4 className="heading font-medium">Account</h4>
              <div className="pt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link href="/account">My Account</Link>
                  </li>
                  <li>
                    <Link href="/auth">Login / Register</Link>
                  </li>
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/wish-list">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="/products">Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="support">
              <h4 className="heading font-medium">Quick Link</h4>
              <div className="pt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link href="/account">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/auth">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link href="/cart">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/wish-list">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="download">
              <h4 className="heading font-medium">Download App</h4>
              <div className="pt-6">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <div className="qr-code border-2 border-gray-50 flex items-center justify-center shrink-0">
                    <Image
                      src={"/qrCode.png"}
                      alt="Buyo QR Code"
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
               
                  <div className="flex flex-col gap-2">
                    <button className="google-store bg-transparent border rounded py-1 px-2 flex items-center">
                      <div className="flex flex-col items-left">
                        <span className="font-medium uppercase text-xs">
                          Get it on
                        </span>
                        <span className="font-semibold text-sm">
                          Google Play
                        </span>
                      </div>
                    </button>
                    <button className="apple-store bg-transparent border rounded py-1 px-2 flex items-center">
                      <IoLogoApple size={23} />
                      <div className="flex flex-col items-left ml-2">
                        <span className="font-medium uppercase text-xs">
                          Download on the
                        </span>
                        <span className="font-semibold text-sm">App Store</span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="social-icons mt-4">
                  <div className="flex items-center gap-4 justify-center">
                    <span className="rounded-full p-1 text-white hover:bg-primary hover:text-black">
                      <TiSocialFacebook size={22} />
                    </span>
                    <span className="rounded-full p-1 text-white hover:bg-primary hover:text-black">
                      <BsTwitterX size={20} />
                    </span>
                    <span className="rounded-full p-1 text-white hover:bg-primary hover:text-black">
                      <RxInstagramLogo size={22} />
                    </span>
                    <span className="rounded-full p-1 text-white hover:bg-primary hover:text-black">
                      <TiSocialLinkedin size={22} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-t border-gray-500 py-4">
          <div className="flex items-center justify-center gap-[6px] text-gray-500 text-center">
            <AiOutlineCopyrightCircle />
            <p>
              Copyright <a href="github.com/Nimi77">Abimbola Oladejo</a> 2024.
              All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;