import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050609] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0d1017] rounded-full flex items-center justify-center font-display font-bold text-xs text-cyan-400">
                  AK
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Computer Science student & Full Stack / AI Developer passionate about crafting resilient, high-speed web apps and local RAG intelligence systems.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {personalInfo.status}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-400 hover:text-cyan-400 transition-colors">Experience & Timeline</Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Skills & Tech Stack</Link>
              </li>
              <li>
                <Link to="/terminal" className="text-slate-400 hover:text-cyan-400 transition-colors">Interactive CLI</Link>
              </li>
              <li>
                <Link to="/resume" className="text-slate-400 hover:text-cyan-400 transition-colors">Digital Resume</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Direct Channels
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} Atharva Komati. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Engineered with 21st.dev & UI/UX Pro Max standards</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
