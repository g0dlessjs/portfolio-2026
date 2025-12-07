import React from 'react';
import { Button } from '../ui/Button';
import { Mail, Linkedin, Twitter, Github, Send, MapPin, Copy, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-primary font-bold tracking-widest uppercase mb-3 text-xs">Contacto</h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
                ¿Buscas talento <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">Joven?</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Estoy buscando mi primera gran oportunidad para demostrar mi valor, aprender de los mejores y contribuir con código de calidad.
              </p>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-primary">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-0.5">Email</p>
                  <p className="text-base font-medium">contacto@juangalarce.dev</p>
                </div>
                <button className="text-muted-foreground hover:text-foreground" aria-label="Copiar email">
                  <Copy size={16} />
                </button>
              </div>

               <div className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-0.5">Base</p>
                  <p className="text-base font-medium">Chile (Remoto/Híbrido)</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs font-medium mb-3">Sígueme en redes</p>
              <div className="flex gap-2">
                <SocialBtn icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialBtn icon={<Twitter size={18} />} label="Twitter" />
                <SocialBtn icon={<Github size={18} />} label="GitHub" />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              
              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputGroup label="Tu Nombre" placeholder="Nombre Apellido" />
                  <InputGroup label="Tu Email" placeholder="tu@email.com" type="email" />
                </div>
                
                <div className="space-y-2">
                   <label className="text-xs font-medium ml-1 text-muted-foreground">Mensaje</label>
                   <textarea 
                    rows={3} 
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-muted-foreground/50 text-sm" 
                    placeholder="Cuéntame los detalles..." 
                   />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <Button variant="gradient" size="md" className="w-full text-base h-11 rounded-lg shadow-lg shadow-primary/20">
                    Enviar Propuesta <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const InputGroup: React.FC<{ label: string; placeholder: string; type?: string }> = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-xs font-medium ml-1 text-muted-foreground">{label}</label>
    <input 
      type={type} 
      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground/50 text-sm" 
      placeholder={placeholder} 
    />
  </div>
);

const SocialBtn: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <button 
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-muted border border-border hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </button>
);