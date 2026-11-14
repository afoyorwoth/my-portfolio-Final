const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React", "JavaScript", "CSS", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    title: "Tools and Technologies",
    skills: ["Vite", "Git", "GitHub", "React Router"],
  },
  {
    title: "Development Practices",
    skills: [
      "Reusable Components",
      "Form Validation",
      "Responsive Layouts",
      "Accessibility Basics",
    ],
  },
];

function About() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">

        <p className="text-brand-gold dark:text-[#D6B77E] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Get to know me
        </p>

        <h1 className="font-heading text-4xl md:text-6xl text-brand-burgundy dark:text-[#E8B7C8] mb-8">
          About Me
        </h1>

        <div className="max-w-4xl">
          <p className="text-brand-muted dark:text-[#E0D6D2] text-lg leading-relaxed mb-6">
            I am an aspiring Frontend Developer with an interest in
            creating clean, responsive and user-friendly websites.
            I enjoy learning how technology can solve everyday
            problems through thoughtful design and functionality.
          </p>

          <p className="text-brand-muted dark:text-[#E0D6D2] text-lg leading-relaxed mb-10">
            My journey involves building projects, exploring modern
            frontend tools and improving my skills through practical
            experience. I continue to develop my knowledge of React,
            JavaScript, Tailwind CSS and responsive web design.
          </p>
        </div>

        <div className="border-l-4 border-brand-gold pl-6 mb-16">
          <h2 className="font-heading text-2xl text-brand-dark dark:text-brand-lighttext mb-3">
            My Approach
          </h2>
          <p className="text-brand-muted dark:text-[#E0D6D2] leading-relaxed">
            I believe a good website should be visually appealing,
            easy to use, accessible and useful to the people it serves.
            I focus on creating experiences that combine thoughtful
            design with practical functionality.
          </p>
        </div>

        <div>
          <p className="text-brand-gold dark:text-[#D6B77E] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            What I work with
          </p>

          <h2 className="font-heading text-3xl md:text-4xl text-brand-burgundy dark:text-[#E8B7C8] mb-8">
            My Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="bg-white dark:bg-[#292426] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl text-brand-dark dark:text-brand-lighttext mb-5">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-brand-cream dark:bg-[#40383B] text-brand-dark dark:text-[#F5EDE8] px-3 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
