import { motion } from 'motion/react';
import contactBg from '../../assets/contact_bg.png';

export function Contact() {
  return (
    <section id="contact" className="py-40 bg-background overflow-hidden border-b border-border/50">
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
              GET IN TOUCH
            </span>
            <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-[1.1]">
              Ready to <br />
              <span className="italic">Work With Us?</span>
            </h2>
            
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-16">
                Connect with our strategic team to discuss investment opportunities, partnerships, or operational strategies. We are committed to building long-term value.
              </p>
              
              <div className="space-y-12 mb-16">
                <div>
                  <h3 className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-4 font-medium opacity-60">General Inquiries</h3>
                  <a href="mailto:kingandjaygroups@gmail.com" className="text-white text-2xl md:text-4xl font-serif hover:italic transition-all duration-300 decoration-primary/30 underline-offset-8 hover:underline">
                    kingandjaygroups@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-4 font-medium opacity-60">Strategic Advisory</h3>
                  <a href="tel:+27731914111" className="text-white text-2xl md:text-4xl font-serif hover:italic transition-all duration-300">
                    +27 (73) 191-4111
                  </a>
                </div>
              </div>

              <button className="group relative border border-primary/30 bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground px-14 py-6 transition-all text-xs tracking-[0.3em] uppercase font-medium backdrop-blur-sm overflow-hidden">
                <span className="relative z-10">Connect Now</span>
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
              src={contactBg}
              alt="Professional Workspace"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-700"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}