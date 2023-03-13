import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";

const ModernArt = () => {
  return (
    <div>
      <div className="md:relative">
        <div className="h-full bg-art_black">&nbsp;</div>
        <img src="/mobile/image-hero.jpg" className="sm:hidden" />
        <img
          src="/tablet/image-hero@2x.jpg"
          className="md:max-w-[70%] hidden sm:block"
        />
      </div>
      <div className="md:flex md:flex-col md:absolute top-[11%] left-[58%]">
        <h1 className="font-bigShoulder font-black text-[60px] leading-[55px] text-art_black py-[32px] px-4">
          MODERN
          <p>ART GALLERY</p>
        </h1>
        <p className="font-outfit font-light text-[18px] leading-[28px] text-art_grey px-4">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <div>
          <PrimaryBtn />
        </div>
      </div>
    </div>
  );
};

export default ModernArt;
