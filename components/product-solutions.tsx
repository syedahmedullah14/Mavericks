import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductSolutions() {
  const products = [
    {
      title: "Valves",
      description:
        "High-Performance Industrial Valves, Including Globe, Ball, Gate, Butterfly, And Cryogenic Types, Designed For Precision Flow Control Across Demanding Applications.",
      image: "/images/valves.jpg",
      link: "/products#valves",
    },
    {
      title: "Pumps",
      description:
        "A Versatile Range Of Cryogenic, Submersible, Vertical Inline, And Split-Case Pumps To Meet Varied Industrial Fluid Handling Needs With Reliability And Efficiency.",
      image: "/images/pumps.jpg",
      link: "/products#pumps",
    },
    {
      title: "Instrumentation",
      description:
        "Comprehensive Instrumentation Solutions For Pressure, Temperature, Flow, And Level Measurement – Including Transmitters, Gauges, Analyzers, And Fittings.",
      image: "/images/instrumentation.jpg",
      link: "/products#instrumentation",
    },
    {
      title: "Panels",
      description:
        "Custom-Built PCC, MCC, VFD, And Control Panels Designed For Seamless Integration With Automation Systems And Safe Electrical Distribution.",
      image: "/images/panels.jpg",
      link: "/products#panels",
    },
    {
      title: "Generators",
      description:
        "Robust Diesel Generator Sets Ranging From 3kVA To 4500kVA, Ensuring Uninterrupted Power Supply For Industrial And Commercial Operations.",
      image: "/images/generators.jpg",
      link: "/products#generators",
    },
    {
      title: "EPC Solutions",
      description:
        "End-To-End Engineering, Procurement, And Construction Services For Industrial Automation, Oil & Gas Systems, Boiler Automation, And Complete Plant Solutions.",
      image: "/images/epc.jpg",
      link: "/products#epc",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/automation-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center mb-6">Product Solutions</h2>
        <p className="text-center max-w-4xl mx-auto mb-12 text-lg">
          Mavericks Provides End-To-End Product Solutions Including PLC/DCS Control Systems, Electrical Panels,
          Instrumentation, And Turnkey Engineering Components - All Tailored To Industrial Demands Across Oil & Gas,
          Pharma, Power, And More.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                <Link href={product.link}>
                  <Button
                    variant="outline"
                    className="border-[#e52222] text-[#e52222] hover:bg-[#e52222] hover:text-white"
                  >
                    Learn More
                    <svg
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
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
