import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Sparkles } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm">
            <Sparkles size={14} className="text-indigo-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A deep dive into the technologies and tools I use to build robust, 
            intelligent, and scalable digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 md:p-14 glass-card border-slate-100/50 bg-white"
            >
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 tracking-tight flex items-center gap-4">
                <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: '#4f46e5', color: '#ffffff' }}
                    className="px-6 py-3.5 md:px-8 md:py-4 rounded-2xl bg-slate-50 text-slate-600 font-bold text-sm md:text-base shadow-sm transition-all cursor-default border border-slate-100"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

