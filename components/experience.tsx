import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "GAHN LGC",
      position: "Fullstack Developer",
      period: "November 2024 - Present",
      current: true,
      description: [
        "Development of complete web applications with Angular and Java Spring Boot",
        "Implementation of new features and improvements in existing projects",
        "Team collaboration for delivering quality solutions",
      ],
      technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    },
    {
      company: "Softtek S.A.",
      position: "Fullstack Developer",
      period: "April 2024 - June 2024",
      current: false,
      description: [
        "Optimization of processes and queries in Java for better application performance",
        "Development of new views and functionalities from the visual part with Angular to business logic in Java",
        "Resolution of production application errors",
        "Creation of reusable Angular components for the team",
        "Analysis and development of an internal application for project management",
      ],
      technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">Work Experience</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 p-6 hover:border-orange-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500/10 p-2 rounded-lg">
                    <Briefcase className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.position}</h3>
                    <p className="text-lg text-orange-500 font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                  {exp.current && (
                    <Badge variant="default" className="bg-green-600 text-white ml-2">
                      Current
                    </Badge>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 flex items-start gap-2">
                    <span className="text-green-500 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-slate-800 text-slate-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
