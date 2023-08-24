import React from "react";
import navigations from "../../constants/navigations";
import Dropdown from "./dropdown";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <nav className="container max-w-6xl mx-auto px-6 flex flex-row items-center align justify-between py-6">
        <div className="flex">
          <a href="#">
            <img
              src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d2e4816a.png&w=256&q=75"
              className="w-32 h-12"
            ></img>
          </a>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black bg-slate-100 font-medium px-6 py-2 rounded-2xl"
          >
            Book a call
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 lg:gap-x-12 gap-x-4 m-auto">
          {navigations.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-lg font-normal leading-8 cursor-pointer transition duration-100 after:block after:w-4 after:h-0.5 after:m-auto hover:after:bg-gray-400"
            >
              {item.title}
            </a>
          ))}

          <Dropdown />
        </div>
      </nav>
    </header>
  );
};
export default Header;
