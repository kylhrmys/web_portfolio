"use client";
import { projectData } from "../lib/data"; // Ensure this is correctly imported
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion"; // Import necessary functions from framer-motion
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  return (
    <div className="overflow-hidden md:h-screen projects-section md:py-24 flex flex-col justify-center items-center py-12">
      <div className="container md:container lg:container flex flex-col justify-center items-center px-5 lg:justify-start lg:items-start">
        <h1 className="text-4xl lg:text-6xl poppins-bold mb-3 text-white text-center lg:text-start">
          PROJECTS
        </h1>
        <ProjectSlider />
      </div>
    </div>
  );
};

const ProjectSlider = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred

  // Check if the component is in view
  const handleScroll = () => {
    if (ref.current && !hasAnimated) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        setIsInView(true);
        setHasAnimated(true); // Mark animation as triggered
        controls.start({ opacity: 1, y: 0 });
      }
    }
  };

  useEffect(() => {
    controls.start({ opacity: 0, y: 100 }); // Set initial state
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <Slider {...settings}>
        {projectData.map((data, index) => (
          <motion.div
            key={index}
            className="flex mt-10 md:px-10 lg:px-0 gap-5 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 1 }} // Ensure it stays visible after first animation
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:justify-start justify-center items-center bg-fill">
              {/* Image with slide-in from left */}
              <motion.div
                className="p-4 rounded-lg overflow-hidden lg:w-6/12 h-72 md:h-96 lg:h-[30rem] w-[20rem] md:w-[40rem] flex"
                initial={{ x: -100 }}
                animate={isInView ? { x: 0 } : { x: 0 }} // Ensure it stays in place after animation
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-lg bg-white overflow-hidden">
                  <Image
                    src={data.imageSrc}
                    alt={data.title}
                    className="bg-cover"
                  />
                </div>
              </motion.div>

              {/* Text section */}
              <div className="flex flex-col items-center lg:items-start lg:gap-64 justify-center lg:w-[45rem]">
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 50 }}
                  animate={isInView ? { y: 0 } : { y: 0 }} // Ensure it stays in place
                  transition={{ duration: 0.5 }}
                >
                  <p className="poppins-bold text-white text-center lg:text-start p-3 lg:p-0 lg:text-3xl text-2xl lg:mb-2">
                    {data.title}
                  </p>
                  <p className="quicksand-regular lg:text-1xl text-white text-center lg:text-start p-3 lg:p-0 lg:mb-2">
                    {data.description}
                  </p>
                  <div className="flex gap-3 mt-2 text-[12px] lg:justify-start justify-center items-center mb-10 lg:mb-0">
                    {data.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className={`px-7 py-1 quicksand-bold rounded-full ${
                          tech.toLowerCase() === "django"
                            ? "bg-green-600 text-white"
                            : tech.toLowerCase() === "reactjs"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-500 text-white"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 1 }} // Keep visible
                        transition={{ duration: 0.5, delay: techIndex * 0.2 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Button */}
                {/* <motion.button
                  className="px-10 py-3 bg-primary text-white quicksand-bold rounded-md"
                  initial={{ x: 100 }}
                  animate={isInView ? { x: 0 } : { x: 0 }} // Keep in place
                  transition={{ duration: 0.5 }}
                >
                  VIEW PROJECT
                </motion.button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Projects;
