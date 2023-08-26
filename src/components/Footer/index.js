import React from "react";
import { IoResizeOutline } from "react-icons/io5";
import {
  FaEnvelope,
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" container max-w-6xl px-6 mx-auto bg-slate-900 pt-14">
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-12 justify-between my-14 ">
        <div className="lg:basis-2/3">
          <h2 className="text-white font-semibold	text-5xl">
            Lets make something
            <br /> great together
          </h2>

          <div className="flex lg:justify-start justify-center">
            <a className="bg-white rounded-full	mt-8 flex flex-row gap-2.5 justify-center items-center p-3 px-4 text-base font-semibold">
              Book a Call
              <IoResizeOutline className="w-4 h-4 " />
            </a>
          </div>
        </div>
        <div className="lg:basis-1/3">
          <p className="text-white text-lg leading-7	">
            Iced pumpkin ristretto irish trifecta robusta trade froth affogato
            barista con barista cappuccino filter roast.
          </p>
          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center gap-4 justify-center px-2.5	mt-8">
            <a className="flex flex-row gap-2 text-white text-sm border border-slate-500 rounded-full	px-1.5 py-1">
              Email me
              <FaEnvelope className="w-4 h-4 " />
            </a>
            <a className="flex flex-row gap-2 text-white text-sm border border-slate-500 rounded-full px-2.5 py-1">
              Dribble
              <FaDribbble className="w-4 h-4 " />
            </a>
            <a className="flex flex-row gap-2 text-white text-sm border border-slate-500 rounded-full px-2.5 py-1">
              Instagram
              <FaInstagram className="w-4 h-4 " />
            </a>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-nowrap items-center gap-4 justify-center px-2.5	mt-8">
            <a className="flex flex-row gap-2 text-white text-sm border border-slate-500 rounded-full px-2.5 py-1">
              Twitter
              <FaTwitter className="w-4 h-4 " />
            </a>
            <a className="flex flex-row gap-2 text-white text-sm border border-slate-500 rounded-full px-2.5 py-1">
              Linkedin
              <FaLinkedin className="w-4 h-4 " />
            </a>
            <a className="flex flex-row gap-2 text-white text-sm border border-slate-500 rounded-full px-2.5 py-1">
              Github
              <FaGithub className="w-4 h-4 " />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-b border-slate-500 opacity-60" />
      <div className=" pt-10 pb-6 bg-slate-900 flex flex-row flex-wrap lg:flex-nowrap gap-10 justify-between items-center">
        <div className="flex flex-row gap-6 font-medium text-base text-white ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <p className="text-slate-300">
          © 2023 Tailwind Awesome. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
