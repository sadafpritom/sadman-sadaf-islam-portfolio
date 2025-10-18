"use client"

import { GraduationCap, Briefcase, Heart, Award } from 'lucide-react';

const timelineEvents = [
  {
    year: 'Sep 2024 - Sep 2025',
    title: 'Technical Analyst IV – Credit Risk Systems',
    company: 'TD Bank',
    description: 'Providing front-line production support for critical banking applications, maintaining seamless operations across complex batch flows and data pipelines. Managing Unix-based server infrastructure and resolving high-impact incidents.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: 'Oct 2022 - Sep 2024',
    title: 'Technical Support Engineer',
    company: 'MiPropertyPortal',
    description: 'Administered Unix-based servers and provided technical support for financial and real estate management applications. Led database migrations resulting in 30% performance increase.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: 'Feb 2019 - Sep 2022',
    title: 'Server Support Specialist',
    company: 'Leads Corporation Ltd.',
    description: 'Provided production and server support for a large banking institution with heavy transaction processing needs. Improved batch processing accuracy and reduced job failures by 20%.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2023',
    title: 'Advanced Postgraduate Diploma in Cybersecurity',
    company: 'George Brown College',
    description: 'Advanced studies in cybersecurity, threat analysis, and security infrastructure.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2020',
    title: 'Bachelor of Science in Computer Science and Engineering',
    company: 'East West University',
    description: 'Comprehensive studies in computer science, software engineering, and system design.',
    icon: GraduationCap,
    type: 'education'
  }
];

const funFacts = [
  { label: 'Years of Experience', value: '5+', icon: Award },
  { label: 'Live Projects', value: '33+', icon: Briefcase },
  { label: 'Technologies Mastered', value: '25+', icon: Heart },
  /* { label: 'Uptime Maintained', value: '99.9%', icon: GraduationCap } */
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated Technical Support Specialist with expertise in Unix server administration, database management, shell scripting
            and production support for critical financial systems. Passionate about Penetration Testing, Red-teaming and Malware reverse Engineering.
            Working in own start-up based on Real Estates, with an evening coffee.

          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-foreground">My Journey</h3>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="flex group">
                    <div className="flex flex-col items-center mr-6">
                      <div className={`p-3 rounded-full glass-card ${
                        event.type === 'work' ? 'bg-blue-500/10' : 'bg-purple-500/10'
                      } group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${
                          event.type === 'work' ? 'text-blue-400' : 'text-purple-400'
                        }`} />
                      </div>
                      {index < timelineEvents.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                      )}
                    </div>
                    <div className="glass-card p-6 flex-1 glass-card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                        <span className="text-sm text-primary font-medium">{event.year}</span>
                      </div>
                      <p className="text-primary/80 font-medium mb-2">{event.company}</p>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fun Facts */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Facts</h3>
            <div className="space-y-6">
              {funFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div key={index} className="glass-card p-6 glass-card-hover text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </div>
                );
              })}
              
              <div className="glass-card p-6 space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Languages</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">English</span>
                    <span className="text-primary">Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bengali</span>
                    <span className="text-primary">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">French</span>
                    <span className="text-primary">Upto Bonjour!</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Interests</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📸 Landscape & Astrophotography</p>
                  <p>🎬 Cinematography & Commercials</p>
                  <p>💻 Web Application Development</p>
                  <p>🔒 Unix System Administration</p>
                  <p>⌨️ Ethical Hacking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}