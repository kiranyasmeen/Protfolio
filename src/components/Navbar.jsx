import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Reviews', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-slate-100 shadow-xl shadow-indigo-500/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter cursor-pointer flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">S</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-slate-900">Style</span>
            <span className="text-indigo-600 text-[10px] uppercase tracking-[0.3em] font-black">Sphere</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="text-slate-400 hover:text-slate-900 cursor-pointer transition-all font-black text-[10px] uppercase tracking-[0.2em] relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/majidali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 flex items-center space-x-2"
            >
              <span>Work With Me</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 bg-slate-50 rounded-xl"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-500 hover:text-indigo-600 text-xl font-black block py-2 border-b border-slate-50"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col space-y-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 bg-slate-900 text-white rounded-2xl text-center font-black uppercase tracking-widest flex items-center justify-center space-x-2"
                >
                  <span>Work With Me</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

