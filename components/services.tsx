import Link from "next/link"
import { Zap, Flame, Sparkles, Package } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "General Dermatology",
    description: "Comprehensive skin health assessment and treatment for common skin conditions.",
    link: "/services#general",
  },
  {
    icon: Zap,
    title: "Acne Treatment",
    description: "Advanced acne management with personalized treatment plans for all skin types.",
    link: "/services#acne",
  },
  {
    icon: Flame,
    title: "Burn & Wound Care",
    description: "Professional treatment and scar management for burns and wounds.",
    link: "/services#burns",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Dermatology",
    description: "Non-invasive procedures to enhance skin appearance and reduce signs of aging.",
    link: "/services#aesthetic",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Expert dermatological care tailored to your unique skin needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link key={idx} href={service.link}>
                <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
