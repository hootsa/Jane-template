import React from "react";
import IconSection from "../Main/IconSection";

const Section2 = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-white  ">
      <div className="container max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-row flex-wrap lg:flex-nowrap gap-32 justify-between">
        <div className="w-full lg:basis-2/5 ">
          <h2 className="font-semibold text-5xl">
            I'm your{" "}
            <span className=" whitespace-nowrap text-sky-600 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="249"
                height="22"
                viewBox="0 0 249 22"
                fill="currentColor"
                className="absolute left-0 bottom-0.5 h-5 w-full -z-50"
              >
                <path
                  d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z"
                  className="fill-blue-100"
                ></path>
              </svg>
              all in one
            </span>{" "}
            project solution
          </h2>
        </div>

        <div className=" w-full lg:basis-3/5 ">
          <p className="text-lg leading-8">
            Experience the advantage of an all-inclusive project solution, where
            excellence, speed, and responsiveness converge to ensure the highest
            quality outcome.
          </p>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto flex flex-row flex-wrap lg:flex-nowrap gap-10 px-6 pb-20">
        <div className="lg:basis-1/3 ">
          {[...Array(3)].map((item, index) => (
            <IconSection
              key={"section" + index}
              title="Excellence"
              description="  I take pride in doing things well. All client work is done with the best quality possible."
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="kh ki fv"
                  className=" w-5 h-5 "
                >
                  <g clip-path="url(#clip0_112_3)">
                    <path
                      d="M3.5 19.5V23.5H21.5V19.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.5 12.5V5.5L17.5 4.5V1.5H7.5V4.5L10.5 5.5V12.5L2.868 15.044C2.051 15.316 1.5 16.081 1.5 16.942V19.5H23.5V16.942C23.5 16.081 22.949 15.317 22.132 15.045L14.5 12.5Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              }
            />
          ))}
        </div>
        <div className="lg:basis-2/3 relative w-full lg:w-3/12 h-2/4 ">
          <img
            src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexperience-image.c864d869.jpg&w=1920&q=75"
            className="object-cover object-center rounded-lg "
          ></img>
          <div className=" bg-sky-800 absolute w-4/6 h-32 -bottom-20 left-0 right-0 m-auto	 rounded-xl flex flex-row justify-center p-10 gap-12 text-center opacity-90 ">
            <div className="text-4xl text-white	">
              <span className="block text-4xl ">10</span>
              <span className="block text-sm	">Years of Experience</span>
            </div>
            <div className="text-4xl text-white	">
              <span className="block text-4xl ">150</span>
              <span className="block text-sm">Project Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
