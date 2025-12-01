import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">Book Your Appointment</h1>
          <p className="text-xl text-foreground/70">Schedule a consultation with one of our expert dermatologists</p>
        </div>
      </section>

      {/* Booking */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
