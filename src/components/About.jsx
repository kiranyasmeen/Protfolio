import { motion } from 'framer-motion';
import { Binary, GraduationCap, Cpu, Lightbulb, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Academic Focus', value: 'AI Student', icon: <GraduationCap size={24} className="text-accent-violet" /> },
    { label: 'Research Areas', value: 'ML & Web', icon: <Binary size={24} className="text-accent-violet" /> },
    { label: 'Technical Core', value: 'Python/JS', icon: <Cpu size={24} className="text-accent-violet" /> },
    { label: 'Innovation', value: 'Driven', icon: <Lightbulb size={24} className="text-accent-violet" /> },
  ];

  return (
    <section id="about" className="section-padding relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <Sparkles size={14} className="text-indigo-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">My Story</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-10 tracking-tighter leading-[0.95]">
              Fusing <span className="text-gradient">Intelligence</span> <br /> with Design.
            </h2>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
              I am an Artificial Intelligence student with a deep passion for building intelligent web systems. 
              My journey involves exploring how machine learning can revolutionize the digital landscape.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-12 font-medium">
              Currently based in Pakistan, I focus on creating high-performance websites that are not just visually 
              stunning but also smart and data-driven. I am dedicated to pushing the boundaries of modern engineering.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, borderColor: 'rgba(99, 102, 241, 0.2)' }}
                  className="p-6 md:p-8 glass-card border-slate-100 bg-slate-50/50"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-xl md:text-2xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                alt="AI Technology" 
                className="w-full h-auto hover:scale-105 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border-[40px] border-indigo-50 rounded-full -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

