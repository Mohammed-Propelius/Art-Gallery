import React from "react";

const OurLocation = () => {
  return (
    <>
      <div className="bg-[#000] flex flex-col justify-between gap-[2rem] md:flex-row  py-[8rem] lg:justify-around">
        <h1 className=" flex gap-3 md:flex-col font-bigShoulder font-black text-[55px] leading-[55px] text-art_white px-4 uppercase md:px-6 2xl:text-[100px] 2xl:leading-[110px]">
          our
          <p>location</p>
        </h1>
        <div className="px-4 flex flex-col gap-4 lg:max-w-[50%]">
          <p
            className="text-art_gold font-bigShoulder text-[36px] leading-[36px] font-black uppercase 2xl:leading-[50px] 2xl:text-[80px]"
            id="address-main"
          >
            99 King Street
          </p>
          <div
            id="address-details"
            className="font-outfit text-[18px] leading-[28px] font-light 2xl:text-[30px] 2xl:leading-[90px]"
          >
            <p className="text-art_white">Newport</p>
            <p className="text-art_white">United States of America</p>
            <p className="text-art_white">RI 02840</p>
          </div>
          <div>
            <p className="text-art_white break-words font-outfit text-[18px] leading-[28px] font-light 2xl:text-[30px] 2xl:leading-[90px]">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurLocation;
