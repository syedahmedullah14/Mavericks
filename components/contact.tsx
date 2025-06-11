"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/contact-bg.png"
          alt="Contact Background"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl font-bold">Contact</h1>
          <h1 className="text-5xl font-bold">Us</h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#e52222] w-16 h-16 flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <p className="text-center">+971 50 575 2776</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#e52222] w-16 h-16 flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <p className="text-center">info@maverickseng.net</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#e52222] w-16 h-16 flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <p>Tamani Arts Building,</p>
              <p>Office No 1124,</p>
              <p>Business Bay, Dubai</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Write To Us</h2>
          <p className="text-center mb-8">Have Questions Or Looking For A Tailored Solution? Reach Out To Our Team Today.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">FIRST NAME :</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">LAST NAME :</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">EMAIL :</label>
                <input
                  type="email"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">PHONE NO :</label>
                <input
                  type="tel"
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">MESSAGE :</label>
              <textarea
                className="w-full p-2 bg-gray-200 rounded h-32"
              />
            </div>

            <div className="text-center">
              <button 
                type="submit"
                className="bg-[#e52222] text-white px-8 py-2 rounded"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 