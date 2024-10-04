"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import { navbarData } from "../lib/data"; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center items-center " id="nav">
      <div className="container md:container lg:container absolute flex items-center justify-between mt-24 px-5">
        <motion.div
          className="lg:container flex items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={navbarData.logo}
            alt={navbarData.logoAlt}
            width={50}
            height={50}
          />
        </motion.div>

        {/* Animate the Bars3Icon */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Bars3Icon
            className="h-8 w-8 text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </motion.div>
      </div>

      {/* Render MenuDrawer */}
      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default Navbar;
