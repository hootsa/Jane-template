import React from "react";
import { IoDocumentText, IoResizeOutline } from "react-icons/io5";

const CardStudy = ({ categories, title, description, imgSource }) => {
  return (
    <div className="px-6">
      <div className="container max-w-6xl mx-auto pb-6 px-6 mt-16 mb-16 flex flex-row flex-wrap lg:flex-nowrap justify-between gap-12  bg-slate-100 rounded-2xl  overflow-hidden lg:p-0">
        <div className="w-full lg:basis-1/2 max-w-2xl mt-16 mb-16 pl-6">
          <div className=" mt-10 flex gap-2.5">
            <IoDocumentText className=" w-6 h-6 text-sky-700" />
            <h3 className="text-base text-sky-700">{categories}</h3>
          </div>

          <h3 className="text-3xl	mt-6 font-medium leading-9"> {title}</h3>
          <p className="leading-8	text-base mt-4">{description}</p>
          <div className="flex flex-row gap-4 mt-16 text-base text-sky-500 text-center hover:text-sky-800 transition-all	">
            <a href="#">View Case Study</a>
            <a href="#">
              <IoResizeOutline className="w-4 h-4 " />
            </a>
          </div>
        </div>
        <div className="w-full lg:basis-1/2 justify-end flex gap-12 overflow-hidden rounded-2xl lg:rounded-none">
          <img
            src={imgSource}
            className="object-cover hover:scale-105 transition duration-500"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default CardStudy;
