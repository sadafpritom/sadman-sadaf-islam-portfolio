import { Heart, Code, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} sadmansadaf.com. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-1">
              Designed & Developed by Sadman Sadaf Islam
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-muted-foreground/80">
            "Architecting the digital elite, one line of code at a time"
          </p>
        </div>
      </div>
    </footer>
  );
}