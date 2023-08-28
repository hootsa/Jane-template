import React from "react";

const IconSection = ({ title, description, svg }) => {
  return (
    <div className="flex flex-row gap-10 mb-8">
      <div className="flex flex-row shrink-0 justify-center items-center rounded-full bg-black text-white w-20 h-20">
        {svg}
      </div>
      <div>
        <h3 className="font-semibold text-xl pb-5">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default IconSection;
