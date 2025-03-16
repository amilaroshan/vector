"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function LogoCloud() {
  // Custom logos
  const logos = [
    { name: "Company 1", src: "/logo1.svg", width: 120, height: 40 },
    { name: "Company 2", src: "/logo2.svg", width: 120, height: 40 },
    { name: "Company 3", src: "/logo3.svg", width: 120, height: 40 },
    { name: "Company 4", src: "/logo4.svg", width: 120, height: 40 },
    { name: "Company 5", src: "/logo5.svg", width: 120, height: 40 },
    { name: "Company 6", src: "/logo6.svg", width: 120, height: 40 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full bg-muted/30 ">
      <div className="container mx-auto px-4">

        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-10 items-center justify-items-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export { LogoCloud }; 