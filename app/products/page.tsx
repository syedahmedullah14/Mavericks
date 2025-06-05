import ProductsHero from "@/components/products-hero"
import ValvesSection from "@/components/products/valves-section"
import PumpsSection from "@/components/products/pumps-section"
import InstrumentationSection from "@/components/products/instrumentation-section"
import PanelsSection from "@/components/products/panels-section"
import GeneratorsSection from "@/components/products/generators-section"
import EPCSolutions from "@/components/products/epc-solutions"
import Image from "next/image"

export default function Products() {
  return (
    <div className="relative">
      <ProductsHero />
      
      {/* Background image sections */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/valves-bg.png"
            alt="Industrial background"
            fill
            className="object-cover "
          />
        </div>
        <ValvesSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/pumps-bg.png"
            alt="Industrial background"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <PumpsSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/instrumentation-bg.png"
            alt="Industrial background"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <InstrumentationSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/panels-bg.png"
            alt="Industrial background"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <PanelsSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/generators-bg.png"
            alt="Industrial background"
            fill
            className="object-cover "
          />
        </div>
        <GeneratorsSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/epc-bg.png"
            alt="Industrial background"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <EPCSolutions />
      </div>
    </div>
  )
}
