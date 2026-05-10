import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-slate-100 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tight cursor-pointer"
        >
          <span className="text-slate-900">Kiran </span>
          <span className="text-indigo-600">Yasmeen</span>
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
                  className="text-slate-500 hover:text-slate-900 cursor-pointer transition-colors font-bold text-xs uppercase tracking-[0.15em]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/kiranyasmeen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <GithubIcon size={22} />
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-500 hover:text-indigo-600 text-lg font-bold block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col space-y-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 bg-slate-900 text-white rounded-xl text-center font-black uppercase tracking-widest"
                >
                  Contact Me
                </Link>
                <a 
                  href="https://github.com/kiranyasmeen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-slate-200 rounded-xl flex items-center justify-center space-x-3 text-slate-900 font-bold"
                >
                  <GithubIcon size={22} />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
