"use client"

import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "./product-card"

export default function EPCSolutions() {
  const solutions = [
    {
      title: "Oil & Gas Automation",
      image: "/oil-gas.jpg",
      alt: "Oil and gas industrial automation setup"
    },
    {
      title: "Boiler Automation",
      image: "/boiler.jpg",
      alt: "Industrial boiler automation system"
    },
    {
      title: "Sugar/Ethanol Plant Automation",
      image: "/sugar.jpg",
      alt: "Sugar and ethanol plant automation"
    },
    {
      title: "Rubber Plant Automation",
      image: "/rubber.jpg",
      alt: "Rubber manufacturing plant automation"
    }
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
    <section className="py-16 bg-gray-50">
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
          EPC Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          Mavericks offers end-to-end EPC (Engineering, Procurement, and Construction) services for automation
          driven industrial setups. From concept to commissioning, we manage every phase of the project with precision — ensuring
          timely delivery, technical accuracy, and full compliance with industry standards.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {solutions.map((solution, index) => (
            <ProductCard key={index} name={solution.title} image={solution.image} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
} 