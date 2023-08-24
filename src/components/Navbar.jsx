import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <h1 className="text-white font-bold text-3xl uppercase">recip<span className="uppercase text-green-500">ez</span></h1>
        </a>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <a href="/#">Discover</a>
          </li>
          <li>
            <a href="/#">Favourites</a>
          </li>
        </ul>
        <Button
          title="Sign in"
          containerStyle="hidden md:block bg-transparent border text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
        />
        {/* mobile burger menu, icon change depending on the state */}
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenu />}
        </button>
      </nav>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col items-center justify-evenly bg-black w-full h-40 px-4 py-6 text-white gap-6 text-sm`}
      >
        <a href="/recipes">Discover</a>
        <a href="/favourites">Favourites</a>
      </div>
    </header>
  );
};

export default Navbar;
