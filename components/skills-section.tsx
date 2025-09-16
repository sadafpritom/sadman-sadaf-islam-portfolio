"use client"

import { useState } from 'react';
import { Code, Server, Shield, Layers, Cloud, Database, Activity, Users, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    category: 'Server Administration',
    icon: Server,
    color: 'from-slate-600 to-slate-700',
    skills: [
      { name: 'Unix/Linux Systems', level: 95, description: 'Advanced Unix server administration and maintenance' },
      { name: 'Shell Scripting', level: 90, description: 'Automation and process optimization scripts' },
      { name: 'System Monitoring', level: 85, description: 'Real-time system performance monitoring' },
      { name: 'Log Analysis', level: 88, description: 'Comprehensive log analysis and troubleshooting' },
      { name: 'Performance Tuning', level: 85, description: 'System optimization and performance enhancement' }
    ]
  },
  {
    category: 'Database Management',
    icon: Database,
    color: 'from-gray-600 to-gray-700',
    skills: [
      { name: 'DB2', level: 90, description: 'IBM DB2 database administration and optimization' },
      { name: 'MySQL', level: 85, description: 'MySQL database management and tuning' },
      { name: 'SQL Optimization', level: 88, description: 'Query optimization and performance tuning' },
      { name: 'Backup & Recovery', level: 90, description: 'Database backup strategies and disaster recovery' },
      { name: 'Performance Monitoring', level: 85, description: 'Database performance analysis and monitoring' }
    ]
  },
  {
    category: 'Production Support',
    icon: Activity,
    color: 'from-neutral-600 to-neutral-700',
    skills: [
      { name: 'ServiceNow', level: 90, description: 'Incident management and ticketing systems' },
      { name: 'Batch Processing', level: 88, description: 'Batch job scheduling and monitoring' },
      { name: 'SLA Management', level: 85, description: 'Service level agreement compliance' },
      { name: 'Root Cause Analysis', level: 90, description: 'Problem diagnosis and resolution' },
      { name: 'Incident Response', level: 88, description: 'Critical incident management and recovery' }
    ]
  },
  {
    category: 'Development Skills',
    icon: Code,
    color: 'from-zinc-600 to-zinc-700',
    skills: [
      { name: 'Python', level: 85, description: 'Automation, scripting, and web development' },
      { name: 'JavaScript', level: 80, description: 'Web application development and APIs' },
      { name: 'Node.js', level: 75, description: 'Server-side JavaScript development' },
      { name: 'React', level: 78, description: 'Modern web application frameworks' },
      { name: 'Web Applications', level: 80, description: 'Full-stack web development' }
    ]
  },
  {
    category: 'Project Management',
    icon: Users,
    color: 'from-stone-600 to-stone-700',
    skills: [
      { name: 'Agile Methodology', level: 85, description: 'Scrum and Kanban project management' },
      { name: 'Team Leadership', level: 80, description: 'Cross-functional team coordination' },
      { name: 'Stakeholder Management', level: 82, description: 'Client and business stakeholder communication' },
      { name: 'Risk Assessment', level: 78, description: 'Project risk identification and mitigation' },
      { name: 'Resource Planning', level: 80, description: 'Project timeline and resource allocation' }
    ]
  },
  {
    category: 'Branding & Marketing',
    icon: TrendingUp,
    color: 'from-slate-500 to-slate-600',
    skills: [
      { name: 'Tech Product Marketing', level: 82, description: 'Marketing strategies for technical products' },
      { name: 'Brand Development', level: 78, description: 'Brand identity and positioning for tech companies' },
      { name: 'Digital Marketing', level: 80, description: 'Online marketing campaigns and analytics' },
      { name: 'Content Strategy', level: 75, description: 'Technical content creation and strategy' },
      { name: 'Market Analysis', level: 80, description: 'Competitive analysis and market research' }
    ]
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-gray-700 to-gray-800',
    skills: [
      { name: 'SIEM Tools', level: 85, description: 'Security information and event management' },
      { name: 'Threat Analysis', level: 80, description: 'Security threat assessment and analysis' },
      { name: 'Security Audits', level: 82, description: 'System security auditing and compliance' },
      { name: 'Malware Analysis', level: 75, description: 'Malware detection and analysis' },
      { name: 'Incident Response', level: 85, description: 'Security incident management' }
    ]
  },
  {
    category: 'Tools & Platforms',
    icon: Cloud,
    color: 'from-neutral-500 to-neutral-600',
    skills: [
      { name: 'Kafka', level: 85, description: 'Message streaming and data pipelines' },
      { name: 'OTIS', level: 80, description: 'IBM operational tools and systems' },
      { name: 'IBM Tools', level: 85, description: 'IBM enterprise software suite' },
      { name: 'Git', level: 80, description: 'Version control and collaboration' },
      { name: 'APIs', level: 78, description: 'API integration and development' }
    ]
  }
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeCategory === index
                    ? 'glass-card bg-primary/10 text-primary border-primary/20'
                    : 'glass-card hover:bg-white/5 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills */}
        <div className="glass-card p-8">
          <div className="flex items-center mb-8">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color} mr-4`}>
              {(() => {
                const Icon = skillCategories[activeCategory].icon;
                return <Icon className="w-6 h-6 text-white" />;
              })()}
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {skillCategories[activeCategory].category}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-muted/20 rounded-full h-2 mb-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
                
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}