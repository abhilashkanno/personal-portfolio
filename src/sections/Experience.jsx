const experiences = [
  {
    period: "March 2025 — Present",
    role: "Senior Frontend Engineer",
    company: "Charles Schwab",
    description:
      "Schwab is where I got to push the boundaries of what a developer portal can feel like. I designed and engineered an AI-native portal from the ground up, translating Sketch wireframes into production React and TypeScript interfaces that help engineers work smarter. From building a scalable component design system to wiring up real-time SSE and WebSocket streams, every piece was crafted to make complex AI interactions feel effortless. Agent orchestration UIs, copilot surfaces, WCAG accessibility, all shipped with care.",
    technologies: ["React", "TypeScript", "Redux", "Node.js", "SSE", "WebSockets", "Material UI", "Sketch"],
    current: true,
  },
  {
    period: "Sept 2023 — Feb 2025",
    role: "Frontend Developer",
    company: "Nike",
    description:
      "Building for Nike meant building for everyone. I crafted frontend experiences across the product catalog, cart, and checkout flows, surfaces used by millions of people around the world every day. I designed in Sketch, built a shared React and TypeScript component system, and obsessed over every millisecond through lazy loading, code splitting, and bundle optimization. I also helped grow the team's frontend culture through code reviews and mentoring.",
    technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Jest", "CSS3", "Sketch", "GitLab CI/CD"],
    current: false,
  },
  {
    period: "Oct 2021 — Jul 2023",
    role: "Software Engineer",
    company: "UnitedHealth Group",
    description:
      "Healthcare UX is unforgiving and people depend on it. At UnitedHealth Group, I designed and built provider and member portals that simplified overwhelming workflows like claims processing and enrollment. Starting from stakeholder interviews and Sketch wireframes, I worked all the way through to accessible, WCAG-compliant React interfaces. A reusable component library and thoughtful multi-step form patterns made a measurable difference in submission accuracy and support volume.",
    technologies: ["React", "TypeScript", "Node.js", "Redux", "CSS3", "Bootstrap", "Material UI", "Sketch"],
    current: false,
  },
  {
    period: "Dec 2019 — Sept 2021",
    role: "Software Developer",
    company: "Tata Consultancy Services",
    description:
      "Insurance products are notoriously complex and my job was to make them feel simple. At TCS I turned dense business requirements into clean, intuitive web interfaces using React, JavaScript, HTML5, and CSS3. I built theming systems, wired up data-driven UI components to RESTful and Node.js APIs, and kept stakeholders and developers in sync through detailed wireframes and UX documentation.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "RESTful APIs"],
    current: false,
  },
  {
    period: "Jan 2018 — Nov 2019",
    role: "Software Developer",
    company: "AccelQ",
    description:
      "Where it all began. At AccelQ I helped bring a codeless test automation platform to life, one where non-technical users could build and run test scenarios without touching a line of code. I designed the configuration UX, built drag-and-drop workflow builders, and shipped a real-time results dashboard in React and CSS3. Setting up npm toolchains and GitHub Actions pipelines gave the team a solid, automated foundation to build on.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "npm", "GitHub Actions", "Jest"],
    current: false,
  },
];
export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
