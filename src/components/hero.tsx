export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-4 animate-fade-in">
        Hi, I'm Abilash EG
      </h1>
      <p className="text-xl font-bold text-white-700 mb-6 animate-fade-in delay-200">
  AWS Certified | DevOps | AI | Data Analytics | CSE Graduate @ VIT
</p>

      <div className="flex gap-4 justify-center animate-fade-in delay-400">
  <a
    href="https://github.com/AbilashEG"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-900 text-white px-4 py-2 rounded transition duration-300 hover:bg-primary hover:ring-4 hover:ring-primary hover:ring-opacity-50 shadow"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/abilash-eg"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white px-4 py-2 rounded transition duration-300 hover:bg-accent hover:ring-4 hover:ring-accent hover:ring-opacity-50 shadow"
  >
    LinkedIn
  </a>
</div>

    </section>
  );
}
