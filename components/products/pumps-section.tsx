"use client"

import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "./product-card"

export default function PumpsSection() {
  const pumpTypes = [
    {
      name: "Cryogenic Pumps",
      image: "/cryogenic-pump.png",
    },
    {
      name: "Submersible Pumps",
      image: "/submersible-pumps.jpg",
    },
    {
      name: "Inline And Split Pumps",
      image: "/inline-pump.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="pumps" className="py-16 bg-gray-50">
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
          Pumps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          Our pump solutions cover a wide range of industrial needs, from fluid transfer to process-specific
          applications. Designed for consistent output and long service life, our pumps are reliable even in demanding
          and high-load environments.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pumpTypes.map((pump, index) => (
            <ProductCard key={index} name={pump.name} image={pump.image} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
