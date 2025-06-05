"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ProductCardProps {
  name: string
  image: string
  className?: string
}

export default function ProductCard({ name, image, className = "" }: ProductCardProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`relative ${className}`}
      >
        <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end"
          >
            <h3 className="text-white p-4 font-medium text-lg">{name}</h3>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 