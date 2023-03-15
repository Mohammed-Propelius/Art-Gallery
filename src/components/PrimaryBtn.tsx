import React, { FC } from "react";

interface buttonProps {
  title: string;
  path: string;
  reverse?: boolean;
  ourLocation: boolean;
}
const PrimaryBtn: FC<buttonProps> = ({ title, path, reverse, ourLocation }) => {
  return (
    <div
      className={`${
        !ourLocation
          ? "pt-8 ml-4 flex cursor-pointer lg:pt-[64px]"
          : "flex cursor-pointer"
      }`}
    >
      <button
        className={`${
          reverse && ourLocation
            ? "bg-art_black flex flex-row-reverse absolute md:left-[5%]"
            : "bg-art_black flex"
        }`}
      >
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
