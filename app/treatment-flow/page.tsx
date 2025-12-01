import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const steps = [
  {
    number: 1,
    title: "Booking & Consultation",
    description: "Schedule your appointment online or by phone. Our team will help find the perfect time for you.",
    details: ["Easy online booking", "Flexible scheduling", "Confirmation email/SMS"],
  },
  {
    number: 2,
    title: "Pre-Appointment Preparation",
    description: "We'll send you pre-visit instructions to prepare your skin for optimal results.",
    details: ["Skin preparation guide", "Medication review", "Health questionnaire"],
  },
  {
    number: 3,
    title: "Initial Assessment",
    description: "Our doctor will evaluate your skin condition and discuss your concerns and goals.",
    details: ["Comprehensive skin exam", "Medical history review", "Photo documentation"],
  },
  {
    number: 4,
    title: "Treatment Plan Design",
    description: "Based on the assessment, we'll create a personalized treatment plan tailored to your needs.",
    details: ["Customized recommendations", "Treatment options discussed", "Expected timeline"],
  },
  {
    number: 5,
    title: "Treatment Administration",
    description: "Our trained professionals will administer your selected treatment with utmost care.",
    details: ["Sterile environment", "Pain management available", "Professional technique"],
  },
  {
    number: 6,
    title: "Aftercare & Follow-up",
    description: "Receive detailed aftercare instructions and schedule follow-up appointments as needed.",
    details: ["Written care instructions", "Scheduled follow-up", "24/7 support access"],
  },
]

export default function TreatmentFlowPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">Treatment Flow</h1>
          <p className="text-xl text-foreground/70">How your dermatology journey works</p>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx}>
                <div className="flex gap-8 pb-12">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    {idx < steps.length - 1 && <div className="w-1 h-32 bg-primary/20" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex gap-2 text-sm text-foreground/60">
                          <span className="text-primary">•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
