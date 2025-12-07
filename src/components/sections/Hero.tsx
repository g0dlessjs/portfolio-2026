import React from "react";
import { Button } from "../ui/Button";
import { Terminal, Cpu, Code2, GitBranch, Command } from "lucide-react";

interface HeroProps {
  onNavigate: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12 lg:pt-32"
    >
      {/* Developer Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text & CLI */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-wider mb-2 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-green-500" /> SYSTEM
              ONLINE
            </div>

            <div className="space-y-2">
              <p className="font-mono text-primary text-lg md:text-xl font-medium flex items-center gap-2">
                <span className="text-muted-foreground select-none">&gt;</span>{" "}
                Hola, soy Juan
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
                  DEVELOPER
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-mono">
              // Arquitecto soluciones digitales escalables.
              <br className="hidden md:block" />
              // Especializado en React, Node.js y la integración de IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                className="font-mono rounded-lg h-12 px-8 text-sm group"
                onClick={() => onNavigate("projects")}
              >
                <Terminal className="mr-2 w-4 h-4 group-hover:text-green-400 transition-colors" />
                view_projects.sh
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-mono rounded-lg h-12 px-8 text-sm border-foreground/20 hover:bg-foreground/5"
                onClick={() => onNavigate("contact")}
              >
                <Command className="mr-2 w-4 h-4" /> contact_me
              </Button>
            </div>
          </div>

          {/* Right: Code Window / IDE */}
          <div className="relative group perspective-1000">
            {/* Glow effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            {/* IDE Window */}
            <div className="relative rounded-xl border border-border bg-[#0a0a0a] shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Code2 size={12} /> profile.tsx
                </div>
                <div className="w-10" /> {/* Spacer */}
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm md:text-base leading-relaxed">
                  <code>
                    <span className="text-pink-500">const</span>{" "}
                    <span className="text-yellow-400">Developer</span>{" "}
                    <span className="text-white"> = </span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                    {"\n"}
                    {"  "}name:{" "}
                    <span className="text-green-400">'Juan Galarce'</span>,
                    {"\n"}
                    {"  "}role:{" "}
                    <span className="text-green-400">'Software Engineer'</span>,
                    {"\n"}
                    {"  "}skills:{" "}
                    <span className="text-purple-400">
                      ['React 19', 'Next.js', 'AI']
                    </span>
                    ,{"\n"}
                    {"  "}hardWorker:{" "}
                    <span className="text-blue-400">true</span>,{"\n"}
                    {"  "}status:{" "}
                    <span className="text-green-400">
                      'Building the Future...'
                    </span>
                    {"\n"}
                    <span className="text-yellow-400">{"}"}</span>;{"\n"}
                    {"\n"}
                    <span className="text-muted-foreground">
                      // TODO: Create amazing experiences
                    </span>
                    {"\n"}
                    <span className="text-pink-500">export default</span>{" "}
                    <span className="text-yellow-400">Developer</span>;
                  </code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-1.5 bg-[#111] border-t border-border/50 flex items-center justify-between text-[10px] md:text-xs text-muted-foreground font-mono">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <GitBranch size={10} /> main*
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />{" "}
                    0 errors
                  </span>
                </div>
                <div className="flex gap-4">
                  <span>Ln 12, Col 45</span>
                  <span>UTF-8</span>
                  <span>TypeScript React</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tech Ticker */}
        <div className="mt-20 pt-8 border-t border-border/30 flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind",
            "PostgreSQL",
            "Docker",
            "AWS",
            "GraphQL",
          ].map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 group cursor-default"
            >
              <Cpu
                size={16}
                className="group-hover:text-primary transition-colors"
              />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
