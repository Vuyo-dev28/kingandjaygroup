import { Youtube, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const links = [
    { label: 'ABOUT', id: 'about' },
    { label: 'EXPERTISE', id: 'services' },
    { label: 'STRATEGY', id: 'philosophy' },
    { label: 'PORTFOLIO', id: 'portfolio' },
    { label: 'CONTACT', id: 'contact' }
  ];
  
  return (
    <footer className="bg-background py-32 border-t border-border/20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-16">
        
        {/* Brand */}
        <div className="text-white font-serif text-3xl tracking-tight">
          King and <span className="text-primary italic">Jay Group</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-10 md:gap-16">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[10px] tracking-[0.5em] font-sans uppercase font-medium text-foreground/40 hover:text-primary transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-10">
          <a href="#" className="text-primary/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <Youtube size={22} strokeWidth={1} />
          </a>
          <a href="#" className="text-primary/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <Instagram size={22} strokeWidth={1} />
          </a>
          <a href="#" className="text-primary/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <Linkedin size={22} strokeWidth={1} />
          </a>
        </div>

      </div>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-24 text-center">
        <p className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase font-light mb-4">
          Where Strategy Meets Property Growth. • Restoring Potential. Delivering Performance.
        </p>
        <p className="text-[8px] tracking-[0.4em] text-foreground/20 uppercase font-medium">
          © {new Date().getFullYear()} King and Jay Group. Strategic Property Investment & Value-Driven Development. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}