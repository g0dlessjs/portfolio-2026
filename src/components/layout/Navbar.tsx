import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Sun, Moon, Monitor } from 'lucide-react';
import { Theme } from '../../types';

interface NavbarProps {
  onThemeChange: (theme: Theme) => void;
  theme: Theme;
  onNavigate: (sectionId: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onThemeChange, 
  theme, 
  onNavigate, 
  currentView 
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const isScrolling = React.useRef(false);

  // Detect active section
  useEffect(() => {
    if (currentView !== 'home') {
      setActiveSection('projects'); // Keep projects active if viewing detail/all
      return;
    }
    const sections = ['home', 'about', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [currentView]);

  const handleNavClick = (id: string) => {
    isScrolling.current = true;
    onNavigate(id);
    setActiveSection(id);
    
    // Reset scrolling lock after animation completes
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  const handleThemeSelect = (newTheme: Theme) => {
    onThemeChange(newTheme);
    setIsThemeMenuOpen(false);
  };

  return (
    <div className="fixed z-50 bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-auto">
      
      {/* Main Dock - Glassmorphism Pill */}
      <nav 
        className="
          flex items-center gap-1 px-3 py-2
          rounded-full border border-white/20 dark:border-white/10 
          bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl
          transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 dark:hover:bg-black/30
        "
      >
        <NavButton 
          icon={<Home size={20} />} 
          label="Inicio" 
          isActive={activeSection === 'home' && currentView === 'home'} 
          onClick={() => handleNavClick('home')} 
        />
        <NavButton 
          icon={<User size={20} />} 
          label="Perfil" 
          isActive={activeSection === 'about' && currentView === 'home'} 
          onClick={() => handleNavClick('about')} 
        />
        <NavButton 
          icon={<Briefcase size={20} />} 
          label="Trabajo" 
          isActive={activeSection === 'projects'} 
          onClick={() => handleNavClick('projects')} 
        />
        <NavButton 
          icon={<Mail size={20} />} 
          label="Contacto" 
          isActive={activeSection === 'contact' && currentView === 'home'} 
          onClick={() => handleNavClick('contact')} 
        />
        
        {/* Divider */}
        <div className="w-px h-6 bg-white/20 dark:bg-white/10 mx-2" />
        
        {/* Theme Action */}
        <div className="relative">
          {/* Dropdown Menu */}
          {isThemeMenuOpen && (
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-32 bg-[#ffffff] dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 z-[60]">
              <div className="p-1 flex flex-col gap-0.5">
                <button 
                  onClick={() => handleThemeSelect('light')}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${theme === 'light' ? 'bg-zinc-100 text-black font-medium' : 'text-zinc-500 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'}`}
                >
                  <Sun size={16} /> Claro
                </button>
                <button 
                  onClick={() => handleThemeSelect('dark')}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${theme === 'dark' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-500 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'}`}
                >
                  <Moon size={16} /> Oscuro
                </button>
                <button 
                  onClick={() => handleThemeSelect('system')}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${theme === 'system' ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-medium' : 'text-zinc-500 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'}`}
                >
                  <Monitor size={16} /> Sistema
                </button>
              </div>
            </div>
          )}

          <button 
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            className={`
              relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
              ${isThemeMenuOpen 
                ? 'bg-white text-black shadow-lg scale-110' 
                : 'text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5'
              }
            `}
            aria-label={`Tema actual: ${theme}`}
          >
            <Sun 
              size={20}
              className={`absolute transition-all duration-500 ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} 
            />
            <Moon 
              size={20}
              className={`absolute transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} 
            />
            <Monitor 
              size={20}
              className={`absolute transition-all duration-500 ${theme === 'system' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} 
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

const NavButton: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        relative group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
        ${isActive 
          ? 'text-foreground bg-white/10 dark:bg-white/5 shadow-inner' 
          : 'text-muted-foreground hover:text-foreground hover:scale-110'
        }
      `}
      aria-label={label}
      title={label}
    >
      {icon}
      
      {/* Active Indicator Dot */}
      {isActive && (
        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
      )}
    </button>
  );
};