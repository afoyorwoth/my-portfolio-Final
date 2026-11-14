function About() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Get to know me
        </p>

        <h1 className="font-heading text-4xl md:text-6xl text-brand-burgundy mb-8">
          About Me
        </h1>

        <p className="text-brand-muted text-lg leading-relaxed mb-6">
          I am an aspiring Frontend Developer with an interest in
          creating clean, responsive and user-friendly websites.
          I enjoy learning how technology can solve everyday
          problems through thoughtful design and functionality.
        </p>

        <p className="text-brand-muted text-lg leading-relaxed mb-10">
          My journey involves building projects, exploring modern
          frontend tools and improving my skills through practical
          experience. I am currently developing my knowledge of
          React, Tailwind CSS and responsive web design.
        </p>

        <div className="border-l-4 border-brand-gold pl-6">
          <h2 className="font-heading text-2xl text-brand-dark mb-3">
            My Approach
          </h2>
          <p className="text-brand-muted leading-relaxed">
            I believe a good website should be visually appealing,
            easy to use, accessible and useful to the people it serves.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
