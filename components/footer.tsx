import Link from "next/link"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center">
                <span className="font-bold">D</span>
              </div>
              <span className="font-semibold">Dermatology Clinic</span>
            </div>
            <p className="text-background/70 text-sm">Providing expert dermatological care for all ages since 2004.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-background transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-background/70 hover:text-background transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/70">(555) 123-4567</span>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/70">contact@dermaclinic.com</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/70">123 Medical Plaza, Healthcare City</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 flex gap-2 items-center">
              <Clock size={18} /> Hours
            </h4>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; {currentYear} Dermatology Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
