export default function ContactHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/contact-hero-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
        <h1 className="text-5xl md:text-6xl font-bold">Us</h1>
      </div>
    </section>
  )
}
