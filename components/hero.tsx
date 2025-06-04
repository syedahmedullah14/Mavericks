import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="hero-section relative bg-cover bg-center text-white py-20 md:py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Industries With Automation & Control</h1>
          <p className="text-lg md:text-xl mb-8">
            Mavericks Is A Trusted Name In Industrial Automation, Electrical Solutions, And Turnkey Execution, Serving
            Global Sectors Like Oil & Gas, Power, Pharma, And More.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button className="bg-[#e52222] text-white hover:bg-[#c41c1c]">OUR PRODUCTS</Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a2b5c]">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
