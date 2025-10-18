"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  LayoutGrid, 
  BrainCircuit, 
  Shield, 
  Briefcase,
  Link as LinkIcon, // Renamed to avoid conflict with Next.js Link
  HeartPulse,
  Layers 
} from "lucide-react";

// Revised project categories with dedicated icons for a better UI
const projectCategories = [
  { name: "All", icon: LayoutGrid },
  { name: "AI & Machine Learning", icon: BrainCircuit },
  { name: "Cybersecurity", icon: Shield },
  { name: "Management Systems", icon: Briefcase },
  { name: "Blockchain", icon: LinkIcon },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Full Stack", icon: Layers },
];

const projects = [
  // --- Existing Projects (Re-categorized) ---
  {
    id: 1,
    title: "App Health Monitor Dashboard",
    description: "Centralized dashboard for monitoring app uptime, performance metrics, and real-time error tracking across environments.",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "MySQL", "TailwindCSS"],
    image: "/images/AHM_Thumbnail.webp",
    liveUrl: "https://app-health-monitor-dashboard.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/App-Health-Monitor-Dashboard",
    featured: false,
  },
  {
    id: 2,
    title: "AI Incident Analyser",
    description: "AI-powered tool for classifying, prioritizing, and suggesting remediation steps for IT incidents in real-time.",
    category: "AI & Machine Learning",
    technologies: ["Python", "TensorFlow", "FastAPI", "MongoDB"],
    image: "/images/AIIA_Thumbnail.webp",
    liveUrl: "https://ai-incident-classifier.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/AI-Incident-Classifier",
    featured: false,
  },
  {
    id: 3,
    title: "AI Troubleshooter",
    description: "Virtual AI assistant that analyzes logs and system metrics to detect issues and recommend troubleshooting steps.",
    category: "AI & Machine Learning",
    technologies: ["Python", "PyTorch", "Flask", "React"],
    image: "/images/AITS_Thumbnail.webp",
    liveUrl: "https://ai-troubleshooter.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/AI-Troubleshooter",
    featured: false,
  },
  {
    id: 4,
    title: "Blockchain Transaction Network",
    description: "Decentralized platform for simulating blockchain transactions with live validation and smart contract support.",
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    image: "/images/BTN_Thumbnail.webp",
    liveUrl: "https://blockchain-transaction-visualizer-six.vercel.app/",
    githubUrl: "https://github.com/sadafpritom/Blockchain-Transaction-Visualizer",
    featured: false,
  },
  {
    id: 5,
    title: "Cryptocurrency Portfolio and NFT Dashboard",
    description: "Interactive dashboard for tracking crypto prices, NFT collections, and portfolio performance in real-time.",
    category: "Blockchain",
    technologies: ["Next.js", "TypeScript", "Web3.js", "MongoDB"],
    image: "/images/CPND_Thumbnail.webp",
    liveUrl: "https://crypto-portfolio-and-nft-dashboard.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Crypto-Portfolio-and-nft-dashboard",
    featured: false,
  },
  {
    id: 6,
    title: "Database Query Analyzer",
    description: "Automated query optimization and performance analyzer with indexing recommendations and execution plan insights.",
    category: "Full Stack",
    technologies: ["Python", "PostgreSQL", "React", "Docker"],
    image: "/images/DBQA_Thumbnail.webp",
    liveUrl: "https://db-query-analyzer.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/DB-Query-Analyzer",
    featured: false,
  },
  {
    id: 7,
    title: "Futuristic Server Health Monitoring System",
    description: "Next-gen monitoring platform with predictive analytics, anomaly detection, and AI-driven performance tuning.",
    category: "AI & Machine Learning",
    technologies: ["Python", "Scikit-learn", "Kafka", "Grafana"],
    image: "/images/FSHM_Thumbnail.webp",
    liveUrl: "https://futuristic-server-health-monitoring.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Futuristic-Server-Health-Monitoring-Panel",
    featured: true,
  },
  {
    id: 8,
    title: "Futuristic AI Startup Landing Page",
    description: "Modern, responsive landing page design tailored for AI startups with animations and interactive components.",
    category: "Full Stack",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/images/Futuristic_AI_Startup_Thumbnail.webp",
    liveUrl: "https://futuristic-ai-startup.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/AI-Startup-Landing-Page",
    featured: false,
  },
  {
    id: 9,
    title: "Interactive Command Line Terminal",
    description: "Web-based interactive terminal emulator for executing Linux commands and simulating real-world CLI environments.",
    category: "Full Stack",
    technologies: ["JavaScript", "xterm.js", "Node.js", "Express"],
    image: "/images/ICLT_Thumbnail.webp",
    liveUrl: "https://interactive-command-line-simulator.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Interactive-Command-Line-Simulator",
    featured: false,
  },
  {
    id: 10,
    title: "IT Helpdesk Ticketing Dashboard",
    description: "Custom helpdesk solution with ticket tracking, SLA monitoring, and AI-based priority classification.",
    category: "Management Systems",
    technologies: ["Next.js", "MongoDB", "Node.js", "TailwindCSS"],
    image: "/images/ITHTD_Thumbnail.webp",
    liveUrl: "https://modern-it-ticketing-helpdesk.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Modern-IT-Ticket-Helpdesk",
    featured: false,
  },
  {
    id: 11,
    title: "OSCP Journey Tracker Notebook",
    description: "Personalized study and progress tracking dashboard for OSCP preparation with notes and lab exercise tracking.",
    category: "Cybersecurity",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/images/OSCP_Exam_Prep_Thumbnail.webp",
    liveUrl: "https://oscp-exam-prep-tracker.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/OSCP-Exam-Prep-Tracker",
    featured: false,
  },
  {
    id: 12,
    title: "Phishing Awareness Training App",
    description: "Educational web app that simulates phishing attacks to train users on recognizing and avoiding threats.",
    category: "Cybersecurity",
    technologies: ["Next.js", "PostgreSQL", "Node.js"],
    image: "/images/PAT_Thumbnail.webp",
    liveUrl: "https://phishing-awareness-training-project.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Phishing-Awareness-Training",
    featured: false,
  },
  {
    id: 13,
    title: "Project Management Dashboard",
    description: "Task and project management system with Kanban boards, timeline views, and team collaboration features.",
    category: "Management Systems",
    technologies: ["React", "Firebase", "TailwindCSS"],
    image: "/images/PM_Dashboard_Thumbnail.webp",
    liveUrl: "https://modern-pm.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Modern-Project-Management-Dashboard",
    featured: true,
  },
  {
    id: 14,
    title: "Password Strength Analyzer And Generator",
    description: "Web app that evaluates password strength in real-time and suggests secure, user-friendly alternatives.",
    category: "Cybersecurity",
    technologies: ["JavaScript", "Node.js", "React"],
    image: "/images/PSA_Thumbnail.webp",
    liveUrl: "https://password-strength-checker-app-info.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Password-Strength-Analyzer",
    featured: false,
  },
  {
    id: 15,
    title: "Red Team Cyber Attack Map with Telemetry",
    description: "Visualization dashboard that maps cyber attacks globally in real-time using simulated red team telemetry.",
    category: "Cybersecurity",
    technologies: ["D3.js", "Node.js", "React"],
    image: "/images/RTCAM_Thumbnail.webp",
    liveUrl: "https://red-team-cyber-attack-map.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Red-Team-Cyber-Attack-Map",
    featured: false,
  },
  {
    id: 16,
    title: "SaaS Admin Dashboard",
    description: "Admin dashboard template for SaaS platforms with analytics, user management, and billing integrations.",
    category: "Management Systems",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/images/SAASAD_Thumbnail.webp",
    liveUrl: "https://saas-admin-dashboard.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Saas-Admin-Dashboard",
    featured: true,
  },
  {
    id: 17,
    title: "SOC Response Platform",
    description: "Security operations center platform designed to automate response playbooks, alerts, and incident workflows.",
    category: "Cybersecurity",
    technologies: ["Python", "FastAPI", "Elasticsearch"],
    image: "/images/SOCIRW_Thumbnail.webp",
    liveUrl: "https://soc-incident-response-workflow-tool.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/SOC-Incident-Workflow-Tool",
    featured: true,
  },
  {
    id: 18,
    title: "Threat Intelligence Dashboard",
    description: "Cyber threat intelligence platform with real-time feed integration, attack categorization, and alerting.",
    category: "Cybersecurity",
    technologies: ["Python", "Elasticsearch", "React"],
    image: "/images/TID_Thumbnail.webp",
    liveUrl: "https://threat-intelligence-dashboard-app.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Threat-Intelligence-Dashboard",
    featured: false,
  },
  {
    id: 19,
    title: "Unix Server Optimization Professional App",
    description: "Lightweight application for automated Unix server tuning, patching, and system optimization at scale.",
    category: "Full Stack",
    technologies: ["Python", "Shell Scripting", "Unix/Linux"],
    image: "/images/USO_Hero_Thumbnail.webp",
    liveUrl: "https://unix-server-optimization.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Unix-Server-Optimization",
    featured: false,
  },
  {
    id: 20,
    title: "Vulnerability Scanner Simulator App",
    description: "Security scanning tool that detects system vulnerabilities, misconfigurations, and outdated dependencies.",
    category: "Cybersecurity",
    technologies: ["Python", "Flask", "React"],
    image: "/images/VS_Thumbnail.webp",
    liveUrl: "https://vulnerability-scanner.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Modern-Vulnerability-Scanner",
    featured: true,
  },
  {
    id: 21,
    title: "Telemedicine and Clinic Management App",
    description: "End-to-end healthcare platform enabling remote consultations, appointment scheduling, patient records, and secure telemedicine services.",
    category: "Healthcare",
    technologies: ["React Native", "Node.js", "MongoDB"],
    image: "/images/TCM_Thumbnail.webp",
    liveUrl: "https://telemedicine-and-clinic-management.vercel.app/",
    githubUrl: "https://github.com/sadafpritom/Telemedicine-and-Clinic-Management-Portal",
    featured: true,
  },
  {
    id: 22,
    title: "SOC Analyst Simulation Platform",
    description: "A next-gen cybersecurity lab that simulates real SOC incidents, enabling analysts to detect, respond, and mitigate threats efficiently.",
    category: "Cybersecurity",
    technologies: ["React", "Node.js", "WebSocket", "Docker"],
    image: "/images/SS_Thumbnail.webp",
    liveUrl: "https://soc-analyst-simulation-platform.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/SOC-Analyst-Simulation-Platform",
    featured: true,
  },
  {
    id: 23,
    title: "Landlord and Tenant Portal",
    description: "A secure property management system streamlining rent collection, maintenance tracking, and communication between landlords and tenants.",
    category: "Management Systems",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    image: "/images/SPM_Thumbnail.webp",
    liveUrl: "https://landlord-and-tenant-portal.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Property-Management-Platform",
    featured: false,
  },
  {
    id: 24,
    title: "Professional Workflow Automation",
    description: "An AI-powered platform automating business workflows, reducing manual effort, and boosting organizational productivity and accuracy.",
    category: "AI & Machine Learning",
    technologies: ["Python", "FastAPI", "React", "Celery"],
    image: "/images/WA_Thumbnail.webp",
    liveUrl: "https://professional-workflow-automation.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Professional-Workflow-Automation-",
    featured: true,
  },
  {
    id: 25,
    title: "Pentesting Engagement Platform",
    description: "A complete vulnerability assessment tool that manages penetration tests, reports findings, and enhances enterprise security posture.",
    category: "Cybersecurity",
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/images/PEP_Thumbnail.webp",
    liveUrl: "https://pentesting-engagement-platform.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Pentesting-Engagement-Platform",
    featured: false,
  },
  {
    id: 26,
    title: "Logistics Management Dashboard",
    description: "A real-time logistics intelligence system optimizing fleet operations, shipment tracking, and warehouse performance analytics.",
    category: "Management Systems",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    image: "/images/LMD_Thumbnail.webp",
    liveUrl: "https://logistics-management-dashboard.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Logistics-Management-Dashboard-",
    featured: true,
  },
  {
    id: 27,
    title: "IT Support Portal",
    description: "An integrated helpdesk system that automates ticket management, tracks SLA performance, and improves IT service delivery efficiency.",
    category: "Management Systems",
    technologies: ["Vue.js", "Firebase", "TailwindCSS"],
    image: "/images/ITSE_Thumbnail.webp",
    liveUrl: "https://it-support-portal.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/IT-Support-Portal",
    featured: false,
  },
  {
    id: 28,
    title: "Healthcare Records Portal",
    description: "A HIPAA-compliant platform for managing patient data, ensuring secure access, efficient workflows, and smart clinical decision support.",
    category: "Healthcare",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "/images/HP_Thumbnail.webp",
    liveUrl: "https://healthcare-records-portal.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Healthcare-Records-Portal",
    featured: true,
  },
  {
    id: 29,
    title: "CryptoVault Application",
    description: "A blockchain-secured crypto management tool offering portfolio insights, real-time analytics, and advanced wallet-level protection.",
    category: "Blockchain",
    technologies: ["React", "Web3.js", "Node.js", "Ethers.js"],
    image: "/images/CV_Thumbnail.webp",
    liveUrl: "https://cryptovault-application.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Cryptovault",
    featured: false,
  },
  {
    id: 30,
    title: "Construction ERP Dashboard",
    description: "An enterprise-grade construction management suite tracking budgets, schedules, and on-site resources for optimized project delivery.",
    category: "Management Systems",
    technologies: ["React", "Django", "PostgreSQL", "D3.js"],
    image: "/images/CERPD_Thumbnail.webp",
    liveUrl: "https://construction-erp-dashboard.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Construction-ERP-Dashboard",
    featured: false,
  },
  {
    id: 31,
    title: "AI Student Learning Portal",
    description: "An adaptive e-learning platform that uses AI to personalize study paths, track progress, and enhance knowledge retention effectively.",
    category: "AI & Machine Learning",
    technologies: ["Python", "PyTorch", "Next.js", "MongoDB"],
    image: "/images/AISLP_Thumbnail.webp",
    liveUrl: "https://ai-student-learning-portal.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/AI-Student-Learning-Portal",
    featured: true,
  },
  {
    id: 32,
    title: "AI Mind Wellness",
    description: "An intelligent mental health platform leveraging AI for emotional analysis, guided therapy sessions, and personalized wellness tracking.",
    category: "AI & Machine Learning",
    technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
    image: "/images/AIMW_Thumbnail.webp",
    liveUrl: "https://ai-mind-wellness.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/AI-Powered-Mental-Wellness-Platform",
    featured: true,
  },
  {
    id: 33,
    title: "Template Portfolio Builder",
    description: "A responsive portfolio generator empowering professionals to design, customize, and deploy stunning websites instantly and seamlessly.",
    category: "Full Stack",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    image: "/images/PB_Thumbnail.webp",
    liveUrl: "https://template-portfolio-builder.netlify.app/",
    githubUrl: "https://github.com/sadafpritom/Portfolio-builder",
    featured: false,
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? [...projects].sort((a, b) => a.title.localeCompare(b.title))
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across different domains, from blockchain
            applications to cybersecurity tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.name
                    ? "glass-card bg-primary/10 text-primary border-primary/20"
                    : "glass-card hover:bg-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-6 glass-card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div
                className="rounded-lg mb-4 overflow-hidden relative"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex space-x-2">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild size="sm" className="flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="glass-card border-primary/20"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
