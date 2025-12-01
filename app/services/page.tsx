import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceDetail from "@/components/service-detail"

const servicesData = [
  {
    id: "general",
    title: "General Dermatology",
    icon: "🔍",
    description: "Comprehensive assessment and treatment of common skin conditions",
    details: [
      "Skin health evaluation and diagnosis",
      "Treatment of eczema, psoriasis, and dermatitis",
      "Mole and skin lesion evaluation",
      "Skin cancer screening",
      "Prescription topical treatments",
    ],
    benefits: [
      "Early detection of skin conditions",
      "Personalized treatment plans",
      "Preventive care guidance",
      "Professional skin health advice",
    ],
  },
  {
    id: "acne",
    title: "Acne Treatment",
    icon: "⚡",
    description: "Advanced acne management for all skin types and ages",
    details: [
      "Acne severity assessment",
      "Topical and oral medication options",
      "Chemical peels",
      "Laser acne therapy",
      "Post-acne scar treatment",
    ],
    benefits: ["Clear, healthy skin", "Reduced breakouts", "Minimal side effects", "Long-lasting results"],
  },
  {
    id: "burns",
    title: "Burn & Wound Care",
    icon: "🔥",
    description: "Professional treatment and management of burns and wounds",
    details: [
      "Acute burn care and assessment",
      "Wound dressing and care",
      "Infection prevention",
      "Scar management and treatment",
      "Reconstructive consultation",
    ],
    benefits: ["Proper healing process", "Minimized scarring", "Pain management", "Expert wound care"],
  },
  {
    id: "aesthetic",
    title: "Aesthetic Dermatology",
    icon: "✨",
    description: "Non-invasive procedures to enhance skin appearance",
    details: [
      "Microdermabrasion",
      "Chemical peels",
      "Laser skin resurfacing",
      "Anti-aging treatments",
      "Skin brightening procedures",
    ],
    benefits: ["Improved skin texture", "Reduced fine lines", "Even skin tone", "Youthful appearance"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-foreground/70">Comprehensive dermatological solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service) => (
            <ServiceDetail key={service.id} {...service} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
