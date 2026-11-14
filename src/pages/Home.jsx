import patriciaPhoto from "../assets/patricia.webp";

function Home() {
  return (
    <section className="min-h-[80vh] px-6 md:px-16 py-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-4 md:gap-6">

        <div className="max-w-3xl">
         <p className="text-[#80602F] uppercase tracking-[0.3em] text-sm font-semibold mb-6">
          </p>

          <h1 className="font-heading text-5xl md:text-7xl text-brand-dark dark:text-brand-lighttext leading-tight mb-6">
            Hello, I'm
            <span className="block text-brand-burgundy dark:text-[#E8B7C8]">
              Afoyorwoth Patricia.
            </span>

            <span className="block text-brand-dark dark:text-brand-lighttext">
              Frontend Developer.
            </span>
          </h1>

          <p className="text-brand-muted dark:text-[#E0D6D2] text-lg leading-relaxed max-w-2xl mb-10">
            I build thoughtful, responsive and user friendly web experiences.
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
              className="border border-brand-burgundy dark:border-[#E8B7C8] text-brand-burgundy dark:text-[#E8B7C8] px-7 py-4 rounded-full hover:bg-brand-burgundy hover:text-white transition"
            >
              Contact Me
            </a>

            <a
              href="/Afoyorwoth-Patricia-CV.pdf"
              download="Afoyorwoth-Patricia-CV.pdf"
              className="border border-brand-gold text-brand-dark dark:text-brand-lighttext px-7 py-4 rounded-full hover:bg-brand-gold hover:text-white transition"
            >
              Download My CV 
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm h-[420px] mx-auto md:ml-auto">
          <img
            src={patriciaPhoto}
            alt="Afoyorwoth Patricia, Frontend Developer"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
