"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { headerData } from "../lib/data";

const Header = () => {
  return (
    <div className="header-section h-screen flex flex-col justify-center items-center">
      <div className="container md:container lg:container flex flex-col justify-center items-center">
        <motion.div
          className="text-center text-white px-5 flex flex-col justify-center items-center"
          style={{ maxWidth: "850px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="lg:text-2xl mb-4 tracking-widest quicksand-regular text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {headerData.name}
          </motion.p>
          {headerData.title.map((line, index) => (
            <motion.h1
              key={index}
              className="text-4xl md:text-6xl lg:text-8xl hero-text poppins-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            >
              {line}
            </motion.h1>
          ))}
          <motion.p
            className="lg:mx-20 mt-4 quicksand-regular tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {headerData.description}
          </motion.p>
          <motion.a
            href="#contact"
            className="no-underline bg-purple-700 px-7 py-3 rounded-md mt-6 uppercase tracking-widest quicksand-regular"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {headerData.buttonText}
          </motion.a>
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Image
              src={headerData.arrowImage}
              alt="Arrow Down"
              className="arrow-image mt-8"
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
