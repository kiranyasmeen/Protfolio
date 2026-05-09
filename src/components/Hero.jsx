import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Brain, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Link } from 'react-scroll';

const Hero = () => {
  const techStack = ['AI Student', 'Full-Stack Dev', 'Python', 'React', 'ML Engineering'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Premium Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50 rounded-full blur-[120px] opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
        
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-20 text-indigo-100 hidden lg:block"
        >
          <Cpu size={400} strokeWidth={0.3} />
        </motion.div>
        <motion.div 
          animate={{ opacity: [0.05, 0.08, 0.05], scale: [1.05, 1, 1.05], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 left-20 text-blue-100 hidden lg:block"
        >
          <Brain size={350} strokeWidth={0.3} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full border border-slate-100 mb-10 bg-white/80 backdrop-blur-md shadow-sm"
          >
            <Sparkles size={16} className="text-indigo-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">AI & Web Engineering Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-[7rem] font-extrabold leading-[1] md:leading-[0.95] mb-8 md:mb-12 text-slate-900 tracking-tighter"
          >
            Crafting <span className="text-gradient">Intelligent</span> <br className="hidden md:block" /> Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-500 mb-12 md:mb-20 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            I’m <span className="text-slate-900 font-bold">Majid Ali</span>. Bridging the gap between 
            sophisticated algorithms and human-centric design to build the future of the web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-24 md:mb-32"
          >
            <Link to="contact" smooth={true} duration={800} offset={-80}>
              <button className="btn-primary group">
                <span>Start a Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={800} offset={-80}>
              <button className="btn-outline">Explore Work</button>
            </Link>
            <a 
              href="https://github.com/majidali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 glass-card flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <GithubIcon size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-20"
          >
            {techStack.map((tech) => (
              <span key={tech} className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-200"
      >
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-slate-200 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

