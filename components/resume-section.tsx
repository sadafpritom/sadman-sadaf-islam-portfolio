"use client"

import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const resumeHighlights = [
  {
    category: 'Experience',
    icon: Briefcase,
    items: [
      'Technical Analyst IV at TD Bank',
      'Technical Support Engineer',
      'Server Support Specialist',
      '5+ Years in IT Industry'
    ]
  },
  {
    category: 'Education',
    icon: GraduationCap,
    items: [
      'Advanced Postgraduate Diploma in Cybersecurity',
      'Bachelor of Science in Computer Science and Engineering',
      'Edexcel GCE A-Level',
      'Continuous Learning & Development'
    ]
  },
  {
    category: 'Achievements',
    icon: Award,
    items: [
      '99.9% System Uptime Maintained',
      '30% Performance Improvement Achieved',
      '40% Downtime Reduction',
      '20% Job Failure Reduction'
    ]
  }
];

const skills = [
  'Unix Server Administration', 'Database Management', 'Production Support', 
  'Technical Analysis', 'System Monitoring', 'Batch Processing',
  'Incident Response', 'Shell Scripting', 'SQL Optimization', 'SIEM Tools', 'Penetration Testing', "OSINT", "Red Team"
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Curriculum Vitae
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete CV or view the key highlights of my professional journey
          </p>
        </div>

        {/* Resume Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="/docs/Sadman_Sadaf_Islam.pdf" download="Sadman_Sadaf_Islam.pdf">
            <Button
              size="lg"
              className="glow-effect group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download CV
           </Button>
         </a>
          <Button size="lg" variant="outline" className="glass-card border-primary/20 hover:border-primary/40" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
            <Eye className="w-5 h-5 mr-2" />
            View Experience
          </Button>
        </div>

        {/* Resume Preview */}
        <div className="glass-card p-8 mb-12">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-primary/10 mr-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Resume Highlights</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {resumeHighlights.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="w-5 h-5 text-primary mr-2" />
                    <h4 className="text-lg font-semibold text-foreground">{section.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Summary</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Technical Support Specialist with hands-on experience in Unix-based server administration, 
              database management, and large-scale transaction processing in financial environments. Currently serving 
              as a Technical Analyst IV at TD Bank, providing front-line production support for critical banking applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Adept at delivering top-tier production support for complex server infrastructures and SLA-sensitive 
              batch operations. Proven ability to troubleshoot critical issues under pressure and maintain seamless 
              uptime for banking systems with 99.9% reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Committed to leveraging a broad technical foundation to support and enhance enterprise-level 
              infrastructure, application reliability, and incident response in banking and financial sectors. 
              Also passionate about landscape photography and web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}