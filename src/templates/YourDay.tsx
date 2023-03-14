import React from "react";

const YourDay = () => {
  return (
    <div>
      <div className=" md:flex md:flex-row-reverse">
        <div className="mx-[16px] mt-[120px]">
          <img
            src="/mobile/image-grid-1.jpg"
            className="sm:hidden"
            alt="art-1"
          />
          <img
            src="/tablet/image-grid-1@2x.jpg"
            className="hidden md:block lg:hidden"
            alt="art-1"
          />
          <img
            src="/desktop/image-grid-1@2x.jpg"
            className="hidden sm:block md:hidden lg:block"
            alt="art-1"
          />
        </div>
        <div className="md:my-auto">
          <h1 className="font-bigShoulder font-black text-[50px] leading-[55px] text-art_black pt-[25px] px-4 uppercase md:w-auto lg:w-auto lg:text-[60px] lg:leading-[60px]">
            Your Day at
            <p className="">the Gallery</p>
          </h1>
          <p className="font-outfit font-light text-[18px] leading-[28px] text-art_grey px-4 pt-[21px] lg:text-[22px]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </div>
      {/* table image  */}
      <div className="mt-[32px] mb-[120px] gap-4 px-[20px] flex flex-col md:flex md:flex-row">
        <div>
          <img
            src="/mobile/image-grid-2.jpg"
            className="sm:hidden"
            alt="art-2"
          />
          <img
            src="/tablet/image-grid-2@2x.jpg"
            className="hidden sm:hidden md:block lg:hidden h-full"
            alt="art-2"
          />
          <img
            src="/desktop/image-grid-2@2x.jpg"
            className="hidden sm:block md:hidden lg:block h-full"
            alt="art-2"
          />
        </div>
        {/* flex and auditorium image */}
        <div className="flex flex-col justify-between gap-5">
          <div>
            <img
              src="/mobile/image-grid-3.jpg"
              className="sm:hidden"
              alt="auditorium-image"
            />
            <img
              src="/tablet/image-grid-3@2x.jpg"
              className="hidden sm:hidden md:block lg:hidden"
              alt="auditorium-image"
            />
            <img
              src="/desktop/image-grid-3@2x.jpg"
              className="hidden sm:hidden md:hidden lg:block"
              alt="auditorium-image"
            />
          </div>
          <div className="bg-art_black">
            <div className="px-[24px] py-[48px] flex flex-col gap-2 md:py-[85px] md:px-[28px] lg:pb-[30px] lg:gap-[32px] xl:py-[120px]">
              <h1 className="font-bigShoulder font-black text-[50px] leading-[55px] text-art_white uppercase lg:text-[60px] lg:leading-[60px]">
                COME & BE
                <p className="">INSPIRED</p>
              </h1>
              <p className="font-outfit font-light text-[18px] leading-[28px] text-art_white lg:text-[22px] lg:leading-[32px]">
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
