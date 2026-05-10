import { motion } from 'framer-motion';
import { Binary, GraduationCap, Cpu, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Academic Focus', value: 'AI Student', icon: <GraduationCap className="text-indigo-500" /> },
    { label: 'Research Areas', value: 'ML & Web', icon: <Binary className="text-indigo-500" /> },
    { label: 'Technical Core', value: 'Python/JS', icon: <Cpu className="text-indigo-500" /> },
    { label: 'Innovation', value: 'Driven', icon: <Lightbulb className="text-indigo-500" /> },
  ];

  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="section-title text-left mb-8">
              Fusing <span className="text-gradient">AI</span> with <br /> Web Engineering
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8 font-medium">
              I am an Artificial Intelligence student with a deep passion for building intelligent web systems. 
              My journey involves exploring how machine learning and data science can revolutionize the user experience on the modern web.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-12">
              Currently pursuing my studies in Pakistan, I focus on creating high-performance websites that aren't just visually 
              stunning but also smart and data-driven. From building custom neural networks to developing seamless React interfaces, 
              I am dedicated to pushing the boundaries of what's possible in digital technology.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="p-5 md:p-8 glass-card border-slate-100 bg-slate-50/30"
                >
                  <div className="mb-3 md:mb-4">{stat.icon}</div>
                  <div className="text-lg md:text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                alt="AI Technology Visual" 
                className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
            </div>
            
            {/* Background Tech Circle */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-[40px] border-indigo-50 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
