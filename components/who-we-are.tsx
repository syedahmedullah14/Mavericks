import Image from "next/image"

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-[#e52222]">Mavericks</span> Is A Trusted Engineering Solutions Provider
            </h3>
            <p className="mb-4">
              With Over 30 Years Of Experience In Industrial Automation, Electrical Systems, And Process
              Instrumentation. We Serve Key Sectors Like Oil & Gas, Chemical, Pharma, Sugar, And Infrastructure,
              Delivering Turnkey Solutions Backed By Technical Expertise And A Skilled Team.
            </p>
            <p>
              Our Offerings Include PLC/DCS Control Systems, Electrical Panels, Instrumentation, EPC Services, And
              Component Sourcing — All Tailored For Reliability, Scalability, And Performance.
            </p>
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/industrial-facility.jpg"
              alt="Industrial Facility"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
