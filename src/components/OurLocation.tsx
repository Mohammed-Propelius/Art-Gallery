import React from "react";

const OurLocation = () => {
  return (
    <>
      <div>
        <div className="bg-art_black flex justify-center gap-[20rem]">
          <h1 className="font-bigShoulder font-black text-[55px] leading-[55px] text-art_white py-[32px] px-4 uppercase">
            our
            <p>location</p>
          </h1>
          <div className="py-[32px] px-4 max-w-[50%]">
            <p
              className="text-art_gold font-bigShoulder text-[36px] leading-[36px] font-black uppercase"
              id="address-main"
            >
              99 King Street
            </p>
            <div id="address-details">
              <div>
                <p className="text-art_white">Newport</p>
                <p className="text-art_white">United States of America</p>
                <p className="text-art_white">RI 02840</p>
              </div>
            </div>
            <div>
              <p className="text-art_white max-w-[40%]">
                Our newly opened gallery is located near the Edward King House
                on 99 King Street, the Modern Art Gallery is free to all
                visitors and open seven days a week from 8am to 9pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurLocation;
