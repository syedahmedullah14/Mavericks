export default function ProductsHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed text-white py-40 md:py-60 min-h-[70vh] flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/products-overview-bg.jpg')",
        backgroundPosition: "center 30%"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
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
