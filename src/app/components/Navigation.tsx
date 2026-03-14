import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-2xl border-border/20 py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Menu / Burger (Left) - Desktop */}
          <div className="flex-1 hidden md:flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-primary transition-all flex items-center gap-4 group"
            >
              <div className="flex flex-col gap-1.5 w-6 overflow-hidden">
                <span className={`h-[1px] w-full transition-all duration-500 bg-primary ${isMobileMenuOpen ? 'translate-x-full' : ''}`}></span>
                <span className={`h-[1px] w-2/3 transition-all duration-500 bg-primary group-hover:w-full ${isMobileMenuOpen ? 'translate-x-full' : ''}`}></span>
              </div>
              <span className="text-[10px] tracking-[0.4em] font-sans uppercase font-medium">Menu</span>
            </button>
          </div>

          {/* Logo (Center) */}
          <div className="flex-shrink-0 text-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex flex-col items-center"
            >
              <span className="text-xl md:text-2xl font-normal tracking-[0.5em] uppercase transition-all text-white group-hover:text-primary">
                KING AND <span className="text-primary italic group-hover:text-white transition-all">JAY GROUP</span>
              </span>
              <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-700 mt-1"></div>
            </button>
          </div>

          {/* Action / Contact (Right) */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block border border-primary/30 text-primary px-10 py-3 text-[10px] tracking-[0.4em] font-sans uppercase font-medium transition-all hover:bg-primary hover:text-primary-foreground backdrop-blur-sm"
            >
              Contact
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary p-2"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[60] flex flex-col p-12 md:p-24 transition-all duration-500 animate-in fade-in zoom-in-95">
          <div className="flex justify-between items-center mb-20">
            <span className="text-primary text-[10px] tracking-[0.5em] font-sans uppercase font-medium">Navigation</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-primary hover:text-white transition-transform hover:rotate-90 duration-500">
              <X size={40} strokeWidth={1} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-8 mt-12">
            {[
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Our Services' },
              { id: 'partnership', label: 'Partnership' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'contact', label: 'Contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-5xl md:text-8xl font-serif text-left hover:italic transition-all duration-500 group flex items-center gap-10 text-white hover:text-primary"
              >
                <span className="text-[10px] font-sans italic opacity-20 group-hover:opacity-100 transition-opacity text-primary mt-4">
                  0{index + 1}
                </span>
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col md:flex-row justify-between items-end border-t border-border/20 pt-16 gap-12">
            <div className="text-[10px] tracking-[0.4em] uppercase text-primary/60 flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-serif text-3xl tracking-[0.3em] text-white/5 uppercase">KING AND JAY GROUP</span>
              <span className="text-[8px] tracking-[0.2em] text-white/20 mt-2">© 2026 STRATEGIC GROWTH</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}