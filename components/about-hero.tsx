export default function AboutHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-48 min-h-[60vh] flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/about-bg.png')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
          <span>We are</span>
          <img src="/logo-white2.png" alt="Mavericks Logo" className="h-16 md:h-24 lg:h-32" />
        </h1>
      </div>
    </section>
  )
}
