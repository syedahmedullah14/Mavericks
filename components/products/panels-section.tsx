"use client"

import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "./product-card"

export default function PanelsSection() {
  const panelTypes = [
    {
      name: "PLC Control Panels",
      image: "/plc-panels.jpg",
    },
    {
      name: "DCS Control Panels",
      image: "/dsc-panel.jpg",
    },
    {
      name: "MCC Panels",
      image: "/mcc-panels.webp",
    },
    {
      name: "PCC Panels",
      image: "/pcc-panels.jpg",
    },
    {
      name: "VDF Panels",
      image: "/vfd-panels.png",
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
    <section id="panels" className="py-16 bg-gray-50">
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
          Panels
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          We design and manufacture high-quality Power Control Centers (PCC), Motor Control Centers (MCC), and VFD
          panels tailored for industrial power distribution and motor management. Our panels are built for reliability,
          operational safety, and seamless integration into automation systems.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {panelTypes.map((panel, index) => (
            <ProductCard key={index} name={panel.name} image={panel.image} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
