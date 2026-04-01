import { motion } from 'motion/react';
import partnershipBg from '../../assets/partnership_bg.png';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-40 bg-background overflow-hidden border-b border-border/50">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40">
          
          {/* Left Column: Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <span className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-10 block font-medium">
              OUR FOUNDATION
            </span>
            <h2 className="text-white text-5xl md:text-7xl font-serif mb-16 leading-[1.1]">
              Core <span className="italic text-primary">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: 'Strategic Thinking', desc: 'Holistic approach to market analysis and decision making.' },
                { title: 'Financial Discipline', desc: 'Rigorous cost management and capital allocation.' },
                { title: 'Quality Craftsmanship', desc: 'Uncompromising standards in every renovation and build.' },
                { title: 'Accountability', desc: 'Full ownership of outcomes and performance metrics.' },
                { title: 'Long-Term Value', desc: 'Focusing on appreciation and sustainable asset growth.' }
              ].map((value, index) => (
                <div key={index} className="group">
                  <h3 className="text-white text-xl font-serif mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-foreground/60 font-light text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Investment Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 bg-white/5 p-12 md:p-20 border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] -mr-32 -mt-32"></div>
            
            <span className="text-primary text-[10px] tracking-[0.4em] font-sans uppercase mb-10 block font-medium">
              OUR METHODOLOGY
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-serif mb-12">
              Investment <span className="italic">Approach</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { title: 'Strategic Acquisition', desc: 'Sourcing properties below intrinsic market value.' },
                { title: 'Value Enhancement', desc: 'Targeted renovations focused on measurable ROI.' },
                { title: 'Operational Control', desc: 'In-house project management for maximum efficiency.' },
                { title: 'Market Repositioning', desc: 'Relauching assets at optimized market value.' },
                { title: 'Measured Exit Strategy', desc: 'Structured resale or holding based on timing.' }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <span className="text-primary/40 font-serif text-2xl">0{index + 1}</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">{step.title}</h4>
                    <p className="text-foreground/50 text-sm font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}