import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Twitter, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Kiran <span className="text-primary-600">Yasmeen</span>
            </h3>
            <p className="text-slate-500 mb-8 font-medium leading-relaxed">
              Full-Stack Web Developer & UI/UX Specialist crafting high-performance digital experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ y: -5 }} href="https://github.com/kiranyasmeen" target="_blank" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all">
                <GithubIcon size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all">
                <LinkedinIcon size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-all">
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item.toLowerCase()} smooth={true} duration={500} offset={-80} className="text-slate-500 hover:text-primary-600 font-bold transition-colors cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {['Portfolio Design', 'Business Websites', 'Landing Pages', 'Redesign', 'UI/UX Design'].map((item) => (
                <li key={item}>
                  <Link to="services" smooth={true} duration={500} offset={-80} className="text-slate-500 hover:text-primary-600 font-bold transition-colors cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-slate-500 mb-6 font-medium">Subscribe to receive my latest work updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-100 font-medium" />
              <button className="p-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 font-bold text-sm">
            © {currentYear} Kiran Yasmeen. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-lg border border-slate-100 rounded-full flex items-center justify-center text-primary-600 hover:text-primary-700 transition-all cursor-pointer z-20"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
