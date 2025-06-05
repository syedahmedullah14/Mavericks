export default function ContactHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/contact-bg.png')",
        minHeight: "50vh",
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Contact</h1>
        <h1 className="text-5xl md:text-6xl font-bold">Us</h1>
      </div>
    </section>
  )
}
