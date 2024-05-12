"use client"
import React from 'react'
import cls from 'classnames'
import { motion } from 'framer-motion'

function Button({ children, primary = false, plain=false, className = "" }:
  { children: React.ReactNode, primary?: boolean, plain?: boolean, className?: string }) {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className={cls(!plain ? primary ? "bg-primary" : "bg-card" : null,
        !plain ? "rounded-md p-3 text-text shadow-text/[0.5] shadow-sm" : null, className)}>
      {children}
    </motion.button>
  )
}

export default Button