import React from "react";

const YourDay = () => {
  return (
    <div>
      <div className=" md:flex md:flex-row-reverse">
        <div className="mx-[16px] mt-[120px]">
          <img src="/mobile/image-grid-1.jpg" className="sm:hidden" />
          <img src="/tablet/image-grid-1@2x.jpg" className="hidden sm:block" />
        </div>
        <div className="md:my-auto">
          <h1 className="font-bigShoulder font-black text-[50px] leading-[55px] text-art_black pt-[25px] px-4 uppercase md:w-[53%]">
            Your Day
            <p className="">at the Gallery</p>
          </h1>
          <p className="font-outfit font-light text-[18px] leading-[28px] text-art_grey px-4 pt-[21px]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </div>
      {/* 3 images  */}
      <div className="mt-[32px] mb-[120px] gap-4 px-[20px] flex flex-col md:flex md:flex-row">
        <div>
          <img src="/mobile/image-grid-2.jpg" className="sm:hidden" />
          <img
            src="/tablet/image-grid-2@2x.jpg"
            className="hidden sm:block h-full"
          />
        </div>
        {/* 2 images */}
        <div className="flex flex-col gap-[5px]">
          <div>
            <img src="/mobile/image-grid-3.jpg" className="sm:hidden" />
            <img
              src="/tablet/image-grid-3@2x.jpg"
              className="hidden sm:block"
            />
          </div>
          <div className="bg-art_black">
            <div className="px-[24px] py-[48px] flex flex-col gap-2 md:py-[85px] md:px-[28px] ">
              <h1 className="font-bigShoulder font-black text-[50px] leading-[55px] text-art_white uppercase">
                COME & BE
                <p className="">INSPIRED</p>
              </h1>
              <p className="font-outfit font-light text-[18px] leading-[28px] text-art_white">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourDay;
