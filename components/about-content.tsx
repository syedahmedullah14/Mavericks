import Image from "next/image"

export default function AboutContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="relative h-80 overflow-hidden rounded-lg">
                <Image
                  src="/images/about-content-1.jpg"
                  alt="Industrial valve manufacturing facility"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/about-content-2.jpg"
                  alt="Engineer operating industrial control systems"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-6 text-lg leading-relaxed">
              Mavericks is a leading engineering solutions provider specializing in industrial automation, electrical
              systems, and process instrumentation. With a strong foundation in engineering excellence, we cater to a
              wide range of industries including Oil & Gas, Chemical, Sugar, Pharma, Rubber, and Infrastructure.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Over the years, we've built a reputation for delivering reliable, scalable, and customized solutions
              backed by deep technical expertise and a highly skilled team of professionals.
            </p>
            <p className="text-lg leading-relaxed">
              Our offerings include PLC and DCS-based control systems for industries like sugar, power, chemical,
              pharma, and rubber — covering design, engineering, manufacturing, erection, and commissioning. We also
              provide electrical systems such as PCC, MCC, and VFD panels, and supply switchgear and VFDs. In process
              instrumentation, we handle the supply, testing, and commissioning of instruments for pressure,
              temperature, level, and flow, along with analyzers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
