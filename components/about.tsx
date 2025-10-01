import { Code2, Rocket, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">About Me</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-lg text-slate-200 leading-relaxed">
              I'm a web developer specialized in <span className="text-orange-500 font-semibold">Angular</span> and{" "}
              <span className="text-orange-500 font-semibold">Java</span>. I currently work on complete projects, from
              backend to frontend.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I enjoy learning new technologies and optimizing application processes to improve user experience and
              utility.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500/10 p-2 rounded-lg">
                <Code2 className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">Fullstack Development</h3>
                <p className="text-sm text-slate-400">Experience in complete web application development</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-500/10 p-2 rounded-lg">
                <Rocket className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">Optimization</h3>
                <p className="text-sm text-slate-400">Continuous improvement of performance and user experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-500/10 p-2 rounded-lg">
                <Lightbulb className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">Continuous Learning</h3>
                <p className="text-sm text-slate-400">Always exploring new technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
