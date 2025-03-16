"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

function TypingEffect({ 
  text, 
  speed = 50, 
  delay = 1000, 
  loop = true,
  className = ""
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        setIsTyping(false);
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayedText("");
            setCurrentIndex(0);
            setIsTyping(true);
          }, delay);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, isTyping, loop, speed, text]);

  return (
    <div className={`relative ${className}`}>
      <div className="text-md lg:text-md font-bold bg-white xl:block">
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[1px] sm:w-[2px] h-1 sm:h-5 bg-primary ml-1"
        />
      </div>
    </div>
  );
}

export { TypingEffect }; 