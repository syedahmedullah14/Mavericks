import Image from "next/image"

export default function InstrumentationSection() {
  const instrumentTypes = [
    {
      name: "Pressure Transmitters",
      image: "/images/products/pressure-transmitters.jpg",
    },
    {
      name: "Temperature Transmitters",
      image: "/images/products/temperature-transmitters.jpg",
    },
    {
      name: "Flow Transmitters",
      image: "/images/products/flow-transmitters.jpg",
    },
    {
      name: "Level Transmitters",
      image: "/images/products/level-transmitters.jpg",
    },
    {
      name: "Gauges",
      image: "/images/products/gauges.jpg",
    },
    {
      name: "Analyzers",
      image: "/images/products/analyzers.jpg",
    },
  ]

  return (
    <section id="instrumentation" className="py-16 bg-white relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/instrumentation-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-4">Instrumentation</h2>
        <p className="mb-8 text-lg">
          We offer comprehensive instrumentation solutions including sensors, transmitters, and analyzers for measuring
          pressure, flow, temperature, and level. Every instrument is tested and commissioned to ensure accuracy,
          safety, and system integration.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instrumentTypes.map((instrument, index) => (
            <div key={index} className="relative">
              <div className="relative h-48 mb-2 overflow-hidden">
                <Image
                  src={instrument.image || "/placeholder.svg"}
                  alt={instrument.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white p-3 font-medium">{instrument.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
