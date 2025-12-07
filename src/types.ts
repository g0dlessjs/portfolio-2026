import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string; // Nuevo
  client?: string; // Nuevo
  year?: string; // Nuevo
  role?: string; // Nuevo
  tags: string[];
  imageUrl: string;
  link: string;
  size: 'small' | 'medium' | 'large';
  
  // Detalles ampliados para la página de proyecto
  gallery?: string[];
  challenge?: string;
  solution?: string;
  result?: string;
  features?: string[];
  techStack?: {
    category: string;
    tools: string[];
  }[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export type Theme = 'light' | 'dark' | 'system';