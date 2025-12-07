import React from 'react';
import { Card } from '../ui/Card';
import { Terminal, Cpu, Code2, Database, Globe, Zap, Layers, Box } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative z-10">
      
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Narrative (Clean & Direct) */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Constructor de Software. <br />
                <span className="text-muted-foreground">Aprendiz Constante.</span>
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  No creo en la especialización estática. Como desarrollador autodidacta, mi enfoque es pragmático: 
                  <strong> aprender lo necesario para construir la mejor solución posible.</strong>
                </p>
                <p>
                  Mi experiencia no se mide en años de silla en una oficina, sino en problemas resueltos, 
                  repositorios desplegados y la capacidad de adaptarme a un ecosistema que cambia cada semana.
                  Me muevo fluidamente entre el Frontend, el Backend y la infraestructura.
                </p>
              </div>
            </div>

            {/* Tech Arsenal (No percentages, just distinct tags) */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 mb-4">Arsenal Técnico</h3>
              <div className="flex flex-wrap gap-2">
                {['React 19', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'PostgreSQL', 'Docker', 'AWS', 'Python', 'Git'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-md bg-muted/50 border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Current Focus Card (Clean, Animated Icons) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl -rotate-1 scale-[1.02]" />
            
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Enfoque Actual</h3>
                  <p className="text-sm text-muted-foreground">Lo que estoy construyendo ahora mismo</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                   <p className="text-xs font-bold text-muted-foreground uppercase mb-3">Proyecto Activo</p>
                   <p className="font-medium text-foreground flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Integración de Agentes LLM en tiempo real
                   </p>
                </div>

                <div>
                   <p className="text-xs font-bold text-muted-foreground uppercase mb-4">Tecnologías en uso</p>
                   <div className="flex justify-between items-center gap-4 p-2">
                      {/* React / Frontend */}
                      <div className="flex flex-col items-center gap-2 group">
                         <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 animate-[spin_10s_linear_infinite]">
                            <Code2 size={24} />
                         </div>
                         <span className="text-[10px] font-mono text-muted-foreground">React</span>
                      </div>

                      {/* TypeScript */}
                      <div className="flex flex-col items-center gap-2 group">
                         <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-600 animate-pulse">
                            <Box size={24} />
                         </div>
                         <span className="text-[10px] font-mono text-muted-foreground">TS</span>
                      </div>

                      {/* Backend / API */}
                      <div className="flex flex-col items-center gap-2 group">
                         <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 animate-float">
                            <Database size={24} />
                         </div>
                         <span className="text-[10px] font-mono text-muted-foreground">Node</span>
                      </div>

                      {/* AI / Modern Tech */}
                      <div className="flex flex-col items-center gap-2 group">
                         <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-500 animate-[pulse_3s_ease-in-out_infinite]">
                            <Zap size={24} />
                         </div>
                         <span className="text-[10px] font-mono text-muted-foreground">AI API</span>
                      </div>
                   </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};