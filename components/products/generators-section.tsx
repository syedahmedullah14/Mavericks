"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function GeneratorsSection() {
  return (
    <section id="generators" className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Generators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          We supply a complete range of diesel generator sets from 3kVA to 4500kVA, supporting both primary and backup
          power needs. Each unit is selected for efficiency, load handling, and suitability across various industrial
          environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative h-80 overflow-hidden rounded-lg cursor-pointer group"
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ 
              scale: 1.1,
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Image
              src="/diesel.jpg"
              alt="Diesel Generator Sets (3kVA – 4500kVA)"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end"
          >
            <motion.h3 
              className="text-white p-6 text-xl font-medium"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              Diesel Generator Sets (3kVA – 4500kVA)
            </motion.h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
