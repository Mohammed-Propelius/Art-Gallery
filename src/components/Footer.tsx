import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <>
      <div id="footer-wrapper">
        <div className="bg-art_black flex flex-col gap-5 px-[32px] py-[48px] md:flex-row md:items-center md:gap-12">
          <h1 className="font-bigShoulder font-black text-[30px] leading-[35px] text-art_white uppercase md:w-[50%]">
            MODERN
            <p className="">ART GALLERY</p>
          </h1>
          <p className="font-outfit text-[16px] font-light leading-[26px] text-art_white">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="flex gap-5">
            <UilFacebook size="20" color="#fff" />
            <UilInstagram size="20" color="#fff" />
            <UilTwitter size="20" color="#fff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
