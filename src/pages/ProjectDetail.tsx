import { Link, useNavigate, useParams } from "react-router-dom";
import { Github, ArrowUpRight, ChevronLeft } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-lime-300 hover:text-lime-200">
            <ChevronLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black text-white font-poppins">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/#projects');
            }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </button>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 transition-colors"
              >
                Live <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-4">MY WORK</p>
        <h1 className="text-[30px] md:text-[42px] font-[500] leading-[36px] md:leading-[48px]">{project.title}</h1>

        <div className="mt-8 bg-white/[.03] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <div className="w-full flex items-center justify-center p-2 md:p-4">
            <div className="w-full max-w-4xl rounded-xl overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-medium text-white/90">Overview</h2>
            <ul className="text-white/70 leading-relaxed list-disc pl-5 space-y-1">
  {project.description.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>

          </div>
          <aside className="space-y-6">
            <div>
              <p className="text-white/50 text-sm">DATE</p>
              <p className="text-white/90">{project.date}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">COMPANY</p>
              <p className="text-white/90">{project.company}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-3">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(133,238,0)] text-black font-semibold hover:bg-lime-300 transition-colors duration-300"
            >
              View Live <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors duration-300"
            >
              <Github className="w-5 h-5" /> View on GitHub
            </a>
          )}
        </div>

        <div className="mt-12">
          <button
            onClick={() => {
              navigate('/#projects');
            }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" /> Back to Projects section
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;


