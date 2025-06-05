"use client"

import Image from "next/image"

export default function ProductsHero() {
  return (
    <section className="relative min-h-[70vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/products-overview-bg.jpg"
          alt="Products Overview Background"
          fill
          style={{ objectFit: "fill" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-40 md:py-60">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Solutions</h1>
          <p className="text-xl leading-relaxed">
            At Mavericks, we deliver high-performance, precision-engineered product solutions designed to meet the
            complex demands of modern industry. Our product categories cover a wide range of applications across
            automation, electrical systems, and instrumentation — all tailored to support sectors like Oil & Gas,
            Chemical, Pharma, Sugar, and Power. Built on decades of expertise, our offerings ensure seamless
            integration, operational efficiency, and long-term reliability in every project we support.
          </p>
        </div>
      </div>
    </section>
  )
}
