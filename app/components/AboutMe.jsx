"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { aboutData, aboutIcons } from "../lib/data";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Different animation variants for each part
  const imageAnimation = {
    hidden: { opacity: 0, x: -400 }, // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideAnimation = {
    hidden: { opacity: 0, x: 400 }, // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 400 }, // Slide in from the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      id="about"
      ref={sectionRef}
      className="about-section md:h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="container flex flex-col justify-center items-center px-5 py-5">
        <div className="grid grid-cols-12 gap-4">
          {/* First column - image */}
          <motion.div
            className="col-span-12 lg:col-span-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageAnimation}
          >
            <Image
              src={aboutData.image}
              alt={aboutData.imageAlt}
              className="lg:-mt-11"
            />
          </motion.div>

          {/* Second column - slides */}
          <motion.div
            className="col-span-12 lg:col-span-8 hidden md:block overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideAnimation}
          >
            <div className="slider-container overflow-hidden">
              <div className="slider-content flex gap-16">
                {aboutData.slides.map((slide, index) => (
                  <p key={index} className="about-slide text-9xl poppins-black">
                    {slide}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text section */}
        <motion.div
          className="bg-white p-5 lg:px-32 lg:py-20 about-text rounded-md -mt-36"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textAnimation}
        >
          <h1 className="text-4xl lg:text-6xl poppins-bold mb-3">ME</h1>
          <p className="quicksand-regular">{aboutData.description}</p>

          {/* Icons Section */}
          <div className="flex justify-center grid grid-cols-3 items-center mt-3">
            {aboutIcons.map(({ name, imageSrc }) => (
              <div key={name} className="flex justify-center">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={100}
                  height={100}
                  className="lg:hidden"
                />
                <Image
                  src={imageSrc}
                  alt={name}
                  width={200}
                  height={200}
                  className="lg:block hidden"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile slides for smaller screens */}
      <motion.div
        className="col-span-12 lg:col-span-7 block md:hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideAnimation}
      >
        <div className="slider-container overflow-hidden">
          <div className="slider-content flex gap-16">
            {aboutData.slides.map((slide, index) => (
              <p key={index} className="about-slide text-9xl poppins-black">
                {slide}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
