import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Freelance Client",
      role: "Digital Entrepreneur",
      content: "Majid created a clean and professional website with great attention to detail. The results exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Startup Founder",
      role: "Tech Innovator",
      content: "The website design was modern, responsive, and exactly what we needed. Highly recommend her services for any web project.",
      rating: 5,
    },
    {
      name: "Small Business Owner",
      role: "Commerce Leader",
      content: "Excellent communication, beautiful design, and fast delivery. Majid is a true professional who understands user experience.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">What People <span className="text-gradient">Say</span></h2>
          <p className="section-subtitle">
            Feedback from clients and partners who have experienced the quality and dedication of my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-10 glass-card border-slate-100/60 relative"
            >
              <Quote className="absolute top-8 right-8 text-primary-100 opacity-50" size={48} />
              <div className="flex mb-6 text-accent-rose">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-slate-500 leading-relaxed italic mb-8 relative z-10 font-medium">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-400 to-accent-rose flex items-center justify-center text-white font-black">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-rose/5 rounded-full blur-[100px] translate-x-1/2"></div>
    </section>
  );
};

export default Testimonials;
