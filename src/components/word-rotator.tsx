// components/word-rotator.tsx
"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WordRotatorProps {
  words: string[]
  interval?: number
  className?: string
}

export function WordRotator({ 
  words, 
  interval = 2000, 
  className = '' 
}: WordRotatorProps) {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)
    
    return () => clearInterval(intervalId)
  }, [words, interval])

  return (
    <span className={`relative inline-block h-[60px] md:h-[76px] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span 
          key={wordIndex}
          className="relative text-primary"
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
        >
          {words[wordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

