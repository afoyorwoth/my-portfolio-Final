const projects = [
  {
    id: "vowmemories",
    title: "VowMemories",
    category: "Wedding Guestbook",
    status: "Completed",
    description:
      "A digital wedding guestbook that allows guests to send wishes and gives the MC an interface to display approved messages.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    id: "nurtiva",
    title: "Nurtiva",
    category: "Mother and Baby Care",
    status: "Planned",
    description:
      "A concept for a nurturing platform designed to provide helpful information and resources for mothers and babies.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: "hometogether",
    title: "HomeTogether",
    category: "Household Management",
    status: "Planned",
    description:
      "A concept for a household management system to help people organise tasks, responsibilities and everyday home activities.",
    technologies: ["React", "Tailwind CSS"],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="bg-white dark:bg-[#292426] border border-gray-100 dark:border-gray-700 rounded-2xl p-7 shadow-sm hover:shadow-lg transition">
      <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
        {project.category}
      </p>

      <h2 className="font-heading text-2xl text-brand-burgundy dark:text-[#E8B7C8] mb-3">
        {project.title}
      </h2>

      <span className="inline-block bg-brand-cream dark:bg-[#40383B] text-brand-dark dark:text-[#F5EDE8] text-xs px-3 py-1 rounded-full mb-4">
        {project.status}
      </span>

      <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="text-xs bg-gray-100 dark:bg-[#40383B] text-brand-dark dark:text-[#F5EDE8] px-3 py-2 rounded-full"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={`/projects/${project.id}`}
        className="text-brand-burgundy dark:text-[#E8B7C8] font-semibold hover:text-brand-gold transition"
      >
        View Project
      </a>
    </article>
  );
}

function Projects() {
  return (
   
<section className="min-h-screen px-6 md:px-16 py-20">
  <div className="max-w-6xl mx-auto">
    
    <p className="font-sans text-[#98764D] uppercase tracking-wider text-sm font-semibold mb-4">
  What I've worked on
</p>

<h1 className="font-sans text-4xl md:text-6xl text-[#790D32] font-bold mb-6">
  My Projects
</h1>

<p className="font-sans text-gray-700 text-lg max-w-2xl mb-12 leading-relaxed">
  A collection of completed work and ideas I plan to develop
  as I continue growing my frontend development skills.
</p>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</section>

  );
}

export default Projects;
