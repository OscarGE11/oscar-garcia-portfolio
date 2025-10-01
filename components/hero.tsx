"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-slate-950">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            <span className="text-slate-100">Óscar García</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-500 font-semibold">Fullstack Web Developer</h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            Specialized in <span className="text-green-500 font-semibold">Angular</span> and{" "}
            <span className="text-green-500 font-semibold">Java Spring Boot</span>. Building complete applications from
            backend to frontend.
          </p>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-orange-600 text-white hover:bg-orange-700"
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="border-orange-600 text-orange-500 hover:bg-orange-600/10 bg-transparent"
            >
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/OscarGE11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/oscar-garciaesp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:geoscar1100@gmail.com" className="text-slate-400 hover:text-orange-500 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-400 hover:text-orange-500 transition-colors animate-bounce"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
