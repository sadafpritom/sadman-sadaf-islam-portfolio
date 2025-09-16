# Sadman Sadaf Islam - Technical Support Specialist Portfolio

A modern, responsive portfolio website showcasing expertise in Unix server administration, database management, production support, and cybersecurity. Built with Next.js 13, featuring glassmorphism design, 3D effects, and comprehensive sections highlighting professional experience in financial systems and technical support.

## 🚀 Features

- **Modern Design**: iOS-inspired liquid glass design with glassmorphism effects
- **Fully Responsive**: Mobile-first approach with perfect adaptation across all devices
- **Performance Optimized**: Built with Next.js 13 App Router for optimal performance
- **SEO Ready**: Complete SEO optimization with Open Graph tags and metadata
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Interactive Animations**: Smooth scroll animations and micro-interactions
- **Dark Theme**: Beautiful dark theme with perfect contrast ratios
- **Photography Showcase**: Dedicated section for landscape, astro, and portrait photography

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Typography**: Inter + JetBrains Mono
- **Animations**: CSS animations and transitions
- **Form Handling**: React Hook Form + Zod validation
- **Notifications**: Sonner

## 📋 Sections

1. **Hero** - Dynamic introduction with typing animation showcasing roles
2. **About** - Professional journey timeline and personal interests
3. **Skills** - Interactive skill categories with progress indicators
4. **Projects** - Unix systems, database management, and web development projects
5. **Photography** - Landscape, astrophotography, architecture, and portrait work
6. **Experience** - Professional timeline with TD Bank, MiPropertyPortal, and Leads Corporation
7. **Resume** - Professional summary and contact for resume requests
8. **Contact** - Interactive contact form with inquiry type selection

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sadmansadaf/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

Or use Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

## 🎨 Customization Guide

### Personal Information

#### Contact Details
Update contact information in `components/contact-section.tsx`:
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com', // Update this
    href: 'mailto:your-email@example.com'
  },
  // ... other contact info
];
```

#### Hero Section
Modify the hero content in `components/hero-section.tsx`:
```typescript
const titles = [
  "Your Title 1",
  "Your Title 2", 
  "Your Title 3",
  // Add your professional titles
];
```

### Experience & Education

#### Professional Experience
Update your work history in `components/experience-section.tsx`:
```typescript
const experiences = [
  {
    company: 'Your Company',
    position: 'Your Position',
    duration: 'Start Date - End Date',
    location: 'City, Country',
    type: 'Full-time', // or 'Contract', 'Part-time'
    description: 'Brief description of your role...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      // Add your achievements
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // Add more experiences
];
```

#### Education Timeline
Update education in `components/about-section.tsx`:
```typescript
const timelineEvents = [
  {
    year: 'Year',
    title: 'Degree Name',
    company: 'Institution Name',
    description: 'Description of your studies...',
    icon: GraduationCap,
    type: 'education'
  },
  // Add more education entries
];
```

### Skills & Technologies

#### Tech Stack
Update your technical skills in `components/tech-stack.tsx`:
```typescript
const techCategories = [
  {
    category: 'Your Category',
    icon: YourIcon, // Import from lucide-react
    color: 'from-color-500 to-color-500', // Tailwind gradient
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // Add more categories
];
```

#### Detailed Skills
Update skill levels in `components/skills-section.tsx`:
```typescript
const skillCategories = [
  {
    category: 'Category Name',
    icon: CategoryIcon,
    color: 'gradient-colors',
    skills: [
      { 
        name: 'Skill Name', 
        level: 85, // 0-100
        description: 'Description of your expertise' 
      },
      // Add more skills
    ]
  },
  // Add more categories
];
```

### Projects

#### Project Showcase
Update your projects in `components/projects-section.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description...',
    category: 'Category', // Must match projectCategories
    technologies: ['Tech1', 'Tech2'],
    image: '/path/to/image', // Optional
    liveUrl: 'https://project-url.com', // Optional
    githubUrl: 'https://github.com/username/repo', // Optional
    featured: true // Boolean
  },
  // Add more projects
];
```

### Photography Section

#### Photography Categories
Update photography work in `components/photography-section.tsx`:
```typescript
const photographyCategories = [
  {
    name: 'Category Name',
    icon: CategoryIcon,
    description: 'Category description',
    count: 150 // Number of photos
  },
  // Add more categories
];
```

#### Featured Work
```typescript
const featuredWork = [
  {
    title: 'Photo Title',
    category: 'Category',
    description: 'Photo description...',
    equipment: 'Camera and lens used',
    settings: 'Camera settings'
  },
  // Add more featured work
];
```

### Images and Assets

#### Adding Images
1. Place images in the `public` folder:
   ```
   public/
   ├── images/
   │   ├── projects/
   │   ├── photography/
   │   └── profile/
   ```

2. Reference images in components:
   ```typescript
   // For project images
   image: '/images/projects/project-name.jpg'
   
   // For photography
   image: '/images/photography/photo-name.jpg'
   ```

#### Optimizing Images
- Use Next.js Image component for automatic optimization
- Recommended formats: WebP, AVIF for modern browsers
- Keep file sizes under 500KB for web performance

### Colors and Theming

#### Custom Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(217.2 91.2% 59.8%)', // Your primary color
    foreground: 'hsl(222.2 84% 4.9%)',
  },
  // Add custom colors
}
```

