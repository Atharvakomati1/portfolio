import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Briefcase, 
  Sparkles, 
  Terminal, 
  FileText, 
  Send, 
  Layers, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import Magnetic from './ui/Magnetic';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Overview', path: '/', icon: Sparkles },
    { name: 'Projects', path: '/projects', icon: Layers },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Code2 },
    { name: 'Terminal', path: '/terminal', icon: Terminal, badge: 'CLI' },
    { name: 'Resume', path: '/resume', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Send }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="glass-pill rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-black/50 border border-white/10">
          
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20"
              >
                <div className="w-full h-full bg-[#0d1017] rounded-full flex items-center justify-center font-display font-bold text-sm text-cyan-400">
                  AK
                </div>
              </motion.div>
              <div className="hidden sm:block text-left">
                <div className="font-semibold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {personalInfo.name}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for hire</span>
                </div>
              </div>
            </Link>
          </Magnetic>

          {/* Desktop Navigation Links with 21st.dev Layout Animation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Magnetic key={link.path} strength={0.1}>
                  <Link
                    to={link.path}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                      isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 border border-cyan-500/30 shadow-sm shadow-cyan-500/20"
                      />
                    )}
                    <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="relative z-10">{link.name}</span>
                    {link.badge && (
                      <span className="relative z-10 px-1.5 py-0.2 text-[9px] font-mono font-semibold uppercase rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </Magnetic>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5 group"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-x-4 top-20 z-50 glass-panel rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
              
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                >
                  Hire / Contact Atharva
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
