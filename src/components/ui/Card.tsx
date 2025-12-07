import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div className={`
      rounded-3xl border border-border bg-card text-card-foreground shadow-sm 
      ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

export const CardContent: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
);