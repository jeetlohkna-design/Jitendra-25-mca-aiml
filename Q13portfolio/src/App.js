import React from "react";
import "./App.css";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive shopping experience for browsing products, managing a cart, and completing purchases.",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Library Management System",
      description:
        "A simple system for organizing books and keeping track of library records.",
      tags: ["React", "JavaScript", "HTML"],
    },
  ];

  return (
    <div className="portfolio">
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Jitendra portfolio home">
            Jitendra<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">MCA AIML Student &amp; Web Developer</p>
            <h1>
              Hi, I'm <span>Jitendra MCA AIML</span>
             <a>jeetlohkna@gmail.com </a>
            <a href="tel:+919761864160">+91 9761864160</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Jitendra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
