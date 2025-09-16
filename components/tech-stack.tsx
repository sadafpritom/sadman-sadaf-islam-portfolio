"use client"

import { 
  Code, 
  Shield, 
  Database, 
  Server, 
  Monitor, 
  Cloud,
  Settings,
  Terminal,
  HardDrive,
  Activity
} from 'lucide-react';

const techCategories = [
  {
    category: 'Server Administration',
    icon: Server,
    color: 'from-slate-600 to-slate-700',
    technologies: ['Unix/Linux', 'Shell Scripting', 'System Monitoring', 'Log Analysis', 'Performance Tuning']
  },
  {
    category: 'Database Management',
    icon: Database,
    color: 'from-gray-600 to-gray-700',
    technologies: ['DB2', 'MySQL', 'SQL Optimization', 'Backup & Recovery', 'Performance Monitoring']
  },
  {
    category: 'Development',
    icon: Code,
    color: 'from-zinc-600 to-zinc-700',
    technologies: ['JavaScript', 'Python', 'Node.js', 'React', 'Web Applications']
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-stone-600 to-stone-700',
    technologies: ['SIEM Tools', 'Threat Analysis', 'Security Audits', 'Incident Response', 'Malware Analysis']
  },
  {
    category: 'Production Support',
    icon: Activity,
    color: 'from-neutral-600 to-neutral-700',
    technologies: ['ServiceNow', 'Batch Processing', 'SLA Management', 'Root Cause Analysis', 'Incident Management']
  },
  {
    category: 'Tools & Platforms',
    icon: Cloud,
    color: 'from-slate-500 to-slate-600',
    technologies: ['Kafka', 'OTIS', 'IBM Tools', 'Git', 'APIs', 'Monitoring Systems']
  }
];

export function TechStack() {
  return (
    <div className="glass-card p-8 floating-animation">
      <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
        Tech Stack & Expertise
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div 
              key={category.category}
              className="glass-card p-6 glass-card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {category.category}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm bg-gradient-to-r ${category.color} bg-opacity-10 text-white border border-white/20 rounded-full hover:bg-opacity-20 transition-all`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}