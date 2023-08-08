'use client'
import './globals.css'
import { useEffect } from 'react';
import setBodyStyle from './hooks/setBodyStyle';
import { AnimatePresence, motion } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    setBodyStyle()
  })

  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/28e81a920b.js"></script>
      </head>
      <AnimatePresence>
        <motion.body 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
        className='bg-black'>{children}</motion.body>
      </AnimatePresence>
    </html>
  )
}
