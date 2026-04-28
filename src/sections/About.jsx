import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building scalable React and TypeScript applications with reusable component systems and clean, maintainable code.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Delivering fast, accessible interfaces through lazy loading, code splitting, and real-time data integration.",
  },
  {
    icon: Users,
    title: "UX Design",
    description:
      "Translating wireframes and Sketch prototypes into polished, intuitive user experiences from concept to production.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring AI-native interfaces, agentic workflows, and modern frontend tooling to stay ahead of the curve.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Senior Frontend with over 8 years of
                experience building high-performance, production-grade web
                applications across financial services, healthcare, e-commerce,
                and insurance industries. What started as a curiosity about how
                interfaces come to life has grown into deep expertise in React,
                TypeScript, and user-centered design.
              </p>
              <p>
                I specialize in ReactJS, TypeScript, JavaScript, HTML5, CSS3,
                Node.js, and npm — building everything from reusable component
                libraries and design systems to real-time dashboards and
                AI-native developer portals. I work closely with designers using
                Sketch and Figma, translating wireframes and prototypes into
                accessible, performant interfaces that users love. My approach
                balances clean frontend architecture with strong UX execution,
                always keeping the end user in focus.
              </p>
              <p>
                When I'm not building interfaces, I'm exploring emerging
                frontend tooling, contributing to design systems, and staying
                current with the rapidly evolving landscape of AI-assisted
                development and modern web technologies.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
