"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function ProductHeroMoreCard() {
  const router = useRouter()
  
  return (
    <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.05 }} onClick={() => router.push("/products")}
      className="cursor-pointer h-80 w-80 bg-primary/[0.4] rounded-md shadow-text/[0.4] flex justify-center items-center">
      <h3 className='text-5xl'>...</h3>
    </motion.div>
  )
}

export default ProductHeroMoreCard