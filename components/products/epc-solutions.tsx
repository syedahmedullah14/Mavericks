import Image from "next/image"

export default function EPCSolutions() {
  const solutions = [
    {
      title: "Oil & Gas Automation",
      image: "/oil-gas.jpg",
      alt: "Oil and gas industrial automation setup"
    },
    {
      title: "Boiler Automation",
      image: "/boiler.jpg",
      alt: "Industrial boiler automation system"
    },
    {
      title: "Sugar/Ethanol Plant Automation",
      image: "/sugar.jpg",
      alt: "Sugar and ethanol plant automation"
    },
    {
      title: "Rubber Plant Automation",
      image: "/rubber.jpg",
      alt: "Rubber manufacturing plant automation"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">EPC Solutions</h2>
        <p className="mb-8">
          Mavericks offers end-to-end EPC (Engineering, Procurement, and Construction) services for automation
          driven industrial setups. From concept to commissioning, we manage every phase of the project with precision — ensuring
          timely delivery, technical accuracy, and full compliance with industry standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="relative">
              <div className="relative h-64 mb-2 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white p-4 font-medium">{solution.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 