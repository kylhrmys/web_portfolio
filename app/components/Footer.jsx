import Image from "next/image";
import { createvesLogoData } from "../lib/data"; // Assuming footer logo is in createvesLogoData
import { footerIcons } from "../lib/data"; // Import the footerIcons array
import { headerData } from "../lib/data";

const Footer = () => {
  return (
    <div className="h-screen bg-[#1A1A1B] flex items-center justify-center">
      <div className="text-white container md:container lg:container flex flex-col items-center">
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <div className="order-1 lg:order-0">
            <Image
              src={createvesLogoData.imageSrc}
              alt="Footer logo"
              width={200} // Set width as needed
              height={200} // Set height as needed
              className="footer-logo"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 lg:translate-y-12 lg:order-1">
            <a href="#nav">
              <Image
                src={headerData.arrowImage}
                alt="Arrow Down"
                className=" h-36 w-3 rotate-180 lg:hidden block -translate-y-10"
              />
            </a>
            <p className="poppins-bold text-1xl text-center lg:text-start">
              FOLLOW YOUR DREAMS
            </p>
            <p className="quicksand-bold text-[.8rem]">
              Copyright © 2024 Kayl Teves. All Rights Reserved
            </p>
            <div className="flex gap-8 flex-wrap justify-center items-center lg:justify-start lg:items-start ">
              {footerIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.imageSrc}
                  alt={`Footer icon ${index + 1}`} // Add alt text for accessibility
                  className="footer-icon h-14 w-14 md:h-28 md:w-28 lg:h-14 lg:w-14" // Optional: Add a class for styling
                />
              ))}
              <a href="#nav">
                <Image
                  src={headerData.arrowImage}
                  alt="Arrow Down"
                  className="h-36 w-auto rotate-180 lg:-translate-y-20 lg:block hidden"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
