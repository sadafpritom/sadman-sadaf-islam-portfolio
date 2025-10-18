"use client"

import { 
  Code, 
  Shield, 
  Database, 
  Server, 
  Cloud,
  Activity
} from 'lucide-react';

const techCategories = [
  {
    category: 'Server & Cloud',
    icon: Server,
    color: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-cyan-500/50',
    badgeStyle: 'text-cyan-300 border-cyan-300/30 bg-cyan-900/20 hover:bg-cyan-800/30',
    technologies: ['Unix/Linux', 'AWS', 'Terraform', 'Shell Scripting', 'System Monitoring']
  },
  {
    category: 'Database Management',
    icon: Database,
    color: 'from-emerald-500 to-green-400',
    shadow: 'shadow-green-500/50',
    badgeStyle: 'text-emerald-300 border-emerald-300/30 bg-emerald-900/20 hover:bg-emerald-800/30',
    technologies: ['DB2', 'MySQL', 'SQL Optimization', 'Backup & Recovery', 'Performance Monitoring']
  },
  {
    category: 'Development & DevOps',
    icon: Code,
    color: 'from-violet-500 to-purple-400',
    shadow: 'shadow-purple-500/50',
    badgeStyle: 'text-violet-300 border-violet-300/30 bg-violet-900/20 hover:bg-violet-800/30',
    technologies: ['JavaScript', 'Python', 'Docker & Kubernetes', 'React', 'CI/CD']
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-rose-500 to-red-400',
    shadow: 'shadow-red-500/50',
    badgeStyle: 'text-rose-300 border-rose-300/30 bg-rose-900/20 hover:bg-rose-800/30',
    technologies: ['SIEM Tools', 'Threat Analysis', 'Security Audits', 'Incident Response', 'Vulnerability Mgmt']
  },
  {
    category: 'Production Support',
    icon: Activity,
    color: 'from-amber-500 to-orange-400',
    shadow: 'shadow-orange-500/50',
    badgeStyle: 'text-amber-300 border-amber-300/30 bg-amber-900/20 hover:bg-amber-800/30',
    technologies: ['ServiceNow', 'Batch Processing', 'SLA Management', 'Root Cause Analysis', 'ITIL']
  },
  {
    category: 'Tools & Platforms',
    icon: Cloud,
    color: 'from-teal-500 to-sky-400',
    shadow: 'shadow-sky-500/50',
    badgeStyle: 'text-teal-300 border-teal-300/30 bg-teal-900/20 hover:bg-teal-800/30',
    technologies: ['Kafka', 'IBM Tools', 'Git', 'APIs', 'Monitoring Systems']
  }
];

export function TechStack() {
  return (
    <>
      <style jsx global>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .floating-animation {
          animation: subtle-float 6s ease-in-out infinite;
        }
        @keyframes card-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .card-animation {
          animation: card-fade-in 0.6s ease-out forwards;
        }
      `}</style>
      <div className="glass-card p-8 floating-animation rounded-2xl">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text text-center tracking-tight">
          Tech Stack & Expertise
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.category}
                className="card-animation glass-card p-6 rounded-xl group transition-all duration-300 ease-out hover:!transform-none flex flex-col justify-between"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0, 
                  transformStyle: 'preserve-3d' 
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-4 text-left">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} mr-4 shadow-lg ${category.shadow} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium border rounded-full transition-all ${category.badgeStyle}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

