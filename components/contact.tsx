"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin, Car, Clock } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "geoscar1100@gmail.com",
      href: "mailto:geoscar1100@gmail.com",
      color: "text-orange-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+34 695 653 041",
      href: "tel:+34695653041",
      color: "text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "óscargarcíaesp",
      href: "https://linkedin.com/in/óscargarcíaesp",
      color: "text-orange-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "OscarGE11",
      href: "https://github.com/OscarGE11",
      color: "text-green-500",
    },
  ]

  const availability = [
    { icon: Car, text: "Driver's license and own vehicle" },
    { icon: Clock, text: "Full availability" },
    { icon: MapPin, text: "Available for remote or on-site work" },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">Contact</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Talk</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I'm available for new opportunities and interesting projects. If you're looking for a fullstack developer
              committed to quality and continuous learning, feel free to reach out.
            </p>

            <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
              <h4 className="font-semibold text-slate-100 mb-4">Availability</h4>
              <div className="space-y-3">
                {availability.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center gap-3 text-slate-400">
                      <Icon className="h-5 w-5 text-green-500" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <Card
                    key={index}
                    className="bg-slate-900 border-slate-800 p-4 hover:border-orange-500/50 transition-colors"
                  >
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={`${contact.color === "text-orange-500" ? "bg-orange-500/10" : "bg-green-500/10"} p-3 rounded-lg`}
                      >
                        <Icon className={`h-5 w-5 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400">{contact.label}</p>
                        <p className="text-slate-100 font-semibold group-hover:text-orange-500 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>


        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>© 2025 Óscar García</p>
        </div>
      </div>
    </section>
  )
}
