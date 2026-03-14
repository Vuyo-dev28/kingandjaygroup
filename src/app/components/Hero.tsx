import { motion } from 'motion/react';
import heroBg from '../../assets/hero_bg.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Background Image with Radial Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Investment Growth Cityscape"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.4)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-primary text-[10px] tracking-[0.5em] font-sans uppercase mb-6 block font-medium">
            Strategic Capital & Growth
          </span>
          <h1 className="text-white text-[12vw] md:text-[6vw] leading-[1.1] font-normal font-serif mb-10">
            Invest in Growth. <br />
            <span className="italic">Build the Future.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-2xl font-light font-sans max-w-2xl mb-12 leading-relaxed">
            King and Jay Group partners with visionary investors to scale high-potential ventures across global markets.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative border border-primary bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground px-12 py-5 transition-all text-xs tracking-[0.3em] uppercase font-medium backdrop-blur-md overflow-hidden"
            >
              <span className="relative z-10">Explore Opportunities</span>
              <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/60 hover:text-white px-8 py-5 text-xs tracking-[0.3em] uppercase font-medium transition-colors"
            >
              Our Strategy
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary/50 hover:text-primary cursor-pointer z-10 transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[8px] tracking-[0.4em] uppercase font-medium vertical-text">Scroll</span>
          <div className="w-px h-12 bg-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-line"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}