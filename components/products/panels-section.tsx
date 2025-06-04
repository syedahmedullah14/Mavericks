 import Image from "next/image"

export default function PanelsSection() {
  const panelTypes = [
    {
      name: "PLC Control Panels",
      image: "/plc-panels.jpg",
    },
    {
      name: "DCS Control Panels",
      image: "/dsc-panel.jpg",
    },
    {
      name: "MCC Panels",
      image: "/mcc-panels.webp",
    },
    {
      name: "PCC Panels",
      image: "/pcc-panels.jpg",
    },
    {
      name: "VDF Panels",
      image: "/vfd-panels.png",
    },
  ]

  return (
    <section id="panels" className="py-16 bg-gray-50 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/panels-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-4">Panels</h2>
        <p className="mb-8 text-lg">
          We design and manufacture high-quality Power Control Centers (PCC), Motor Control Centers (MCC), and VFD
          panels tailored for industrial power distribution and motor management. Our panels are built for reliability,
          operational safety, and seamless integration into automation systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {panelTypes.map((panel, index) => (
            <div key={index} className="relative">
              <div className="relative h-48 mb-2 overflow-hidden">
                <Image
                  src={panel.image || "/placeholder.svg"}
                  alt={panel.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white p-3 font-medium">{panel.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
