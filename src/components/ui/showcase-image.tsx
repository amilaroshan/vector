"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ShowcaseImageProps {
  imageSrc: string;
  alt?: string;
  caption?: string;
}

function ShowcaseImage({ 
  imageSrc, 
  alt = "Vector platform showcase",
  caption
}: ShowcaseImageProps) {
  return (
    <div className="w-full py-8 md:py-8 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 1, y: -1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >

          
         
            <div className="relative w-full">
              <Image 
                src={imageSrc} 
                alt={alt}
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
        
        </motion.div>
      </div>
    </div>
  );
}

export { ShowcaseImage }; 