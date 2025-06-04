export default function AboutHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about-hero.jpg')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">We Are Mavericks</h1>
      </div>
    </section>
  )
}
