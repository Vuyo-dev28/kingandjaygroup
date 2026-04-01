import { motion } from 'motion/react';
import servicesBg from '../../assets/services_bg.png';

export function Services() {
  return (
    <section id="services" className="py-40 bg-background overflow-hidden border-b border-border/50">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-center">
          
          {/* Content (Order 2 on mobile, 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:order-1"
          >
            <span className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-10 block font-medium">
              INTEGRATED SOLUTIONS
            </span>
            <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-[1.1]">
              Full-Cycle <br />
              <span className="italic">Development</span> Services
            </h2>
            
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-8">
                Our integrated model allows us to manage every phase internally — ensuring quality, efficiency, and financial oversight throughout the investment cycle.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-16">
                {[
                  'Strategic Acquisition',
                  'Cost Control',
                  'Renovation',
                  'Landscaping',
                  'Tar Solutions',
                  'Paving Solutions'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-xs tracking-widest uppercase text-white/60">{service}</span>
                  </div>
                ))}
              </div>
              
              <button className="group relative border border-primary/30 bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground px-14 py-6 transition-all text-xs tracking-[0.3em] uppercase font-medium backdrop-blur-sm overflow-hidden">
                <span className="relative z-10">Our Expertise</span>
                <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>
          </motion.div>

          {/* Image (Order 1 on mobile, 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:order-2 aspect-square md:aspect-[4/5] overflow-hidden border border-border/5 group"
          >
            <img
              src={servicesBg}
              alt="Strategic Business Consulting"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-700"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}