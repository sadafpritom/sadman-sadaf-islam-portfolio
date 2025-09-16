"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ExternalLink, Camera } from 'lucide-react';
import { TechStack } from '@/components/tech-stack';

const titles = [
  "Technical Support Specialist",
  "Unix Server Administrator", 
  "Database Management Expert",
  "Cybersecurity Graduate",
  "Photography Enthusiast"
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const current = titles[currentTitle];
      
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Sadman Sadaf Islam</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              <span className="text-blue-400">{displayText}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Technical Analyst | Unix Server Administrator | Threat Researcher
            <br />
            <br/>
            <span className="text-foreground font-medium">
              Specialized in production support, server administration, and financial systems infrastructure with a core passion
              to harden all the modern security daily activity over internet and darkweb. I try to hack myself always! 
            </span>
          </p>
        </div>

        <div className="stagger-container flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="lg" className="stagger-animation glow-effect group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Contact Me
          </Button>
          
          <a
            href="/docs/Sadman_Sadaf_Islam.pdf"
            download="Sadman_Sadaf_Islam.pdf"
          >
           <Button 
             size="lg"
             variant="outline"
             className="stagger-animation glass-card border-primary/20 hover:border-primary/40"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>

          </a>
          {/* <Button 
            size="lg" variant="outline" className="stagger-animation glass-card border-primary/20 hover:border-primary/40" onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>
            <Download className="w-5 h-5 mr-2" />
            View CV
          </Button> */}
          
          <div className="flex space-x-2">
            <Button size="lg" variant="ghost" className="stagger-animation p-3 glass-card hover:bg-primary/10" onClick={() => window.open('https://www.linkedin.com/in/sadman-sadaf-islam/', '_blank')}>
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="ghost" className="stagger-animation p-3 glass-card hover:bg-primary/10" onClick={() => window.open('https://github.com/sadafpritom', '_blank')}>
              <Github className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="ghost" className="stagger-animation p-3 glass-card hover:bg-primary/10" onClick={() => window.open('https://www.flickr.com/photos/197730320@N05/', '_blank')}>
              <Camera className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}