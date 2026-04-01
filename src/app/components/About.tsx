import { motion } from 'motion/react';
import aboutBg from '../../assets/about_bg.png';

export function About() {
  return (
    <section id="about" className="py-40 bg-background overflow-hidden border-b border-border/50">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-center">
          
          {/* Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-10 block font-medium">
              STRATEGIC ACQUISITION & REDEVELOPMENT
            </span>
            <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-[1.1]">
              King and <span className="italic text-primary">Jay Groups</span>
            </h2>
            
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-8">
                King and Jay Groups is a property investment and development company focused on strategic acquisition, disciplined redevelopment, and profitable resale.
              </p>
              <p className="text-base md:text-lg text-foreground/60 font-light leading-relaxed mb-16">
                We identify undervalued or high-potential properties, enhance them through structured renovation strategies, and reposition them for optimal market performance. Our integrated model allows us to manage every phase internally — from acquisition and cost control to renovation, landscaping, tar and paving solutions.
              </p>
              
              <button className="group relative border border-primary/30 bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground px-14 py-6 transition-all text-xs tracking-[0.3em] uppercase font-medium backdrop-blur-sm overflow-hidden">
                <span className="relative z-10">Our Vision</span>
                <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>
          </motion.div>

          {/* Image (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden border border-border/5 group"
          >
            <img
              src={aboutBg}
              alt="Modern Corporate Architecture"
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,8,0.2)_100%)]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}