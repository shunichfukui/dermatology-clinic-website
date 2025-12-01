import { Check } from "lucide-react"

const reasons = [
  "Board-certified dermatologists with extensive experience",
  "State-of-the-art equipment and modern facilities",
  "Personalized treatment plans for each patient",
  "Gentle approach suitable for all ages (20-60+)",
  "Comfortable and welcoming clinic environment",
  "Flexible appointment scheduling",
]

export default function WhyUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/dermatologist-performing-skin-examination-with-mod.jpg" alt="Our clinic" className="rounded-2xl w-full object-cover" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Us</h2>
            <p className="text-lg text-foreground/70 mb-8">
              We combine medical expertise with a patient-first approach to deliver exceptional dermatological care.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start animate-slide-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                      <Check size={16} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