#### Gradient Colors
Update gradients in `app/globals.css`:
```css
.gradient-text {
  @apply bg-gradient-to-r from-your-color via-your-color to-your-color bg-clip-text text-transparent;
}
```

### Resume Integration

#### Resume Download
Update resume handling in `components/resume-section.tsx`:
```typescript
// For direct PDF download
onClick={() => window.open('/resume.pdf', '_blank')}

// For email request (current implementation)
onClick={() => window.open('mailto:your-email@example.com?subject=Resume Request', '_blank')}
```

#### Resume File
1. Add your resume PDF to the `public` folder: `public/resume.pdf`
2. Update the download button to link directly to the file

### Contact Form

#### Email Integration
The contact form currently uses mailto links. For advanced form handling:

1. **Using Formspree** (Recommended):
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     const response = await fetch('https://formspree.io/f/myzdavde', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     // Handle response
   };
   ```

2. **Using Resend** (For custom email):
   - Install: `npm install resend`
   - Create API route in `app/api/contact/route.ts`
   - Configure with your Resend API key

### Social Links

#### Update Social Media
Update social links in `components/contact-section.tsx`:
```typescript
const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    username: '@yourusername'
  },
  // Update with your social media
];
```

### SEO and Metadata

#### Site Metadata
Update SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your professional description...',
  keywords: ['keyword1', 'keyword2'],
  // Update all metadata fields
};
```

#### Open Graph Images
1. Create social preview images (1200x630px)
2. Place in `public/og-image.jpg`
3. Update metadata to reference the image

## 🔧 Development Tips

### File Structure
```
├── app/                  # Next.js 13 app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── *.tsx           # Custom components
├── lib/                # Utility functions
└── public/             # Static assets
```

### Adding New Sections
1. Create component in `components/new-section.tsx`
2. Import and add to `app/page.tsx`
3. Add navigation item to `components/navigation.tsx`
4. Update scroll behavior if needed

### Performance Optimization
- Use Next.js Image component for all images
- Implement lazy loading for heavy components
- Optimize bundle size with dynamic imports
- Use proper caching headers in `vercel.json`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Test responsiveness using browser dev tools or physical devices.

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

### Environment Variables
Create `.env.local` for any environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Sadman Sadaf Islam**
- Email: sadafpritom6595@gmail.com
- Phone: +1 (437) 269-0856
- Location: Toronto, ON
- LinkedIn: [linkedin.com/in/sadmansadaf](https://linkedin.com/in/sadmansadaf)
- GitHub: [github.com/sadmansadaf](https://github.com/sadmansadaf)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS