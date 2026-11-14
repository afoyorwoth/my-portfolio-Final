function Home() {
  return (
    <section className="min-h-[80vh] px-6 md:px-16 flex items-center">
      <div className="max-w-3xl">
        <p className="text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6">
          Welcome to my portfolio
        </p>

        <h1 className="font-heading text-5xl md:text-7xl text-brand-dark leading-tight mb-6">
          Hello, I'm a
          <span className="block text-brand-burgundy">
            Frontend Developer.
          </span>
        </h1>

        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mb-10">
          I build thoughtful, responsive and user-friendly web experiences.
          I enjoy turning ideas into functional websites using modern
          frontend technologies.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="bg-brand-burgundy text-white px-7 py-4 rounded-full hover:bg-brand-dark transition"
          >
            Explore My Work
          </a>

          <a
            href="/contact"
            className="border border-brand-burgundy text-brand-burgundy px-7 py-4 rounded-full hover:bg-brand-burgundy hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
