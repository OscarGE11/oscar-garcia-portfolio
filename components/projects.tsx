"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Vera Croma",
      description:
        "A color palette generator tool built with Angular. Features an intuitive interface for creating and exploring color combinations with real-time preview.",
      image: "/images/veracroma.png",
      liveUrl: "https://vera-croma.vercel.app/home",
      technologies: ["Angular", "TypeScript", "CSS3"],
      featured: true,
    },
    {
      title: "React Todo App",
      description:
        "A task management application built with React. Clean and modern interface for creating, editing, and organizing your daily tasks efficiently.",
      image: "/images/reactodoapp.png",
      liveUrl: "https://react-todo-app-seven-flax.vercel.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">Featured Projects</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 overflow-hidden hover:border-orange-500/50 transition-all group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-orange-600 text-white hover:bg-orange-700 flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
