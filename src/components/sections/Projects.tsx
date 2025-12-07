import React, { useEffect } from 'react';
import { Project } from '../../types';
import { ArrowUpRight, ArrowLeft, Calendar, User, Tag, ArrowRight, Layers, Cpu, Globe, Zap, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/Button';

// Mock Data Enhanced
const projectsData: Project[] = [
  {
    id: 1,
    title: "NeuroDashboard",
    description: "Panel de control analítico impulsado por IA para visualización de datos en tiempo real.",
    fullDescription: "NeuroDashboard es una solución integral diseñada para empresas que manejan grandes volúmenes de datos financieros. Utilizando la API de Gemini para el procesamiento de lenguaje natural y D3.js para visualizaciones complejas, permite a los directivos tomar decisiones basadas en predicciones de IA en tiempo real. La interfaz utiliza un diseño 'Glassmorphism' adaptativo que reduce la fatiga visual durante sesiones prolongadas.",
    client: "FinTech Global Corp",
    year: "2025",
    role: "Lead Frontend Engineer",
    tags: ["React 19", "D3.js", "Gemini API", "TypeScript"],
    imageUrl: "https://picsum.photos/id/48/1200/800",
    link: "#",
    size: "large",
    gallery: [
      "https://picsum.photos/id/3/800/600",
      "https://picsum.photos/id/60/800/600",
      "https://picsum.photos/id/119/800/600",
      "https://picsum.photos/id/180/800/600"
    ],
    challenge: "El cliente necesitaba procesar 5TB de datos diarios y visualizarlos sin latencia en navegadores estándar. La interfaz anterior tenía un retraso de 4 segundos en la carga inicial y carecía de insights predictivos.",
    solution: "Implementamos una arquitectura de 'Edge Computing' para pre-procesar datos. En el frontend, utilizamos Web Workers para cálculos pesados y React Server Components para reducir el bundle size en un 60%. Integramos Gemini Pro para generar resúmenes ejecutivos automáticos.",
    result: "Reducción del tiempo de carga a <400ms. Aumento del 200% en la detección temprana de anomalías financieras gracias a la IA. Adoptado por 3 departamentos globales.",
    techStack: [
      { category: "Frontend Core", tools: ["React 19", "TypeScript 5.0", "Vite", "Zustand"] },
      { category: "Visualización & UI", tools: ["D3.js", "Tailwind CSS", "Framer Motion", "Shadcn/UI"] },
      { category: "Backend & AI", tools: ["Node.js", "Gemini API", "PostgreSQL", "Redis"] },
      { category: "DevOps", tools: ["Docker", "AWS Amplify", "GitHub Actions"] }
    ]
  },
  {
    id: 2,
    title: "EcoSphere",
    description: "Marketplace sostenible con trazabilidad blockchain.",
    fullDescription: "EcoSphere conecta a productores locales con consumidores conscientes. Cada transacción se registra en una sidechain ecológica para garantizar la huella de carbono cero.",
    client: "GreenPeace Future",
    year: "2024",
    role: "Full Stack Developer",
    tags: ["Next.js", "Solidity", "Tailwind"],
    imageUrl: "https://picsum.photos/id/20/800/800",
    link: "#",
    size: "medium",
    techStack: [
        { category: "Web3", tools: ["Solidity", "Ethers.js", "Polygon"] },
        { category: "Frontend", tools: ["Next.js", "Tailwind", "React Query"] }
    ]
  },
  {
    id: 3,
    title: "ArchiVision",
    description: "Visualizador de arquitectura 3D en el navegador.",
    fullDescription: "Una herramienta WebGL que permite a los arquitectos renderizar planos CAD directamente en el navegador con iluminación en tiempo real.",
    client: "Modern Homes Ltd",
    year: "2025",
    role: "Graphics Programmer",
    tags: ["Three.js", "WebGL"],
    imageUrl: "https://picsum.photos/id/201/800/600",
    link: "#",
    size: "small",
    techStack: [
        { category: "Graphics", tools: ["Three.js", "WebGL", "GLSL Shaders"] },
        { category: "App", tools: ["React", "Redux Toolkit"] }
    ]
  },
  {
    id: 4,
    title: "ZenTask",
    description: "Gestor de tareas minimalista para productividad profunda.",
    fullDescription: "ZenTask elimina el ruido. Basado en la metodología Zettelkasten, esta aplicación ayuda a los investigadores a conectar notas y tareas.",
    client: "Personal Project",
    year: "2026",
    role: "Creator",
    tags: ["Vue 4", "Framer Motion"],
    imageUrl: "https://picsum.photos/id/180/800/600",
    link: "#",
    size: "medium"
  },
  {
    id: 5,
    title: "NeonSocial",
    description: "Red social descentralizada.",
    client: "DAO Collective",
    year: "2025",
    role: "Backend Architect",
    tags: ["IPFS", "GunDB", "Svelte"],
    imageUrl: "https://picsum.photos/id/160/600/400",
    link: "#",
    size: "small"
  },
  {
    id: 6,
    title: "CyberMedic",
    description: "Interfaz de diagnóstico médico.",
    client: "HealthPlus",
    year: "2026",
    role: "UI/UX Designer",
    tags: ["Figma", "React", "Python"],
    imageUrl: "https://picsum.photos/id/119/600/400",
    link: "#",
    size: "medium"
  }
];

interface ProjectsProps {
  onProjectClick: (id: number) => void;
  onViewAll: () => void;
}

// ------------------------------------------------------------------
// COMPONENT: Projects Home Section (Bento Grid)
// ------------------------------------------------------------------
export const ProjectsSection: React.FC<ProjectsProps> = ({ onProjectClick, onViewAll }) => {
  // We explicitly select specific projects to create a nice bento layout
  const heroProject = projectsData[0]; 
  const subProjects = projectsData.slice(1, 4);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-foreground/[0.02] pointer-events-none select-none font-display">
        WORK
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
             <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Portafolio Seleccionado
             </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Diseñando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Futuro</span>
            </h2>
          </div>
          <Button onClick={onViewAll} className="rounded-full px-6 h-12 text-md" variant="outline">
            Ver Todo el Archivo <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Hero Project (Large) - Takes 2 cols and 2 rows on Desktop */}
          <div 
            onClick={() => onProjectClick(heroProject.id)}
            className="group relative md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden cursor-pointer bg-muted/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.01] ring-1 ring-white/5 hover:ring-primary/40"
          >
            <img 
              src={heroProject.imageUrl} 
              alt={heroProject.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                Proyecto Destacado
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{heroProject.title}</h3>
              <p className="text-gray-300 text-lg md:text-xl max-w-lg line-clamp-2 mb-6">
                {heroProject.description}
              </p>
               <div className="flex gap-2">
                 {heroProject.tags.map(t => (
                   <span key={t} className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur border border-white/10 text-white text-xs font-medium">
                     {t}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          {/* Sub Projects - Fill the rest */}
          {subProjects.map((project, idx) => (
             <div 
               key={project.id}
               onClick={() => onProjectClick(project.id)}
               className={`group relative rounded-[2rem] overflow-hidden cursor-pointer bg-muted/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ring-1 ring-white/5 hover:ring-primary/30 ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
             >
               <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
               <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-1">{project.description}</p>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------------
// COMPONENT: All Projects Page (Grid)
// ------------------------------------------------------------------
export const AllProjects: React.FC<{ onProjectClick: (id: number) => void, onBack: () => void }> = ({ onProjectClick, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 container px-4 md:px-6 mx-auto min-h-screen">
      <div className="mb-12">
        <Button variant="ghost" onClick={onBack} className="mb-6 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="mr-2 w-4 h-4" /> Volver al inicio
        </Button>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Archivo <span className="text-primary">2026</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Colección completa de experimentos, productos comerciales y contribuciones open source.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
        {projectsData.map((project, idx) => (
          <div 
            key={project.id}
            onClick={() => onProjectClick(project.id)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-muted/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] ring-1 ring-white/5 hover:ring-primary/40"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
             <img 
               src={project.imageUrl} 
               alt={project.title} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                   <ArrowUpRight size={32} />
                </div>
             </div>
             <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.client}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ------------------------------------------------------------------
// COMPONENT: Project Detail Page
// ------------------------------------------------------------------
export const ProjectDetail: React.FC<{ id: number, onBack: () => void }> = ({ id, onBack }) => {
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  return (
    <section className="pt-24 pb-24 container px-4 md:px-6 mx-auto min-h-screen">
      <Button variant="ghost" onClick={onBack} className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 w-4 h-4" /> Volver al archivo
      </Button>

      {/* HEADER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="space-y-4">
             <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
              {project.title}
             </h1>
             <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed max-w-xl">
               {project.description}
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12 py-8 border-y border-border/50">
             <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Cliente</p>
                <p className="text-lg font-medium">{project.client || "Confidencial"}</p>
             </div>
             <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Año</p>
                <p className="text-lg font-medium">{project.year || "2026"}</p>
             </div>
             <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Rol</p>
                <p className="text-lg font-medium">{project.role || "Lead Dev"}</p>
             </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="rounded-full text-base h-12 px-8 shadow-xl shadow-primary/20" onClick={() => window.open(project.link, '_blank')}>
              Visitar Sitio Web <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-12 px-8">
               Ver Código
            </Button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-border bg-muted aspect-square lg:aspect-[4/3] shadow-2xl animate-in slide-in-from-right-10 duration-700 fade-in">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* CASE STUDY SECTION */}
      <div className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseCard 
            title="El Desafío" 
            icon={<Globe className="w-6 h-6 text-red-500" />} 
            content={project.challenge || "Definir una arquitectura escalable que pudiera manejar miles de usuarios concurrentes sin comprometer la velocidad de carga."} 
          />
          <CaseCard 
            title="La Solución" 
            icon={<Layers className="w-6 h-6 text-blue-500" />} 
            content={project.solution || "Implementación de renderizado híbrido y una estrategia de caché distribuido en el borde (Edge Caching)."} 
          />
          <CaseCard 
            title="El Impacto" 
            icon={<Zap className="w-6 h-6 text-yellow-500" />} 
            content={project.result || "Mejora del 300% en métricas Core Web Vitals y un aumento sustancial en la conversión de usuarios móviles."} 
          />
        </div>
      </div>

      {/* TECH STACK SECTION */}
      {project.techStack && (
        <div className="mb-24 space-y-8">
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border"></div>
              <h2 className="text-3xl font-display font-bold">Stack Tecnológico</h2>
              <div className="h-px flex-1 bg-border"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.techStack.map((stack, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                   <h3 className="font-mono text-sm font-bold text-primary uppercase tracking-wider mb-4">{stack.category}</h3>
                   <ul className="space-y-2">
                     {stack.tools.map(tool => (
                       <li key={tool} className="flex items-center gap-2 text-muted-foreground text-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-foreground/20"></div>
                         {tool}
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      )}

      {/* GALLERY SECTION */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="space-y-8">
           <div className="flex items-center gap-2 mb-8">
              <ImageIcon className="text-primary" />
              <h2 className="text-3xl font-display font-bold">Galería de Interfaz</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden border border-border bg-muted cursor-zoom-in">
                   <img 
                    src={img} 
                    alt={`Screenshot ${idx + 1}`} 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
           </div>
        </div>
      )}

    </section>
  );
};

// Helper for Case Study Cards
const CaseCard: React.FC<{ title: string, content: string, icon: React.ReactNode }> = ({ title, content, icon }) => (
  <div className="bg-card/50 backdrop-blur p-8 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
     <div className="mb-6 p-3 bg-background rounded-2xl inline-block shadow-sm border border-border/50">
        {icon}
     </div>
     <h3 className="text-xl font-bold mb-4 font-display">{title}</h3>
     <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
       {content}
     </p>
  </div>
);