import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Banner1 from "../assets/banner1.jpeg";
import Banner2 from "../assets/banner2.jpeg";
import Banner3 from "../assets/banner3.jpeg";
import Banner4 from "../assets/banner4.jpeg";
import Banner5 from "../assets/banner5.jpeg";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ title, image, type, url }) => {
  return (
    <div className="w-full h-screen">
      {/* banner image */}
      <div className="relative w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          loading="lazy"
          alt="Recipez Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* overlay with dynamic title, to be shown only when the type of page is home */}
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col gap-20 items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center capitalize">
          {title}
        </h1>
        {type && (
          <p className="text-green-500 bg-black/50 text-base md:text-2xl mt-4 text-center px-6 py-4 md:rounded-full">
            Welcome to Recipez, your home cooking companion !
            <br />
            Discover the best recipes from around the world.
          </p>
        )}
        <MdKeyboardDoubleArrowDown size={50} className="text-green-500 animate-bounce" />
        {type === "recipeDetails" && (
          <a href={url} target="__blank" className="text-white text-center text-xl hover:text-green-500">Click here to see full instructions, or scroll down for more info</a>
        )}
      </div>
    </div>
  );
};

export default Header;
