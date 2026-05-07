import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Let’s Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 font-medium">
              Have a project idea? Let’s discuss how I can help you build a modern website. 
              I'm always open to new opportunities and interesting collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Location</h4>
                  <p className="text-slate-500 font-medium">Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent-rose shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-500 font-medium">kiran@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent-sky shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">WhatsApp</h4>
                  <p className="text-slate-500 font-medium">+92 300 0000000</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <GithubIcon size={28} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">GitHub</h4>
                  <a href="https://github.com/kiranyasmeen" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-medium hover:text-primary-600 transition-colors">
                    github.com/kiranyasmeen
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="p-10 glass-card bg-white shadow-xl shadow-primary-100/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Service Needed</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium appearance-none">
                    <option>Select a Service</option>
                    <option>Portfolio Website</option>
                    <option>Business Website</option>
                    <option>Landing Page</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Message</label>
                  <textarea rows="5" placeholder="Your message here..." className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-medium resize-none"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-3 text-lg"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
