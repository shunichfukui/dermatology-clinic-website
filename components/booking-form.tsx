"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send to a backend
    console.log("Booking submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-secondary/30 border border-primary/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Booking Request Received!</h3>
        <p className="text-foreground/70">We'll contact you shortly to confirm your appointment.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-card border border-border rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Information</h3>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-3 text-foreground/40" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-foreground/40" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
            <div className="relative">
              <Phone size={18} className="absolute left-3 top-3 text-foreground/40" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 000-0000"
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Appointment Details</h3>

        <div className="space-y-4">
          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a service</option>
              <option value="general">General Dermatology</option>
              <option value="acne">Acne Treatment</option>
              <option value="burns">Burn & Wound Care</option>
              <option value="aesthetic">Aesthetic Dermatology</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-3 text-foreground/40" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
            <div className="relative">
              <Clock size={18} className="absolute left-3 top-3 text-foreground/40" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Additional Information (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional details about your condition or concerns..."
              rows={4}
              className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold text-lg"
      >
        Confirm Booking
      </button>

      <p className="text-sm text-foreground/60 text-center">
        We'll send you a confirmation email with all the details. You can modify or cancel your appointment up to 24
        hours before.
      </p>
    </form>
  )
}
