import { motion } from 'framer-motion';
import { ArrowRight, Cpu, MousePointer2, Brain } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Link } from 'react-scroll';

const Hero = () => {
  const techStack = ['AI student', 'Python', 'React', 'Machine Learning', 'Web Engineering'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* AI & Tech Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 right-10 text-slate-200"
        >
          <Cpu size={300} strokeWidth={0.5} />
        </motion.div>
        <motion.div 
          animate={{ opacity: [0.1, 0.15, 0.1], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-10 text-slate-200"
        >
          <Brain size={250} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-slate-200 mb-10 bg-white/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.25em]">AI & Web Engineering Student</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-8xl font-extrabold leading-[1.1] md:leading-[1.05] mb-6 md:mb-10 text-slate-900"
          >
            Integrating <span className="text-gradient">Intelligence</span> <br className="hidden md:block" /> Into Modern Web Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-500 mb-10 md:mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            I’m <span className="text-slate-900 font-bold">Kiran Yasmeen</span>. An Artificial Intelligence student and web developer bridging the gap between intelligent algorithms and user-centric web interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-24"
          >
            <Link to="contact" smooth={true} duration={800} offset={-80}>
              <button className="btn-primary flex items-center space-x-3">
                <span>Start a Project</span>
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={800} offset={-80}>
              <button className="btn-outline">Explore Work</button>
            </Link>
            <a 
              href="https://github.com/kiranyasmeen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 glass-card flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <GithubIcon size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {techStack.map((tech) => (
              <span key={tech} className="text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300"
      >
        <MousePointer2 size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
