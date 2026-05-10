import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const FreelancePlatforms = () => {
  const platforms = [
    {
      name: 'Fiverr',
      description: 'Find my professional gigs on Fiverr, where I offer high-quality web development services with quick turnaround times.',
      rating: '5.0',
      reviews: '30+',
      link: '#',
      color: 'bg-green-600',
      shadow: 'shadow-green-600/20'
    },
    {
      name: 'Upwork',
      description: 'Connect with me on Upwork for long-term collaborations and complex web application development projects.',
      rating: '4.9',
      reviews: '20+',
      link: '#',
      color: 'bg-blue-600',
      shadow: 'shadow-blue-600/20'
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Hire Me on Freelance Platforms</h2>
          <p className="section-subtitle">
            I am actively working on the world's leading freelance platforms. Choose your preferred platform to start our collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 flex flex-col items-center text-center group`}
            >
              <div className={`w-20 h-20 rounded-3xl ${platform.color} flex items-center justify-center mb-8 shadow-2xl ${platform.shadow} group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl font-bold text-slate-900 italic">{platform.name[0]}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{platform.name} Profile</h3>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-slate-900 font-bold">{platform.rating}</span>
                <span className="text-slate-400 text-sm">({platform.reviews} reviews)</span>
              </div>
              <p className="text-slate-600 mb-10 leading-relaxed">
                {platform.description}
              </p>
              <a 
                href={platform.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-bold text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2 ${platform.color} hover:brightness-110 active:scale-95`}
              >
                <span>Visit {platform.name}</span>
                <ExternalLink size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancePlatforms;
