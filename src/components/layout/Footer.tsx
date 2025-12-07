import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-8 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-xl font-bold font-display">Juan Galarce</h2>
            <p className="text-sm text-muted-foreground">
              © 2026 Juan Galarce. Todos los derechos reservados.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
             <SocialIcon icon={<Github size={18} />} />
             <SocialIcon icon={<Twitter size={18} />} />
             <SocialIcon icon={<Linkedin size={18} />} />
             <SocialIcon icon={<Instagram size={18} />} />
          </div>

        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all">
    {icon}
  </a>
);