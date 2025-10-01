import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const education = [
    {
      title: "Higher Technician in Web Application Development",
      institution: "IES Arquitecto Ventura Rodríguez",
      period: "2022 - 2024",
      type: "Official Education",
      icon: GraduationCap,
    },
  ]

  const certifications = [
    {
      title: "Java Spring Security 6: JWT, OAUTH2",
      platform: "Udemy",
      icon: Award,
    },
    {
      title: "15 Days of SQL: Complete SQL Masterclass",
      platform: "Udemy",
      icon: Award,
    },
    {
      title: "Python TOTAL: Advanced Programmer in 16 days",
      platform: "Udemy",
      icon: Award,
    },
    {
      title: "FastAPI: Complete course 2025",
      platform: "Udemy",
      icon: Award,
    },
  ]

  const languages = [
    {
      language: "Spanish",
      level: "Native",
    },
    {
      language: "English",
      level: "B2 - Cambridge",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">Education</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-orange-500" />
              Official Education
            </h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-orange-500/10 p-2 rounded-lg">
                    <edu.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-100 mb-1">{edu.title}</h4>
                    <p className="text-orange-500 font-semibold">{edu.institution}</p>
                    <p className="text-sm text-slate-400 mt-1">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-green-500" />
              Languages
            </h3>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-100 font-semibold">{lang.language}</span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-orange-500" />
            Courses & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 p-4 hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/10 p-2 rounded-lg">
                    <cert.icon className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-slate-400">{cert.platform}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
