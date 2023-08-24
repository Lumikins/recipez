import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { legalNav, quickNav } from "../data";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="text-white py-20 customGradient">
      <div className="container mx-auto px-5 md:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t-2 border-slate-800">
        <div className="flex">
          <p className="font-bold text-center text-lg uppercase">
            recip<span className="uppercase text-green-500">ez</span>
          </p>
        </div>
        <div>
          <p className="uppercase font-semibold mb-4">quick navigation</p>
          <div className="flex flex-col text-start mb-4 md:mb-0">
            {quickNav.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block md:inline-block py-2 hover:text-green-500"
              >
                {link.path}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="uppercase font-semibold mb-4">legal</p>
          <div className="flex flex-col text-start mb-4 md:mb-0">
            {legalNav.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block md:inline-block py-2 hover:text-green-500"
              >
                {link.path}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="uppercase first-letter:font-semibold p-1.5">
            social media
          </p>
          <div className="flex mt-4 gap-3">
            <a
              href="#"
              className="p-1.5 text-white hover:text-blue-600 duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="#"
              className="p-1.5 text-white hover:text-pink-600 duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="#"
              className="p-1.5 text-white hover:text-blue-600 duration-300"
            >
              <FaTwitter size={30} />
            </a>
          </div>
          <Button
            title="Sign up"
            type="button"
            containerStyle="mt-10 md:block bg-transparent border-2 text-white hover:bg-slate-700 hover:border-green-500 hover:text-green-500 rounded-full min-w-[130px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-semibold text-sm leading-10">
          &copy; TopFoods 2023. Tous droits réservés - KrassDev.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
