"use client"

import { useState, useEffect } from 'react';
import { Code, Server, Shield, Cloud, Database, Activity, Users, TrendingUp } from 'lucide-react';

// Refreshed skill categories with a more vibrant and modern color palette
const skillCategories = [
  {
    category: 'Server & Cloud',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Unix/Linux Systems', level: 95, description: 'Advanced administration, maintenance, and security hardening.' },
      { name: 'Cloud Infrastructure (AWS)', level: 85, description: 'Architecting scalable and resilient cloud solutions.' },
      { name: 'Terraform (IaC)', level: 88, description: 'Automating infrastructure provisioning and management.' },
      { name: 'Shell Scripting', level: 90, description: 'Creating complex scripts for automation and process optimization.' },
      { name: 'System Monitoring', level: 85, description: 'Real-time performance monitoring with Prometheus & Grafana.' }
    ]
  },
  {
    category: 'Database Management',
    icon: Database,
    color: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'DB2', level: 90, description: 'High-availability administration and optimization for enterprise systems.' },
      { name: 'MySQL & PostgreSQL', level: 85, description: 'Relational database management, design, and tuning.' },
      { name: 'SQL Optimization', level: 88, description: 'Advanced query optimization and performance tuning.' },
      { name: 'Backup & Recovery', level: 90, description: 'Implementing robust backup strategies and disaster recovery plans.' },
      { name: 'Performance Monitoring', level: 85, description: 'In-depth database performance analysis and monitoring.' }
    ]
  },
  {
    category: 'Production Support',
    icon: Activity,
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'ServiceNow & ITIL', level: 90, description: 'Expertise in incident, problem, and change management.' },
      { name: 'Batch Processing', level: 88, description: 'Managing and optimizing large-scale batch job schedules.' },
      { name: 'SLA Management', level: 85, description: 'Ensuring and reporting on service level agreement compliance.' },
      { name: 'Root Cause Analysis', level: 90, description: 'Systematic problem diagnosis and permanent resolution.' },
      { name: 'High-Pressure Incident Response', level: 92, description: 'Leading recovery efforts for critical system incidents.' }
    ]
  },
  {
    category: 'Development & DevOps',
    icon: Code,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Python', level: 85, description: 'Scripting for automation, backend services, and data tasks.' },
      { name: 'Docker & Kubernetes', level: 80, description: 'Containerizing applications and orchestrating at scale.' },
      { name: 'CI/CD Pipelines', level: 82, description: 'Automating build, test, and deploy cycles with GitHub Actions.' },
      { name: 'React & Next.js', level: 78, description: 'Building modern, performant web applications.' },
      { name: 'API Integration', level: 80, description: 'Connecting and consuming RESTful and GraphQL APIs.' }
    ]
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-rose-500 to-red-500',
    skills: [
      { name: 'SIEM Tools', level: 85, description: 'Security information and event management for threat detection.' },
      { name: 'Threat Analysis', level: 80, description: 'Assessing and analyzing potential security threats.' },
      { name: 'Vulnerability Management', level: 82, description: 'Identifying and mitigating system vulnerabilities.' },
      { name: 'Network Security', level: 78, description: 'Implementing firewalls, IDS/IPS, and secure network design.' },
      { name: 'Security Incident Response', level: 85, description: 'Managing and responding to security breaches and incidents.' }
    ]
  },
  {
    category: 'Project & Product',
    icon: Users,
    color: 'from-teal-500 to-cyan-600',
    skills: [
      { name: 'Agile Methodology', level: 85, description: 'Practicing Scrum and Kanban for effective project management.' },
      { name: 'Team Leadership', level: 80, description: 'Guiding and coordinating cross-functional technical teams.' },
      { name: 'Stakeholder Communication', level: 82, description: 'Translating technical concepts for business stakeholders.' },
      { name: 'Tech Product Marketing', level: 82, description: 'Go-to-market strategies for technical products.' },
      { name: 'Brand Development', level: 78, description: 'Crafting brand identity and positioning for tech companies.' }
    ]
  },
];

// Helper component for the animated percentage counter
const AnimatedCounter = ({ target, colorClass, startAnimation }) => {
  const [count, setCount] = useState(0);
  const duration = 1000; // Animation duration in ms

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    let startTime = null;
    const end = parseInt(target);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentVal = Math.floor(progress * end);
      setCount(currentVal);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, startAnimation]);

  return (
    <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${colorClass}`}>
      {count}%
    </span>
  );
};


export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animate, setAnimate] = useState(false);

  // By giving the skills container a key that changes, we can re-trigger animations
  const activeCategoryKey = skillCategories[activeCategory].category;

  useEffect(() => {
    // Reset and then trigger the animation for the progress bars when the category changes
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 150); // A small delay ensures the transition is smooth
    return () => clearTimeout(timer);
  }, [activeCategoryKey]);


  return (
    <>
      {/* Custom CSS for animations and scrollbar styling */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .horizontal-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .horizontal-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .progress-bar-fill {
          position: relative;
          overflow: hidden;
        }
        .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
          background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
          animation: shimmer 2s infinite;
        }
      `}</style>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical capabilities across various domains.
            </p>
          </div>

          {/* Category Tabs with horizontal scroll on mobile */}
          <div className="mb-12">
            <div className="w-full">
                <div className="flex space-x-2 pb-4 overflow-x-auto horizontal-scrollbar px-4 sm:px-6 lg:px-0">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                        activeCategory === index
                          ? 'glass-card bg-primary/10 text-primary border-primary/20 scale-105'
                          : 'glass-card hover:bg-white/5 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium whitespace-nowrap">{category.category}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Category Skills */}
          <div key={activeCategoryKey} className="glass-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className={`p-3 rounded-lg bg-gradient-to-br ${skillCategories[activeCategory].color} mr-4 shadow-lg`}>
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
                <div 
                  key={skill.name} 
                  className="glass-card p-6 rounded-xl group hover:bg-white/5 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${(index * 0.1) + 0.2}s`, opacity: 0 }} // Initial opacity 0 for animation
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                    <AnimatedCounter 
                      target={skill.level}
                      colorClass={skillCategories[activeCategory].color}
                      startAnimation={animate}
                    />
                  </div>
                  
                  <div className="w-full bg-muted/20 rounded-full h-2.5 mb-3 overflow-hidden">
                    <div 
                      className={`progress-bar-fill h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-[width] duration-1000 ease-out`}
                      style={{ 
                        width: animate ? `${skill.level}%` : '0%',
                      }}
                    />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

