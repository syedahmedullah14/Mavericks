import Image from "next/image"

export default function PumpsSection() {
  const pumpTypes = [
    {
      name: "Cryogenic Pumps",
      image: "/cryogenic-pump.png",
    },
    {
      name: "Submersible Pumps",
      image: "/submersible-pumps.jpg",
    },
    {
      name: "Inline And Split Pumps",
      image: "/inline-pump.jpg",
    },
  ]

  return (
    <section id="pumps" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Pumps</h2>
        <p className="mb-8">
          Our pump solutions cover a wide range of industrial needs, from fluid transfer to process-specific
          applications. Designed for consistent output and long service life, our pumps are reliable even in demanding
          and high-load environments.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pumpTypes.map((pump, index) => (
            <div key={index} className="relative">
              <div className="relative h-64 mb-2 overflow-hidden">
                <Image
                  src={pump.image || "/placeholder.svg"}
                  alt={pump.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white p-4 font-medium">{pump.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
