import { motion } from 'framer-motion';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Services I <span className="text-gradient">Offer</span></h2>
          <p className="section-subtitle">
            Delivering high-quality digital solutions tailored to your business needs. 
            From concept to deployment, I ensure your project stands out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:bg-primary-600 transition-colors duration-500 shadow-sm">
                  <Icon size={32} className="text-primary-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
