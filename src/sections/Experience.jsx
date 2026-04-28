const experiences = [
  {
    period: "March 2025 — Present",
    role: "Senior Frontend Engineer",
    company: "Charles Schwab",
    description:
      "Spearheaded end-to-end UX design and frontend engineering for an AI-native Developer Portal, delivering production React and TypeScript interfaces for GitHub workflows, SDLC automation, and AI assistant interaction patterns. Built a scalable component design system from Sketch wireframes to reusable UI components including chat panels, copilot surfaces, and contextual navigation. Integrated SSE and WebSockets for live agent execution feedback and real-time state updates. Applied WCAG accessibility standards, performance profiling, and code quality enforcement using ESLint, Prettier, and SonarQube.",
    technologies: ["React", "TypeScript", "Redux", "Node.js", "SSE", "WebSockets", "Material UI", "Sketch"],
    current: true,
  },
  {
    period: "Sept 2023 — Feb 2025",
    role: "Frontend Developer",
    company: "Nike",
    description:
      "Delivered UX design and frontend engineering for high-traffic e-commerce and product catalog platforms used by millions of consumers globally. Designed wireframes and prototypes in Sketch and built a reusable component-driven design system using ReactJS, TypeScript, Redux, and Material UI. Integrated RESTful APIs and GraphQL endpoints with optimistic UI updates, loading states, and error boundaries. Ensured cross-browser compatibility, responsive CSS3 layouts, and performance optimization through lazy loading and code splitting.",
    technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Jest", "CSS3", "Sketch", "GitLab CI/CD"],
    current: false,
  },
  {
    period: "Oct 2021 — Jul 2023",
    role: "Software Engineer",
    company: "UnitedHealth Group",
    description:
      "Designed and built responsive provider and member portal UX for enterprise healthcare applications, conducting stakeholder interviews and delivering intuitive claims processing interfaces that reduced support volume. Evolved a reusable UI component library using ReactJS, TypeScript, HTML5, CSS3, and Redux. Implemented React-based form validation, multi-step wizards, and data-entry UX patterns for provider enrollment and member registration workflows. Designed accessible interfaces following WCAG guidelines using Material UI and Bootstrap.",
    technologies: ["React", "TypeScript", "Node.js", "Redux", "CSS3", "Bootstrap", "Material UI", "Sketch"],
    current: false,
  },
  {
    period: "Dec 2019 — Sept 2021",
    role: "Software Developer",
    company: "Tata Consultancy Services",
    description:
      "Designed and developed responsive web interfaces for insurance product configuration and policy management systems using HTML5, CSS3, JavaScript, and ReactJS. Implemented CSS-based theming and component styling to standardize visual design across multiple insurance product interfaces. Integrated frontend applications with RESTful APIs and Node.js services, building data-driven UI components for real-time policy and claims information. Produced wireframes and UX documentation to support stakeholder reviews and design iterations.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "RESTful APIs"],
    current: false,
  },
  {
    period: "Jan 2018 — Nov 2019",
    role: "Software Developer",
    company: "AccelQ",
    description:
      "Contributed to a cloud-based codeless test automation platform, building frontend interfaces and interactive configuration UX using JavaScript and HTML5 for non-technical users. Built reusable UI components and drag-and-drop workflow builders using JavaScript and CSS3. Designed and implemented a results dashboard UI using ReactJS and CSS3 that visualized test execution status and pass/fail trends in real time. Configured npm-based build toolchains and integrated GitHub Actions for frontend CI pipelines.",
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
