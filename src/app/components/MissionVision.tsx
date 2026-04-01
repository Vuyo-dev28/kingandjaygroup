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
              CORE PURPOSE
            </span>
            <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-[1.1]">
              Mission & <span className="italic text-primary">Vision</span>
            </h2>
            
            <div className="max-w-xl space-y-12">
              <div>
                <h3 className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-4 font-medium opacity-60">Our Mission</h3>
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                  To strategically acquire and reposition properties through disciplined investment practices, quality renovations, and operational excellence — delivering sustainable value growth and profitable returns.
                </p>
              </div>
              
              <div>
                <h3 className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-4 font-medium opacity-60">Our Vision</h3>
                <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
                  To become a trusted leader in property investment and redevelopment, known for transforming undervalued assets into high-performing investments while contributing positively to the communities we operate in.
                </p>
              </div>
              
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