import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            A selection of my recent work, showcasing a range of skills from frontend development to complete business solutions.
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
              className="glass-card overflow-hidden group border-slate-100 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary-500 hover:text-white transition-all">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary-500 hover:text-white transition-all">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-primary-50 text-primary-600 text-[9px] md:text-[10px] font-black uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-slate-500 mb-6 md:mb-8 font-medium line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 hover:text-primary-600 flex items-center gap-2 group/link">
                    Live Demo <ExternalLink size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-400 hover:text-slate-900 flex items-center gap-2">
                    Source Code <GithubIcon size={16} />
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
