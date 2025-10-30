// app/page.tsx

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { PhotographySection } from '@/components/photography-section';
import { ExperienceSection } from '@/components/experience-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sadman Sadaf Islam",
  "url": "https://www.sadmansadaf.com",
  "jobTitle": "Technical Support Specialist & Unix Server Administrator",
  "alumniOf": "George Brown College", // 👈 IMPORTANT: Replace this
  "gender": "Male", // Optional: Remove if you prefer not to include
  "address": {
    "@type": "M4C5L9",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  // You can add social media links here for better Knowledge Panel visibility
  "sameAs": [
    "https://linkedin.com/in/sadman-sadaf-islam", // 👈 IMPORTANT: Replace with your actual LinkedIn
    "https://github.com/sadafpritom", // 👈 IMPORTANT: Replace with your actual GitHub
    // "https://twitter.com/your-twitter", // Add if applicable
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* End JSON-LD Script */}
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PhotographySection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}