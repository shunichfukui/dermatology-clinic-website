import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

const priceCategories = [
  {
    category: "General Dermatology",
    items: [
      { service: "Initial Consultation", price: "$150" },
      { service: "Follow-up Appointment", price: "$100" },
      { service: "Skin Cancer Screening", price: "$200" },
      { service: "Allergy Testing", price: "$180" },
    ],
  },
  {
    category: "Acne Treatment",
    items: [
      { service: "Acne Assessment & Plan", price: "$150" },
      { service: "Chemical Peel", price: "$200-300" },
      { service: "Laser Acne Therapy", price: "$300-500" },
      { service: "Scar Treatment Session", price: "$250-400" },
    ],
  },
  {
    category: "Burn & Wound Care",
    items: [
      { service: "Burn Assessment", price: "$200" },
      { service: "Wound Care Visit", price: "$150" },
      { service: "Scar Revision Consultation", price: "$200" },
      { service: "Advanced Scar Treatment", price: "$400-600" },
    ],
  },
  {
    category: "Aesthetic Dermatology",
    items: [
      { service: "Microdermabrasion", price: "$150-250" },
      { service: "Chemical Peel", price: "$200-350" },
      { service: "Laser Skin Resurfacing", price: "$400-800" },
      { service: "Anti-Aging Package (3 sessions)", price: "$600-900" },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">Pricing & Fees</h1>
          <p className="text-xl text-foreground/70">Transparent pricing for all our services</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {priceCategories.map((category, idx) => (
              <div
                key={idx}
                className="border border-border rounded-2xl p-8 bg-card hover:border-primary/30 transition-colors"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0 last:pb-0"
                    >
                      <span className="text-foreground/80">{item.service}</span>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="max-w-3xl mx-auto bg-secondary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Important Information</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">Prices are subject to change without notice</span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">Insurance coverage varies - contact us for details</span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">Package discounts available for multiple treatments</span>
              </li>
              <li className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">Payment plans available upon request</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
