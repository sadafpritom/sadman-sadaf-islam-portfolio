"use client"

import { Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'SDO Custom Softwares',
    website: 'https://www.softwaredevelopmentontario.ca',
    position: 'Lead Infrastructure Engineer',
    duration: 'September 2025 - Present',
    location: 'Toronto, Canada',
    type: 'Full-time',
    description: 'Spearheading the design and implementation of a secure, scalable cloud infrastructure to support a new generation of AI and Cybersecurity software products. Focused on building a resilient foundation for rapid development and future growth.',
    achievements: [
      'Architected and deployed a multi-environment cloud infrastructure from the ground up using Infrastructure as Code (IaC) for consistency and reliability.',
      'Established a robust CI/CD pipeline, automating the build, testing, and deployment processes to accelerate development cycles.',
      'Implemented comprehensive monitoring and alerting systems to ensure high availability and proactive issue resolution.',
      'Developed and enforced security best practices, including network security, identity management, and data encryption protocols.',
      'Collaborated closely with the development team to optimize application performance and ensure seamless integration with the infrastructure.'
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Ansible']
  },
  {
    company: 'TD Bank',
    website: 'https://www.tdsecurities.com/ca/en',
    position: 'Technical Analyst IV',
    duration: 'September 2024 – August 2025',
    location: 'Toronto, Canada',
    type: 'Full-time',
    description: 'Served as a core member of the CMRT L1/L2 production support team, managing high-impact financial applications in a fast-paced, SLA-driven environment for credit market risk.',
    achievements: [
      'Led the resolution of critical incidents including batch failures, data feed delays, and server outages in real-time Unix environments.',
      'Provided end-to-end L2 support for the Raptor financial application, overseeing batch executions and troubleshooting data flow issues.',
      'Managed batch flow maintenance and scheduling for data pipelines using tools like Kafka, Autosys, and Dash Server.',
      'Utilized ServiceNow extensively to manage production incidents according to ITIL processes, driving root cause analysis and permanent fixes.',
      'Managed and processed upstream market and trade data feeds (including Sophis), ensuring data quality for downstream risk reporting.',
      'Praised by leadership for performance under pressure and exceptional cross-team communication during high-severity incidents.'
    ],
    technologies: ['Unix', 'ServiceNow', 'Kafka', 'Autosys', 'SQL', 'Sophis', 'Shell Scripting', 'Raptor']
  },
  {
    company: 'MiPropertyPortal',
    website: 'https://www.mipropertyportal.com',
    position: 'Technical Support Engineer',
    duration: 'October 2022 - August 2024',
    location: 'Toronto, Canada',
    type: 'Full-time',
    description: 'Provided Unix server administration and technical support for financial applications, managing both on-premises and cloud-based server infrastructures.',
    achievements: [
      'Spearheaded the migration of legacy database systems to scalable platforms, improving data processing capabilities by 30%.',
      'Implemented automated monitoring systems, reducing unplanned server and database downtime by 40%.',
      'Proactively maintained production, backup, and modeling servers through health checks, log analysis, and resource optimization.',
      'Conducted root cause analysis for recurring issues, implementing permanent fixes and process improvements.',
      'Restored legacy and archived datasets using IBM TBSM components to support high-priority batch reruns.',
      'Managed data ingestion pipelines from external feeds, ensuring accuracy and compliance for business-critical outputs.'
    ],
    technologies: ['Unix', 'Cloud Infrastructure', 'MySQL', 'Python', 'Monitoring Tools', 'IBM TBSM', 'Data Pipelines']
  },
  {
    company: 'Leads Corporation Ltd.',
    website: 'https://leads.com.bd/',
    position: 'Server Support Specialist',
    duration: 'February 2019 - September 2022',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Administered Unix-based servers for a major banking institution, focusing on maintaining high availability and security of transaction processing systems.',
    achievements: [
      'Designed and implemented batch processing schedules, improving the efficiency and reliability of transaction processing by 20%.',
      'Managed database administration tasks including performance tuning, backup management, and troubleshooting to ensure data integrity.',
      'Oversaw data flows from upstream banking systems, performing quality checks and troubleshooting anomalies to ensure data accuracy.',
      'Provided expert technical support for server and database-related issues, resolving critical incidents to minimize impact on banking operations.',
      'Developed and maintained comprehensive documentation for server environments, ensuring compliance with internal policies.'
    ],
    technologies: ['Unix', 'SQL', 'DB2', 'Shell Scripting', 'Batch Processing', 'System Administration']
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
            My journey through various roles in technology, from enterprise support to building cloud-native infrastructure.
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
                      <div className="flex items-center gap-x-2">
                        <h4 className="text-xl text-primary font-semibold">{exp.company}</h4>
                        {exp.website && (
                          <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
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