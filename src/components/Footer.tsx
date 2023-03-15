// @ts-ignore
import { UilInstagram } from "@iconscout/react-unicons";
// @ts-ignore
import { UilFacebook } from "@iconscout/react-unicons";
// @ts-ignore
import { UilTwitter } from "@iconscout/react-unicons";
import { FC } from "react";

interface FooterColor {
  color: string;
  textColor: string;
  ourLocation?: boolean;
}
const Footer: FC<FooterColor> = ({ color, textColor, ourLocation }) => {
  return (
    <>
      <div id="footer-wrapper">
        <div
          className={`bg-${color} flex flex-col gap-5 px-[32px] py-[48px] md:flex-row md:items-center md:gap-12`}
        >
          <h1
            className={`font-bigShoulder font-black text-[30px] leading-[35px] text-${textColor} uppercase md:w-[50%] 2xl:text-[45px] 2xl:leading-[75px]`}
          >
            MODERN
            <p className="">ART GALLERY</p>
          </h1>
          <p
            className={`font-outfit text-[16px] font-light leading-[26px] text-${textColor}  2xl:text-[25px] 2xl:leading-[50px]`}
          >
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="flex gap-5">
            <UilFacebook
              size="30"
              color={`${ourLocation ? textColor : "#fff"}`}
            />
            <UilInstagram
              size="30"
              color={`${ourLocation ? textColor : "#fff"}`}
            />
            <UilTwitter
              size="30"
              color={`${ourLocation ? textColor : "#fff"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
