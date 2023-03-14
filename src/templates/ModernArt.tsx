import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";

const ModernArt = () => {
  return (
    <div>
      <div>
        <div className="md:relative lg:flex lg:justify-center">
          <div className="hidden lg:block my-0 mx-4 w-[50%] h-full absolute left-[-20%] top-0 bg-art_black z-[1]" />
          <img
            src="/mobile/image-hero.jpg"
            className="sm:hidden"
            alt="hero-image"
          />
          <img
            src="/tablet/image-hero@2x.jpg"
            className="md:max-w-[70%] hidden sm:block hidden lg:hidden"
            alt="hero-image"
          />
          <img
            src="/desktop/image-hero@2x.jpg"
            className="lg:max-w-[40%] hidden md:none lg:block"
            alt="hero-image"
          />
        </div>
        <div className="lg:left-[65%] md:flex md:flex-col md:absolute top-[11%] left-[58%] ">
          <h1 className="font-bigShoulder font-black text-[55px] leading-[55px] text-art_black py-[32px] px-4 lg:absolute lg:left-[-150%] lg:top-[24%] lg:text-art_white lg:z-[1] lg:mix-blend-difference lg:text-[70px] lg:leading-[88px] lg:top-[-75%] lg:left-[-160%] xl:left-[-150%]  xl:text-[90px] xl:leading-[88px]">
            MODERN
            <p>ART GALLERY</p>
          </h1>

          <p className="font-outfit font-light text-[18px] leading-[28px] text-art_grey px-4 lg:text-[22px] xl:leading-[40px]">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <div>
            <PrimaryBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernArt;
