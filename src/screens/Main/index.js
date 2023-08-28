import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoDribbble,
} from "react-icons/io5";
import Section2 from "./Section2";
import LogoImages from "./LogoImages";
import CardStudy from "./CardStudy";

const Main = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-6 pt-24 pb-28 flex flex-row flex-wrap lg:flex-nowrap gap-10 justify-center lg:justify-between items-center">
        <div className="w-full lg:basis-2/3 max-w-2xl">
          <h3 className="text-6xl font-bold pb-10 text-center">
            Helping <br /> businesses turn their ideas into reality
          </h3>
          <p className="text-lg text-center">
            I'm a passionate developer, entrepreneur, and general technology
            enthusiast living in San Francisco. I've worked with hundreds of
            startups to help them develop their ideas into profitable
            businesses.
          </p>
          <div className="mt-10 flex flex-row flex-wrap sm:flex-nowrap justify-center gap-6 max-w-2xl">
            <button className="text-white bg-blue-950 font-medium py-2 rounded-2xl sm:basis-1/2 hover:bg-blue-800 transition-all w-2/4">
              Book a call with me
            </button>
            <div className="flex flex-row justify-center w-full sm:basis-1/2">
              <a
                href="#"
                className=" flex justify-center items-center w-11 h-11 border border-slate-400 rounded-full box-border mr-4 hover:bg-slate-100 transition-all"
              >
                <IoLogoInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className=" flex justify-center items-center w-11 h-11 border border-slate-400 rounded-full box-border mr-4 hover:bg-slate-100 transition-all"
              >
                <IoLogoTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className=" flex justify-center items-center w-11 h-11 border border-slate-400 rounded-full box-border hover:bg-slate-100 transition-all"
              >
                <IoLogoDribbble className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:basis-1/3 justify-end flex">
          <img
            src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-portrait.5fcdea2f.jpg&w=1080&q=75"
            className="h-4/5 object-cover object-center rounded-lg w-full"
          ></img>
        </div>
      </div>
      <Section2 />
      <LogoImages />
      {[...Array(3)].map((item, index) => {
        return (
          <CardStudy
            key={"cardstudy" + index}
            categories="Branding"
            title="Horizons in Perspective"
            description=" I helped Horizons in Perspective develop a new branding and website
    experience, as well as an engaging product design for their
    bi-annual journal publication."
            imgSource="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2Fimages%2Fcase_studies%2Fcase-study-01.jpg&w=3840&q=75"
          />
        );
      })}
    </>
  );
};
export default Main;
