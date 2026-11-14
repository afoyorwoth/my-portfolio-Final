import { useParams, Link } from "react-router-dom";

const projectDetails = {
  vowmemories: {
    title: "VowMemories",
    category: "Wedding Guestbook",
    status: "Completed",
    description:
      "A digital wedding guestbook that allows guests to submit wedding wishes through a website. An MC interface displays approved messages during the celebration.",
    problem:
      "At busy weddings, couples may not get the opportunity to meet every guest or collect personal messages in a traditional guestbook.",
    solution:
      "VowMemories provides an online space where guests can submit wishes, while an MC can review and approve messages for presentation during the celebration.",
    features: [
      "Guest wish submission form",
      "Message preview before submission",
      "MC interface for reviewing and approving wishes",
      "Slideshow presentation of approved messages",
      "Pause, resume and navigation controls",
      "Local storage for saving submitted wishes",
    ],
    role:
      "Designed and developed the frontend, built the guest submission experience and created the MC presentation interface.",
    learning:
      "Developed practical experience with React components, state management, local storage, conditional rendering and responsive design.",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
  },

  nurtiva: {
    title: "Nurtiva",
    category: "Mother and Baby Care",
    status: "Planned",
    description:
      "A planned platform focused on providing helpful information and resources for mothers and babies.",
    problem:
      "Finding useful and organised mother and baby care information can be challenging for people looking for accessible resources.",
    solution:
      "The concept is to create a user-friendly platform that brings relevant information and resources together in one place.",
    features: [
      "Organised mother and baby care resources",
      "Simple and accessible information layout",
      "Responsive browsing experience",
    ],
    role:
      "This is a planned project. Design and development are yet to begin.",
    learning:
      "The project will provide an opportunity to explore content organisation, accessible interfaces and responsive frontend development.",
    technologies: ["React", "Tailwind CSS"],
  },

  hometogether: {
    title: "HomeTogether",
    category: "Household Management",
    status: "Planned",
    description:
      "A planned household management system designed to help people organise home tasks and everyday responsibilities.",
    problem:
      "Managing shared household tasks and everyday responsibilities can become difficult without a clear way to organise them.",
    solution:
      "The concept is to develop a simple platform that helps households organise tasks and coordinate shared responsibilities.",
    features: [
      "Household task organisation",
      "Shared responsibility planning",
      "Simple task management interface",
    ],
    role:
      "This is a planned project. Design and development are yet to begin.",
    learning:
      "The project will provide an opportunity to explore interactive interfaces, task organisation and practical application design.",
    technologies: ["React", "Tailwind CSS"],
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-heading text-4xl text-brand-burgundy dark:text-[#E8B7C8] mb-4">
          Project Not Found
        </h1>
        <Link
          to="/projects"
          className="text-brand-burgundy dark:text-[#E8B7C8] underline"
        >
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
          className="inline-flex items-center gap-2 text-brand-burgundy dark:text-[#E8B7C8] hover:text-brand-gold transition"
        >
          <span aria-hidden="true"></span>
          Back to Projects
        </Link>

        <div className="mt-12 mb-12">
          <p className="text-brand-gold dark:text-[#D6B77E] uppercase tracking-widest text-sm font-semibold mb-4">
            {project.category}
          </p>

          <h1 className="font-heading text-4xl md:text-6xl text-brand-burgundy dark:text-[#E8B7C8] mb-6">
            {project.title}
          </h1>

          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              project.status === "Completed"
                ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="bg-white dark:bg-[#292426] border border-gray-200 dark:border-gray-700 rounded-2xl p-7 md:p-9 mb-10">
          <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-4">
            Project Overview
          </h2>
          <p className="text-brand-muted dark:text-[#E0D6D2] text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-10">

          <div>
            <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-4">
              The Problem
            </h2>
            <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-4">
              The Solution
            </h2>
            <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-brand-muted dark:text-[#E0D6D2] leading-relaxed"
                >
                  <span className="text-brand-gold font-bold" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-4">
              My Role
            </h2>
            <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed">
              {project.role}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-4">
              What I Learned
            </h2>
            <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed">
              {project.learning}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-5">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="bg-brand-cream dark:bg-[#40383B] text-brand-dark dark:text-[#F5EDE8] px-4 py-2 rounded-full text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-brand-burgundy text-white px-6 py-3 rounded-full hover:bg-brand-gold transition"
          >
            Explore More Projects
            <span aria-hidden="true"></span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;
