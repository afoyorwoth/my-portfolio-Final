
const projects = [
  {
    id: "vowmemories",
    title: "VowMemories",
    category: "Wedding Guestbook",
    status: "Completed",
    description:
      "A digital wedding guestbook that allows guests to share personal wishes through an online form, while the MC manages approved messages for display during the celebration.",
    focus: "Guest submissions, message moderation and presentation",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    id: "nurtiva",
    title: "Nurtiva",
    category: "Mother and Baby Care",
    status: "Planned",
    description:
      "A planned digital platform concept focused on making helpful mother and baby care information and resources easier to access.",
    focus: "Accessible information and resource organisation",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: "hometogether",
    title: "HomeTogether",
    category: "Household Management",
    status: "Planned",
    description:
      "A planned household management concept designed to help people organise home responsibilities, daily tasks and shared activities.",
    focus: "Task organisation and shared responsibilities",
    technologies: ["React", "Tailwind CSS"],
  },
];

function ProjectCard({ project }) {
  const isCompleted = project.status === "Completed";

  return (
    <article className="group flex flex-col bg-white dark:bg-[#292426] border border-gray-200 dark:border-gray-700 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="flex items-start justify-between gap-3 mb-5">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider">
          {project.category}
        </p>

        <span
          className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
            isCompleted
              ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
              : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h2 className="font-heading text-2xl text-brand-burgundy dark:text-[#E8B7C8] mb-4">
        {project.title}
      </h2>

      <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="mb-6">
        <p className="text-sm font-semibold text-brand-dark dark:text-[#F5EDE8] mb-2">
          Project focus
        </p>
        <p className="text-sm text-brand-muted dark:text-[#D5C9C5] leading-relaxed">
          {project.focus}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-7">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="text-xs bg-brand-cream dark:bg-[#40383B] text-brand-dark dark:text-[#F5EDE8] px-3 py-2 rounded-full"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-700">
        <a
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-brand-burgundy dark:text-[#E8B7C8] font-semibold group-hover:text-brand-gold transition"
        >
          View Project
          <span aria-hidden="true"></span>
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="font-sans text-[#98764D] dark:text-[#D6B77E] uppercase tracking-wider text-sm font-semibold mb-4">
          My Work and Ideas
        </p>

        <h1 className="font-heading text-4xl md:text-6xl text-brand-burgundy dark:text-[#E8B7C8] font-bold mb-6">
          Projects
        </h1>

        <p className="font-sans text-gray-700 dark:text-[#E0D6D2] text-lg max-w-2xl mb-12 leading-relaxed">
          Explore my completed work and concepts I plan to develop
          as I continue building my frontend development skills.
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
