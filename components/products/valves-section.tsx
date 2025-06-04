import Image from "next/image"

export default function ValvesSection() {
  const valveTypes = [
    {
      name: "Globe Control Valves",
      image: "/globe-control.jpg",
    },
    {
      name: "Ball Control Valves",
      image: "/ball-valves.png",
    },
    {
      name: "Cryogenic Valves",
      image: "/cryogenic-valve.jpg",
    },
    {
      name: "Gate Valves",
      image: "/gate-valve2.webp",
    },
    {
      name: "Butterfly Valves",
      image: "/butterfly-valves.png",
    },
    {
      name: "Non-Return Valves",
      image: "/non-return-valves.jpg",
    },
    {
      name: "Double Disc Conduit Gate Valves",
      image: "/gate-valves.jpg",
    },
  ]

  return (
    <section id="valves" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Valves</h2>
        <p className="mb-8">
          We supply industrial-grade valves for flow control across various applications — including pressure,
          temperature, and corrosive environments. Each valve is chosen for durability, precision, and compatibility
          with automation systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {valveTypes.map((valve, index) => (
            <div key={index} className="relative">
              <div className="relative h-48 mb-2 overflow-hidden">
                <Image
                  src={valve.image || "/placeholder.svg"}
                  alt={valve.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white p-3 font-medium">{valve.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
