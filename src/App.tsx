import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ProjectsSection, AllProjects, ProjectDetail } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

type ViewState = 'home' | 'all-projects' | 'project-detail';

import { Theme } from './types';

const App: React.FC = () => {
  // Theme state initialization
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'system';
    }
    return 'system';
  });

  // Routing Logic
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  // Apply theme
  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const systemIsDark = mediaQuery.matches;
      const isDark = theme === 'dark' || (theme === 'system' && systemIsDark);

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();

    const handleChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Navigation Handlers
  const handleNavigate = (sectionId: string) => {
    // Logic: If user clicks Home, About, Projects or Contact...
    // 1. If we are NOT in home view, go to Home view first.
    // 2. Then scroll to the section.
    
    if (currentView !== 'home') {
      setCurrentView('home');
      // Give React a moment to render the Home view before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already at home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openProject = (id: number) => {
    setSelectedProjectId(id);
    setCurrentView('project-detail');
  };

  return (
    <main className={`
      min-h-screen bg-background text-foreground transition-colors duration-500 
      selection:bg-primary selection:text-primary-foreground pb-32
    `}>
      <Navbar 
        onThemeChange={handleThemeChange} 
        theme={theme} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      <div className="flex flex-col w-full transition-all duration-500">
        
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <ProjectsSection 
              onProjectClick={openProject} 
              onViewAll={() => setCurrentView('all-projects')} 
            />
            <Contact />
          </>
        )}

        {currentView === 'all-projects' && (
          <AllProjects 
            onProjectClick={openProject} 
            onBack={() => setCurrentView('home')} 
          />
        )}

        {currentView === 'project-detail' && selectedProjectId !== null && (
          <ProjectDetail 
            id={selectedProjectId} 
            onBack={() => setCurrentView('all-projects')} 
          />
        )}

        <Footer />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </main>
  );
};

export default App;