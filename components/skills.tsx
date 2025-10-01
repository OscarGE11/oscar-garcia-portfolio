import { Card } from "@/components/ui/card"
import { Code, Server, Database, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: ["Angular 15+", "React", "JavaScript", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: ["Java Spring Boot", "Python FastAPI", "Spring Security", "JWT & OAuth2", "RESTful APIs"],
    },
    {
      title: "Database",
      icon: Database,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: ["MySQL", "PostgreSQL", "Advanced SQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: ["Git & GitHub", "Vercel", "Udemy Courses", "Agile/Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">Tech Stack</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.bgColor} p-3 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
