"use client"

import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "./product-card"

export default function ValvesSection() {
  const valveTypes = [
    {
      name: "Globe Control Valves",
      image: "/globe-control.jpg",
    },
    {
      name: "Ball Control Valves",
      image: "/ball-valves.png",
    },
    {
      name: "Cryogenic Valves",
      image: "/cryogenic-valve.jpg",
    },
    {
      name: "Gate Valves",
      image: "/gate-valve2.webp",
    },
    {
      name: "Butterfly Valves",
      image: "/butterfly-valves.png",
    },
    {
      name: "Non-Return Valves",
      image: "/non-return-valves.jpg",
    },
    {
      name: "Double Disc Conduit Gate Valves",
      image: "/gate-valves.jpg",
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
    <section id="valves" className="py-16 bg-white">
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
          Valves
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          We supply industrial-grade valves for flow control across various applications — including pressure,
          temperature, and corrosive environments. Each valve is chosen for durability, precision, and compatibility
          with automation systems.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {valveTypes.map((valve, index) => (
            <ProductCard key={index} name={valve.name} image={valve.image} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
