export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Contact</h2>
        <p className="text-lg text-white-800 mb-4">
          Feel free to reach out for collaboration or just a friendly chat!
        </p>
        <div className="space-y-2">
          <p>Email: <a href="mailto:abilashgomathi7@gmail.com" className="text-primary underline">abilashgomathi7@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/abilash-eg" className="text-primary underline" target="_blank" rel="noopener noreferrer">/in/abilash-eg</a></p>
        </div>
      </div>
    </section>
  );
}
