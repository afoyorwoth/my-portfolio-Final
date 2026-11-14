import { useParams, Link } from "react-router-dom";

const projectDetails = {
  vowmemories: {
    title: "VowMemories",
    category: "Wedding Guestbook",
    status: "Completed",
    description:
      "A digital wedding guestbook that allows guests to submit wedding wishes through a website. An MC interface displays approved messages during the celebration.",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
  },

  nurtiva: {
    title: "Nurtiva",
    category: "Mother and Baby Care",
    status: "Planned",
    description:
      "A planned platform focused on providing helpful information and resources for mothers and babies.",
    technologies: ["React", "Tailwind CSS"],
  },

  hometogether: {
    title: "HomeTogether",
    category: "Household Management",
    status: "Planned",
    description:
      "A planned household management system designed to help people organise home tasks and everyday responsibilities.",
    technologies: ["React", "Tailwind CSS"],
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-heading text-4xl text-brand-burgundy mb-4">
          Project Not Found
        </h1>
        <Link to="/projects" className="text-brand-burgundy underline">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="text-brand-burgundy hover:text-brand-gold"
        >
          Back to Projects
        </Link>

        <p className="text-brand-gold uppercase tracking-widest text-sm font-semibold mt-10 mb-4">
          {project.category}
        </p>

        <h1 className="font-heading text-5xl text-brand-burgundy mb-5">
          {project.title}
        </h1>

        <span className="inline-block bg-white px-4 py-2 rounded-full text-sm mb-8">
          {project.status}
        </span>

        <p className="text-brand-muted text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        <h2 className="font-heading text-2xl text-brand-dark mb-4">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="bg-white px-4 py-2 rounded-full text-brand-dark"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
