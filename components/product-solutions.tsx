"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ProductSolutions() {
  const products = [
    {
      title: "Valves",
      description:
        "High-Performance Industrial Valves, Including Globe, Ball, Gate, Butterfly, And Cryogenic Types, Designed For Precision Flow Control Across Demanding Applications.",
      image: "/Valves.jpg",
      link: "/products",
      hash: "valves",
    },
    {
      title: "Pumps",
      description:
        "A Versatile Range Of Cryogenic, Submersible, Vertical Inline, And Split-Case Pumps To Meet Varied Industrial Fluid Handling Needs With Reliability And Efficiency.",
      image: "/Pumps.jpg",
      link: "/products",
      hash: "pumps",
    },
    {
      title: "Instrumentation",
      description:
        "Comprehensive Instrumentation Solutions For Pressure, Temperature, Flow, And Level Measurement – Including Transmitters, Gauges, Analyzers, And Fittings.",
      image: "/instrumentation-fittings.jpg",
      link: "/products",
      hash: "instrumentation",
    },
    {
      title: "Panels",
      description:
        "Custom-Built PCC, MCC, VFD, And Control Panels Designed For Seamless Integration With Automation Systems And Safe Electrical Distribution.",
      image: "/Panels.jpg",
      link: "/products",
      hash: "panels",
    },
    {
      title: "Generators",
      description:
        "Robust Diesel Generator Sets Ranging From 3kVA To 4500kVA, Ensuring Uninterrupted Power Supply For Industrial And Commercial Operations.",
      image: "/Generators.jpg",
      link: "/products",
      hash: "generators",
    },
    {
      title: "EPC Solutions",
      description:
        "End-To-End Engineering, Procurement, And Construction Services For Industrial Automation, Oil & Gas Systems, Boiler Automation, And Complete Plant Solutions.",
      image: "/epc-solutions.jpg",
      link: "/products",
      hash: "epc",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="relative mb-16 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 90, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/products-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10 text-center text-white"
        >
          <motion.h2 
            className="section-heading mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
          >
            Product Solutions
          </motion.h2>
          <motion.p 
            className="max-w-4xl mx-auto text-lg text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Mavericks Provides End-To-End Product Solutions Including PLC/DCS Control Systems, Electrical Panels,
            Instrumentation, And Turnkey Engineering Components - All Tailored To Industrial Demands Across Oil & Gas,
            Pharma, Power, And More.
          </motion.p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                <Link href={{ pathname: product.link, hash: product.hash }} scroll={false}>
                  <Button
                    variant="outline"
                    className="border-[#e52222] text-[#e52222] hover:bg-[#e52222] hover:text-white group transition-all duration-300"
                  >
                    Learn More
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </motion.svg>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
