"use client";
import { technologyData } from "../lib/data"; // Adjust the path as needed
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Import necessary functions from framer-motion

const Technologies = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Check if the component is in view
  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsInView(isVisible);
      if (isVisible) {
        controls.start({ opacity: 1, transition: { duration: 0.25 } }); // Trigger animation when in view
      }
    }
  };

  useEffect(() => {
    controls.start({ opacity: 0 }); // Set initial state
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="overflow-hidden tech-section md:h-screen flex flex-col justify-center items-center">
      <div className="container md:container lg:container flex flex-col justify-center lg:justify-start lg:items-start items-center px-5 py-12">
        <div>
          <h1 className="text-4xl lg:text-6xl poppins-bold mb-3 text-white text-start">
            TECHNOLOGIES
          </h1>
          <p className="text-white quicksand-regular text-start hidden md:block">
            I specialize in a range of modern technologies, from front-end to
            back-end development. My expertise includes JavaScript, TypeScript,
            and frameworks like React.js and React Native for building dynamic
            user interfaces. On the server side, I am skilled in Node.js and
            Python, particularly with Django, for developing robust APIs and
            scalable applications. I also work with databases such as MongoDB
            and MySQL to handle data storage efficiently. Additionally, I am
            proficient in Next.js for server-side rendering, Tailwind for
            styling, and Figma for UI/UX design. With a solid foundation in
            HTML5 and CSS3, I create responsive and visually appealing web
            applications.
          </p>
          <p className="text-white quicksand-regular text-start block md:hidden">
            I specialize in web development using JavaScript, TypeScript, React,
            and React Native. On the backend, I work with Node.js, Python,
            Django, and databases like MongoDB and MySQL. I also use Next.js for
            SSR, Tailwind for styling, and Figma for UI/UX design.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }} // Initial opacity
          animate={controls}
          className="flex flex-wrap justify-evenly items-center lg:justify-start lg:mt-16 md:mt-14 mt-9 gap-1"
        >
          {technologyData.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center m-4"
              initial={{ opacity: 0, scale: 0.5 }} // Initial state: invisible and smaller
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              } // Animate to full size and opacity
              transition={{ duration: 0.2, delay: index * 0.2 }} // Pop in sequentially
            >
              <Image
                src={tech.imageSrc}
                alt={tech.name}
                className="lg:w-28 lg:h-28 w-[4.8rem] h-[4.8rem] md:w-20 md:h-20 mb-2" // Adjust size as needed
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
