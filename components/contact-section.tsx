import ContactForm from "./contact-form"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="relative">
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/contact-bg.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-center max-w-2xl mb-8">
            Have A Project Or Product Requirement? Reach Out To Our Team For Expert Assistance, Custom Solutions, And
            Reliable Support.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#e52222] rounded-full p-4 mb-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p>+971 50 575 2776</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#e52222] rounded-full p-4 mb-3">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <p>info@mavericks.com</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#e52222] rounded-full p-4 mb-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p>Tamani Arts Building,</p>
                <p>Office No 124, Business Bay, Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Write To Us</h3>
            <p className="text-center mb-8">
              Have Questions Or Looking For A Tailored Solution? Reach Out To Our Team Today.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
