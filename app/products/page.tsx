import ProductsHero from "@/components/products-hero"
import ValvesSection from "@/components/products/valves-section"
import PumpsSection from "@/components/products/pumps-section"
import InstrumentationSection from "@/components/products/instrumentation-section"
import PanelsSection from "@/components/products/panels-section"
import GeneratorsSection from "@/components/products/generators-section"

export default function Products() {
  return (
    <>
      <ProductsHero />
      <ValvesSection />
      <PumpsSection />
      <InstrumentationSection />
      <PanelsSection />
      <GeneratorsSection />
    </>
  )
}
