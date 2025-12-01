import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DoctorCard from "@/components/doctor-card"

const doctors = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Dermatologist",
    specialty: "General & Aesthetic Dermatology",
    experience: "20+ years",
    bio: "Board-certified dermatologist with expertise in comprehensive skin health and cosmetic procedures.",
    credentials: [
      "MD from Stanford Medical School",
      "Board Certified - American Academy of Dermatology",
      "Fellowship in Aesthetic Dermatology",
    ],
    image: "/female-dermatologist-portrait.png",
  },
  {
    name: "Dr. Michael Roberts",
    title: "Dermatologist",
    specialty: "Acne & Burn Treatment",
    experience: "15+ years",
    bio: "Specialized in treating acne and managing burn wounds with the latest medical technologies.",
    credentials: ["MD from Johns Hopkins", "Board Certified - American Academy of Dermatology", "Burn Care Specialist"],
    image: "/professional-male-dermatologist-portrait.jpg",
  },
  {
    name: "Dr. Lisa Wong",
    title: "Dermatologist",
    specialty: "Aesthetic & Laser Procedures",
    experience: "12+ years",
    bio: "Expert in non-invasive aesthetic procedures and laser treatments for skin rejuvenation.",
    credentials: [
      "MD from University of California",
      "Board Certified - American Academy of Dermatology",
      "Laser Surgery Specialist",
    ],
    image: "/professional-female-dermatologist-aesthetic-specia.jpg",
  },
]

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Doctors</h1>
          <p className="text-xl text-foreground/70">Meet our team of board-certified dermatologists</p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <DoctorCard key={idx} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
