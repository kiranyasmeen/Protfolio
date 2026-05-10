import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and the tools I use to bring digital ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-10 glass-card border-slate-100/50 hover:border-primary-100"
            >
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 border-b border-slate-100 pb-4 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: '#f5f3ff', color: '#7c3aed' }}
                    className="px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-slate-50 text-slate-600 font-bold text-xs md:text-sm shadow-sm transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-[120px] -translate-x-1/2"></div>
    </section>
  );
};

export default Skills;
