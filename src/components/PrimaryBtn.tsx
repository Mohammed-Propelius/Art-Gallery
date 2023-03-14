import React from "react";

const PrimaryBtn = () => {
  return (
    <div className="pt-8 ml-4 flex cursor-pointer lg:pt-[64px] ">
      <button className="bg-art_black flex">
        <p className="font-bold text-[20px] font-bigShoulder uppercase text-center text-art_white py-[24px] px-[35px]">
          our location
        </p>
        <img
          src="/icon-arrow-right.svg"
          className="text-art_white p-[27px] bg-inherit bg-art_gold"
          alt="Right Arrow"
        />
      </button>
    </div>
  );
};

export default PrimaryBtn;
