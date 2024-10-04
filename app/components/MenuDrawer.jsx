// components/MenuDrawer.jsx
import React, { useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Importing the X icon
import Image from "next/image";
import { socialMediaLinks, createvesLogoData } from "../lib/data"; // Import social media links data

const MenuDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={drawerRef}
      className={`drawer ${
        isOpen ? "drawerOpen" : ""
      } flex flex-col justify-between h-full`}
    >
      {/* Using XMarkIcon for the close button */}
      <button onClick={onClose} className="p-4 text-black absolute">
        <XMarkIcon className="h-8 w-8" /> {/* X icon */}
      </button>
      {/* Social Media Links */}

      <ul className="text-black mt-14">
        {socialMediaLinks.map(({ name, imageSrc, url }) => (
          <li
            key={name}
            className="flex items-center p-4 text-2xl drawer-text poppins-black"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={imageSrc}
                alt={name}
                width={24}
                height={24}
                className="mr-2"
              />
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center p-4">
        <Image src={createvesLogoData.imageSrc} alt={createvesLogoData.name} />
      </div>
    </div>
  );
};

export default MenuDrawer;
