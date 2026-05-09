import { motion } from 'framer-motion';
import { ExternalLink, Star, ArrowUpRight } from 'lucide-react';

const FreelancePlatforms = () => {
  const platforms = [
    {
      name: 'Fiverr',
      description: 'Find my professional gigs on Fiverr, where I offer high-quality web development services with quick turnaround times.',
      rating: '5.0',
      reviews: '30+',
      link: '#',
      color: 'bg-[#1dbf73]',
      shadow: 'shadow-[#1dbf73]/20'
    },
    {
      name: 'Upwork',
      description: 'Connect with me on Upwork for long-term collaborations and complex web application development projects.',
      rating: '4.9',
      reviews: '20+',
      link: '#',
      color: 'bg-[#14a800]',
      shadow: 'shadow-[#14a800]/20'
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-slate-50/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Hire Me on <span className="text-gradient">Top Platforms</span></h2>
          <p className="section-subtitle">
            I am actively working on the world's leading freelance networks. Choose your preferred platform to start our collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-12 flex flex-col items-center text-center group bg-white`}
            >
              <div className={`w-24 h-24 rounded-[2rem] ${platform.color} flex items-center justify-center mb-10 shadow-2xl ${platform.shadow} group-hover:rotate-6 transition-all duration-500`}>
                <span className="text-4xl font-black text-white italic">{platform.name[0]}</span>
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-4">{platform.name} Verified</h3>
              
              <div className="flex items-center space-x-2 mb-8 px-4 py-2 bg-slate-50 rounded-full">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-slate-900 font-black text-sm">{platform.rating}</span>
                <span className="text-slate-400 text-xs font-bold">({platform.reviews} reviews)</span>
              </div>
              
              <p className="text-slate-500 mb-12 leading-relaxed font-medium text-lg">
                "{platform.description}"
              </p>
              
              <a 
                href={platform.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-black text-white transition-all duration-500 flex items-center justify-center space-x-3 ${platform.color} hover:shadow-xl hover:shadow-inherit hover:-translate-y-1 active:scale-95`}
              >
                <span>Visit My {platform.name}</span>
                <ArrowUpRight size={22} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancePlatforms;

