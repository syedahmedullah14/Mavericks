"use client"

import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "./product-card"

export default function InstrumentationSection() {
  const instrumentTypes = [
    {
      name: "Pressure Transmitters",
      image: "/pressure transmitter.webp",
    },
    {
      name: "Temperature Transmitters",
      image: "/temperature transmitter.webp",
    },
    {
      name: "Flow Transmitters",
      image: "/flow transmitter.webp",
    },
    {
      name: "Level Transmitters",
      image: "/level-transmitter.jpg",
    },
    {
      name: "Gauges",
      image: "/gauges.webp",
    },
    {
      name: "Analyzers",
      image: "/analyzers.png",
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
    <section id="instrumentation" className="py-16 bg-white">
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
          Instrumentation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          We offer comprehensive instrumentation solutions including sensors, transmitters, and analyzers for measuring
          pressure, flow, temperature, and level. Every instrument is tested and commissioned to ensure accuracy,
          safety, and system integration.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {instrumentTypes.map((instrument, index) => (
            <ProductCard key={index} name={instrument.name} image={instrument.image} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
