import Image from "next/image"

export default function Partners() {
  const partnerCategories = [
    {
      title: "Valves & Flow Technology",
      partners: [
        {
          name: "Valvero Control Technology",
          logo: "/images/partners/valvero.png",
          description:
            "Specializes in custom valves for critical services like bromine, oxygen, cryogenic, and metal-seated applications.",
        },
        {
          name: "Swims Technology (Formerly BDK Valves)",
          logo: "/images/partners/swims-bdk.png",
          description:
            "A part of Trillium Flow Technologies, Swims provides industrial valve solutions for precise flow and temperature control.",
        },
        {
          name: "Pneucon Valves Pvt. Ltd",
          logo: "/images/partners/pneucon.png",
          description:
            "Expert in designing and manufacturing globe control valves and accessories for various industrial processes.",
        },
        {
          name: "Advance Valves Pvt. Ltd.",
          logo: "/images/partners/advance-valves.png",
          description:
            "Renowned for designing, developing, and exporting a wide range of control valves used in modern process industries.",
        },
        {
          name: "Dembla Valves Ltd.",
          logo: "/images/partners/dembla.png",
          description:
            "Innovator in dual plate check valves, triple eccentric butterfly valves, and pre-insulated valve systems for global industries.",
        },
        {
          name: "Aqua Valves Pvt. Ltd.",
          logo: "/images/partners/aqua-valves.png",
          description: "Manufacturer of industrial-grade valves for efficient flow control in critical sectors.",
        },
      ],
    },
    {
      title: "Heat Exchangers & Cooling Solutions",
      partners: [
        {
          name: "JNK India Pvt. Ltd.",
          logo: "/images/partners/jnk.png",
          description:
            "A leading provider of process-fired heaters, incinerators, and heating equipment for industrial applications.",
        },
        {
          name: "Tema India Pvt. Ltd.",
          logo: "/images/partners/tema.png",
          description:
            "Specializes in designing and fabricating high-pressure heat exchangers and process equipment for the energy sector.",
        },
        {
          name: "Fab-Tech Projects & Engineers Ltd.",
          logo: "/images/partners/fabtech.png",
          description:
            "Delivers EPCC and LSTK project solutions across Oil & Gas, Nuclear, and Chemical industries, with expertise in mounded bullets.",
        },
        {
          name: "Paharpur Cooling Towers",
          logo: "/images/partners/paharpur.png",
          description:
            "Global leader in cooling towers, serving over 50% of India's power generation needs with high-performance systems.",
        },
        {
          name: "BGR Group",
          logo: "/images/partners/bgr.png",
          description:
            "Manufactures air fin coolers and process cooling solutions used in refining and petrochemical sectors.",
        },
      ],
    },
    {
      title: "Pumps, Power & Transformers",
      partners: [
        {
          name: "Sterling Generators Pvt. Ltd.",
          logo: "/images/partners/sterling.png",
          description: "Supplier of reliable and efficient gensets for industrial and commercial power backup needs.",
        },
        {
          name: "Kirloskar Oil Engines Ltd.",
          logo: "/images/partners/kirloskar-oil.png",
          description:
            "One of India's top manufacturers of diesel engines and generator sets for heavy-duty applications.",
        },
        {
          name: "Kirloskar Brothers Ltd.",
          logo: "/images/partners/kirloskar-brothers.png",
          description: "Pioneer in pump manufacturing and fluid management systems for multiple engineering sectors.",
        },
        {
          name: "Telawne Power Equipments Pvt. Ltd.",
          logo: "/images/partners/telawne.png",
          description:
            "Produces oil-immersed and dry-type transformers, with capacities up to 50MVA and 132kV, for power and distribution.",
        },
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div
        className="relative py-16 mb-12"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/partners-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="section-heading">Partners & Associations</h2>
          <p className="max-w-3xl mx-auto text-lg">
            We Work Closely With Top-Tier OEMs And Manufacturers To Provide The Most Reliable And Efficient Products.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {partnerCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              {category.title.split(" & ").map((part, i) => (
                <span key={i}>
                  {i > 0 && " & "}
                  <span className={i === 1 ? "text-[#e52222]" : "text-[#0a2b5c]"}>{part}</span>
                </span>
              ))}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.partners.map((partner, partnerIndex) => (
                <div
                  key={partnerIndex}
                  className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className="h-16 relative mb-3 flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2 text-xs text-gray-800 leading-tight">{partner.name}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Partner Logos Showcase */}
      <div className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-8 text-[#0a2b5c]">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "/images/partners/valvero.png",
              "/images/partners/sterling.png",
              "/images/partners/pneucon.png",
              "/images/partners/tema.png",
              "/images/partners/kirloskar-oil.png",
              "/images/partners/fabtech.png",
              "/images/partners/jnk.png",
              "/images/partners/paharpur.png",
            ].map((logo, index) => (
              <div key={index} className="h-12 w-32 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={logo || "/placeholder.svg"} alt="Partner Logo" fill style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
