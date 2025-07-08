import React, { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-black font-bold text-2xl">Abilash EG</span>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
         <span className="material-icons" style={{ color: "black" }}>
  {open ? "close" : "menu"}
</span>

        </button>
        <ul className={`md:flex gap-8 font-medium ${open ? "block" : "hidden"} md:block`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-700 hover:text-primary transition">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
