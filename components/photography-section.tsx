"use client";

import Image from "next/image";
import {
  Camera,
  Mountain,
  Star,
  Building,
  User,
  Play,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Photography Categories ---
const photographyCategories = [
  {
    name: "Landscape",
    icon: Mountain,
    description: "Capturing the beauty of natural landscapes",
    count: 100,
  },
  {
    name: "Street",
    icon: Star,
    description: "Story-telling through candid urban moments",
    count: 100,
  },
  {
    name: "Architecture",
    icon: Building,
    description: "Urban and architectural photography",
    count: 120,
  },
  {
    name: "Aerial",
    icon: User,
    description: "Professional and Commercial Aerials",
    count: 30,
  },
  {
    name: "Astrophotography",
    icon: Play,
    description: "Stargazing and celestial captures",
    count: 35,
  },
];

// --- Featured Work ---
const featuredWork = [
  {
    title: "Aerial Photography",
    category: "Aerial",
    description:
      "Sweeping views captured from above, revealing patterns and perspectives unseen from the ground.",
    equipment: "DJI Mini 3, CMOS Sensor",
    settings: "ISO 100, f/1.7, 1/25s",
    image: "/images/Aerial.webp",
  },
  {
    title: "Architecture Photography",
    category: "Architecture",
    description:
      "Precise lines and striking forms that highlight the beauty and symmetry of human-made structures.",
    equipment: "Sony A7iii, Viltrox 16mm f1.8 FE",
    settings: "ISO 400, f/4.5, 1/50s",
    image: "/images/Architecture.webp",
  },
  {
    title: "Wildlife Photography",
    category: "Wildlife",
    description:
      "Moments of untamed nature, capturing rare expressions of animals in their natural habitats and streets.",
    equipment: "Sony A7iii, Sony 70-300mm f4.5-5.6 G OSS",
    settings: "ISO 400, f/13, 1/50s",
    image: "/images/Wildlife.webp",
  },
  {
    title: "Street Photography",
    category: "Street",
    description:
      "Candid glimpses of urban life that preserve authentic human emotion and fleeting city moments.",
    equipment: "Sony A7iii, Sony 70-300mm f4.5-5.6 G OSS",
    settings: "ISO 400, f/5.6, 1/2000s",
    image: "/images/Street.webp",
  },
  {
    title: "Landscape Photography",
    category: "Landscape",
    description:
      "Expansive horizons and natural wonders rendered with vivid light and atmospheric depth.",
    equipment: "Sony A7iii, Sony 70-300mm f4.5-5.6 G OSS",
    settings: "ISO 500, f/6.3, 1/400s",
    image: "/images/Landscape.webp",
  },
  {
    title: "Portrait Photography",
    category: "Portrait",
    description:
      "Striking portraits that combine natural expression with carefully crafted lighting and detail.",
    equipment: "Sony A7iii, Sigma 45mm f2.8 DG DN",
    settings: "ISO 3200, f/4.5, 1/1250s",
    image: "/images/Portrait.webp",
  },
];

export function PhotographySection() {
  return (
    <section id="photography" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Photography & Cinematography
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beyond my technical expertise, I'm passionate about visual
            storytelling through photography and cinematography. Specializing in
            landscape, street, aerial, astrophotography, architecture, and portrait work, I
            combine technical precision with creative vision to capture
            compelling imagery.
          </p>
        </div>

        {/* Photography Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {photographyCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center glass-card-hover group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <div className="text-2xl font-bold gradient-text">
                  {category.count}+
                </div>
                <div className="text-xs text-muted-foreground">Photos</div>
              </div>
            );
          })}
        </div>

        {/* Featured Work */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Featured Work
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredWork.map((work, index) => (
              <div key={index} className="glass-card p-6 glass-card-hover">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="text-lg font-bold text-foreground mb-3">
                  {work.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4">
                  {work.description}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Camera className="w-3 h-3 mr-2" />
                    <span>{work.equipment}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-2" />
                    <span>{work.settings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Portfolio Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="glow-effect mr-4"
            onClick={() =>
              window.open(
                "https://www.flickr.com/photos/197730320@N05/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Eye className="w-5 h-5 mr-2" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
