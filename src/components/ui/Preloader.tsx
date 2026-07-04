'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // spring-like ease
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FCFCFD]"
        >
          {/* Logo container */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 relative overflow-hidden"
            >
              <Star className="w-8 h-8 text-white fill-current z-10" />
            </motion.div>
            
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-bold text-2xl text-gray-900 tracking-tight">NorthStar</h1>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mt-1">Immigration</p>
            </motion.div>
          </div>
          
          {/* Subtle loading spinner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-20 w-5 h-5 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
