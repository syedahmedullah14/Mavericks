import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-[#e52222] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <p className="font-semibold text-lg">+971 50 575 2776</p>
          </div>

          <div className="text-center">
            <div className="bg-[#e52222] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <p className="font-semibold text-lg">info@mavericks.com</p>
          </div>

          <div className="text-center">
            <div className="bg-[#e52222] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="font-semibold text-lg">
              <p>Tamani Arts Building,</p>
              <p>Office No 1124,</p>
              <p>Business Bay, Dubai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
