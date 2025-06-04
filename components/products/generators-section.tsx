import Image from "next/image"

export default function GeneratorsSection() {
  return (
    <section id="generators" className="py-16 bg-white relative">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('/images/generators-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-4">Generators</h2>
        <p className="mb-8 text-lg">
          We supply a complete range of diesel generator sets from 3kVA to 4500kVA, supporting both primary and backup
          power needs. Each unit is selected for efficiency, load handling, and suitability across various industrial
          environments.
        </p>

        <div className="relative h-80 overflow-hidden rounded-lg">
          <Image
            src="/images/products/diesel-generator.jpg"
            alt="Diesel Generator Sets (3kVA – 4500kVA)"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <h3 className="text-white p-6 text-xl font-medium">Diesel Generator Sets (3kVA – 4500kVA)</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
