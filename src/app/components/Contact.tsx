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
              PARTNERSHIP OPPORTUNITIES
            </span>
            <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-[1.1]">
              Invest With <br />
              <span className="italic text-primary">King and Jay</span>
            </h2>
            
            <div className="max-w-xl">
              <div className="mb-16 p-8 bg-white/5 border-l-2 border-primary">
                <h3 className="text-white text-xl font-serif mb-4">Investment Partnerships</h3>
                <p className="text-foreground/60 font-light leading-relaxed mb-6">
                  King and Jay Groups selectively partners with private investors who value disciplined strategy, transparency, and performance. Our projects are structured with clear scope, defined timelines, and targeted return objectives.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-[10px] tracking-widest uppercase text-primary/70 font-medium">
                  <li>• Clear Scope</li>
                  <li>• Risk Assessment</li>
                  <li>• Defined Timelines</li>
                  <li>• ROI Targeted</li>
                </ul>
              </div>

              <p className="text-lg text-foreground/70 font-light leading-relaxed mb-16 italic">
                "We prioritize long-term relationships over short-term capital. Investment opportunities are project-specific and subject to evaluation."
              </p>
              
              <div className="space-y-12 mb-16">
                <div>
                  <h3 className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-4 font-medium opacity-60">Partnership Inquiries</h3>
                  <a href="mailto:kingandjaygroups@gmail.com" className="text-white text-2xl md:text-4xl font-serif hover:italic transition-all duration-300 decoration-primary/30 underline-offset-8 hover:underline">
                    kingandjaygroups@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-4 font-medium opacity-60">Strategic Advisory</h3>
                  <a href="tel:+27786705801" className="text-white text-2xl md:text-4xl font-serif hover:italic transition-all duration-300">
                    +27 (78) 670 5801
                  </a>
                </div>
              </div>

              <button className="group relative border border-primary/30 bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground px-14 py-6 transition-all text-xs tracking-[0.3em] uppercase font-medium backdrop-blur-sm overflow-hidden">
                <span className="relative z-10">Request Evaluation</span>
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
