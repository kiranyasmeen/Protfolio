import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-slate-100 mb-6 shadow-sm">
            <Sparkles size={14} className="text-indigo-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">
            Featured <span className="text-gradient">Creations</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent engineering challenges, from intelligent algorithms 
            to high-performance web architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="glass-card overflow-hidden group border-slate-100 bg-white flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-xl">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-xl">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-wider border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base text-slate-500 mb-8 font-medium line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-black text-slate-900 hover:text-indigo-600 flex items-center gap-2 group/link">
                    Live Demo <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

