import { motion } from 'motion/react';
import portfolioBg from '../../assets/portfolio_items.png';

export function MissionVision() {
  return (
    <section id="portfolio" className="py-40 bg-background overflow-hidden border-b border-border/50">
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
              TRACK RECORD
            </span>
            <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-[1.1]">
              Our Work Speaks <br />
              <span className="italic">for Itself</span>
            </h2>
            
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-16">
                Explore the diverse portfolio of high-impact projects and strategic ventures powered by King and Jay Group. Our success is measured by the sustainable growth of our partners.
              </p>
              
              <button className="group relative border border-primary/30 bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground px-14 py-6 transition-all text-xs tracking-[0.3em] uppercase font-medium backdrop-blur-sm overflow-hidden">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>
          </motion.div>

          {/* Image (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-[16/10] overflow-hidden border border-border/5 group"
          >
            <img
              src={portfolioBg}
              alt="Project Portfolio Collage"
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}