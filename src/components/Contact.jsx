import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Available for hire</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.95]">
              Let’s build <br /> something <span className="text-gradient">legendary</span>.
            </h2>
            <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed max-w-lg">
              Have a visionary project in mind? Let’s combine intelligence with design to create something exceptional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-violet shadow-sm group-hover:bg-accent-violet group-hover:text-white transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-slate-500 font-bold">Pakistan</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-rose shadow-sm group-hover:bg-accent-rose group-hover:text-white transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-slate-500 font-bold">Majid@example.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-sky shadow-sm group-hover:bg-accent-sky group-hover:text-white transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">WhatsApp</h4>
                    <p className="text-slate-500 font-bold">+92 300 0000000</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <GithubIcon size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">GitHub</h4>
                    <a href="https://github.com/majidali" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-bold hover:text-indigo-600 transition-colors">
                      @majidali
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="p-8 md:p-12 glass-card bg-white shadow-2xl shadow-indigo-100/30 border-slate-100/50">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold text-slate-900 placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold text-slate-900 placeholder:text-slate-300" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Service Needed</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold text-slate-900 appearance-none cursor-pointer">
                      <option>Select a Service</option>
                      <option>AI-Powered Web Apps</option>
                      <option>Premium Portfolio Design</option>
                      <option>Business Scaling Site</option>
                      <option>UI/UX Overhaul</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ArrowRight size={18} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Project Brief</label>
                  <textarea rows="4" placeholder="Tell me about your vision..." className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full group py-5"
                >
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Launch Conversation</span>
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

