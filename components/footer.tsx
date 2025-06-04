import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0a2b5c] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/logo-white2.png" alt="Mavericks Logo" width={150} height={40} className="mb-4" />
            </div>
            <p className="text-sm mb-4">
              Mavericks Delivers Industrial Automation, Electrical And Instrumentation Solutions Tailored For Critical
              Sectors Like Oil & Gas, Pharma, And Power.
            </p>
            <p className="text-xs">©2025 Mavericks, All Right Reserved.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">MENU</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-gray-300">
                HOME
              </Link>
              <Link href="/about-us" className="text-sm hover:text-gray-300">
                ABOUT US
              </Link>
              <Link href="/products" className="text-sm hover:text-gray-300">
                PRODUCTS
              </Link>
              <Link href="/partners" className="text-sm hover:text-gray-300">
                PARTNERS
              </Link>
              <Link href="/contact-us" className="text-sm hover:text-gray-300">
                CONTACT US
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <p className="text-sm">PHONE: +971 50 575 2776</p>
              <p className="text-sm">EMAIL: info@mavericks.com</p>
              <p className="text-sm">ADDRESS:</p>
              <p className="text-sm">Tamani Arts Building, Office No 124, Business Bay, Dubai</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
