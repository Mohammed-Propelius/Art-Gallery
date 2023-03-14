import React, { FC } from "react";

interface buttonProps {
  title: string;
  path: string;
}
const PrimaryBtn: FC<buttonProps> = ({ title, path }) => {
  return (
    <div className="pt-8 ml-4 flex cursor-pointer lg:pt-[64px] ">
      <button className="bg-art_black flex">
        <p className="font-bold text-[20px] font-bigShoulder uppercase text-center text-art_white py-[24px] px-[35px]">
          {title}
        </p>
        <img
          src={`${path}`}
          className="text-art_white p-[27px] bg-inherit bg-art_gold"
          alt="Right Arrow"
        />
      </button>
    </div>
  );
};

export default PrimaryBtn;
