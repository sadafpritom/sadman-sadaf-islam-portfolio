"use client"

import { Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'TD Bank',
    position: 'Technical Analyst IV – Credit Risk Systems',
    duration: 'September 2024 - Present',
    location: 'Toronto, Canada',
    type: 'Full-time',
    description: 'Providing front-line production support for critical banking applications, maintaining seamless operations across complex batch flows and data pipelines.',
    achievements: [
      'Resolved high-impact incidents involving batch job failures and database service interruptions',
      'Managed Unix-based server infrastructure with regular log reviews and root cause analysis',
      'Supported enterprise-wide applications for credit market risk analysis',
      'Led incident recovery efforts and contributed to internal documentation/playbooks',
      'Maintained Kafka message flows, Dash servers, and API-dependent data feeds',
      'Delivered monthly SLA and incident reports using internal visualization tools'
    ],
    technologies: ['Unix/Linux', 'ServiceNow', 'Kafka', 'SQL', 'DB2', 'IBM Tools', 'Shell Scripting']
  },
  {
    company: 'MiPropertyPortal',
    position: 'Technical Support Engineer',
    duration: 'October 2022 - September 2024',
    location: 'Toronto, Canada',
    type: 'Full-time',
    description: 'Administered Unix-based servers and provided technical support for financial and real estate management applications across hybrid infrastructure.',
    achievements: [
      'Led migration of legacy databases to scalable platforms, resulting in 30% performance increase',
      'Implemented real-time monitoring systems, reducing unplanned downtime by 40%',
      'Handled root cause investigations and implemented preventative measures',
      'Supported users with server access, batch execution, and large query tuning'
    ],
    technologies: ['Unix/Linux', 'MySQL', 'Python', 'Shell Scripting', 'SIEM Tools', 'Database Tuning']
  },
  {
    company: 'Leads Corporation Ltd.',
    position: 'Server Support Specialist',
    duration: 'February 2019 - September 2022',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Provided production and server support for a large banking institution with heavy transaction processing needs.',
    achievements: [
      'Administered Unix-based servers ensuring high availability and reliability',
      'Oversaw batch processing flows, improving execution accuracy and reducing job failures by 20%',
      'Conducted SQL database optimization, performance tuning, and backups',
      'Produced documentation for system maintenance and recovery processes'
    ],
    technologies: ['Unix/Linux', 'SQL', 'DB2', 'Shell Scripting', 'Batch Processing', 'System Administration']
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles in technology, from freelance development to 
            enterprise-level financial systems
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 glass-card p-8 glass-card-hover">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.position}</h3>
                      <h4 className="text-xl text-primary font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}