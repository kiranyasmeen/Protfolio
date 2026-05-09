import { motion } from 'framer-motion';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { Sparkles } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-100 mb-6 shadow-sm">
            <Sparkles size={14} className="text-indigo-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">
            Services I <span className="text-gradient">Master</span>
          </h2>
          <p className="section-subtitle">
            Delivering high-performance digital solutions that bridge the gap between 
            visionary ideas and functional excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="glass-card p-10 group bg-white border-slate-100/50"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-indigo-600 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:-rotate-6">
                  <Icon size={36} className="text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

