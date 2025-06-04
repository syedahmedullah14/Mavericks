import Image from "next/image"

export default function AboutContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* First section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/about-content-1.jpg"
                alt="Industrial valve manufacturing facility"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg leading-relaxed mb-8">
              Mavericks is a leading engineering solutions provider specializing in industrial automation, electrical
              systems, and process instrumentation. With a strong foundation in engineering excellence, we cater to a
              wide range of industries including Oil & Gas, Chemical, Sugar, Pharma, Rubber, and Infrastructure.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, we've built a reputation for delivering reliable, scalable, and customized solutions
              backed by deep technical expertise and a highly skilled team of professionals.
            </p>
          </div>
        </div>

        {/* Second section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed">
              Our offerings include PLC and DCS-based control systems for industries like sugar, power, chemical,
              pharma, and rubber — covering design, engineering, manufacturing, erection, and commissioning. We also
              provide electrical systems such as PCC, MCC, and VFD panels, and supply switchgear and VFDs. In process
              instrumentation, we handle the supply, testing, and commissioning of instruments for pressure,
              temperature, level, and flow, along with analyzers.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Additionally, we support turnkey projects and offer sourcing and supply of a wide range of components
              including valves, pumps, DG sets (from 3kVA to 4500kVA), panels, DCS/PLC systems, measurement devices,
              and analyzers. Our capabilities also extend to EPC solutions and automation services for boiler systems,
              rubber plants, and sugar/ethanol plants.
            </p>
          </div>

          <div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/about-content2.png"
                alt="Engineer operating industrial control systems"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
