import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Code2, 
  Briefcase, 
  FileText, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ArrowUpRight,
  Flame,
  Zap,
  Mic,
  Music
} from 'lucide-react';
import { personalInfo, projectsData, experienceData, skillsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SpotlightCard from '../components/ui/SpotlightCard';
import BorderBeam from '../components/ui/BorderBeam';
import ShimmerButton from '../components/ui/ShimmerButton';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import FlagshipDualShowcase from '../components/ui/FlagshipDualShowcase';
import { StudyBuddyRAGDemo, AuraXVoiceDemo } from '../components/ui/InteractiveProjectDemos';
import Hero3D from '../components/canvas/Hero3D';
import Magnetic from '../components/ui/Magnetic';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "AI & RAG Systems Builder",
    "Computer Science Engineer",
    "Next.js & Python Specialist"
  ];

  // Role cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Pune Local Time Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative z-10 space-y-24 sm:space-y-32 pt-28 sm:pt-36">
      
      {/* ----------------- 3D HERO BACKGROUND ----------------- */}
      <div className="absolute top-0 left-0 w-full h-[80vh] overflow-hidden -z-10">
        <Hero3D />
      </div>

      {/* ----------------- HERO SECTION ----------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto relative z-10">
          
          {/* Status Badge with BorderBeam */}
          <motion.div variants={itemVariants} className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-cyan-500/20 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for Software & AI Engineering Roles</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Pune, India</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
            </h1>
            
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <span className="text-xl sm:text-3xl font-medium text-slate-300 font-display">
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 font-semibold border-b-2 border-cyan-400/40 pb-0.5 animate-shimmer">
                  {roles[currentRoleIndex]}
                </span>
              </span>
            </div>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              I am a <span className="text-cyan-300 font-medium">Computer Science student</span> and developer building zero-cost local RAG architectures, voice-controlled desktop agents, and high-performance production web platforms.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Magnetic strength={0.4}>
              <Link to="/projects">
                <ShimmerButton 
                  shimmerColor="#22d3ee" 
                  shimmerSize="0.1em"
                  shimmerDuration="2.5s"
                  className="px-8 py-3.5 text-sm font-semibold shadow-lg shadow-cyan-500/20"
                >
                  <span className="flex items-center gap-2">
                    Explore Architectures <ArrowRight className="w-4 h-4" />
                  </span>
                </ShimmerButton>
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link
                to="/terminal"
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Launch CLI</span>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 text-slate-400 text-sm font-mono">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">/</span>
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">/</span>
            <Link 
              to="/contact" 
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </motion.div>

        </div>

        {/* Quick Metrics Bar with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-5xl mx-auto">
          {personalInfo.stats.map((stat, idx) => (
            <SpotlightCard 
              key={idx} 
              className="p-5 text-center relative overflow-hidden group hover:border-cyan-500/30 transition-all"
              spotlightColor="rgba(6, 182, 212, 0.2)"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs text-slate-400 font-mono tracking-wide">
                {stat.label}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      {/* ----------------- BENTO GRID SPOTLIGHT ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-3 border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>21st.dev Bento Architecture</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Engineering with <span className="text-gradient-cyan">Precision & AI</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
          >
            <span>View all projects & codebases</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Bento 1: Core AI & Full-Stack Mastery (Span 2) */}
          <SpotlightCard 
            className="md:col-span-2 p-7 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
            spotlightColor="rgba(6, 182, 212, 0.22)"
          >
            <BorderBeam size={220} duration={9} colorFrom="#06b6d4" colorTo="#6366f1" />
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                RAG Architectures & Full-Stack Systems
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Combining private local LLMs with Retrieval-Augmented Generation to build zero-cost, privacy-first AI apps alongside enterprise Next.js and MySQL web platforms.
              </p>

              {/* Mini Interactive RAG simulation right inside Bento */}
              <div className="pt-2">
                <StudyBuddyRAGDemo />
              </div>
            </div>
            
            <div className="pt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-cyan-300 border border-white/5">
                Local LLMs (Ollama / GGML)
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-indigo-300 border border-white/5">
                RAG Pipelines
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-emerald-300 border border-white/5">
                Next.js & React
              </span>
            </div>
          </SpotlightCard>

          {/* Bento 2: Aura-X Voice AI Assistant (Span 2) */}
          <SpotlightCard 
            className="md:col-span-1 lg:col-span-2 p-7 relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-all"
            spotlightColor="rgba(168, 85, 247, 0.22)"
          >
            <BorderBeam size={220} duration={10} delay={3} colorFrom="#a855f7" colorTo="#06b6d4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                  <Mic className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  Flagship Voice AI
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Aura-X: Voice Automation & Memory
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Autonomous voice assistant with multi-step NLP parsing, persistent conversational memory buffer across multi-turn dialogs, and native Spotify & OS automation.
              </p>

              {/* Mini Interactive Voice Waveform simulation right inside Bento */}
              <div className="pt-2">
                <AuraXVoiceDemo />
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-purple-300 border border-white/5">
                Voice NLP & Speech
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-cyan-300 border border-white/5">
                Conversational Memory Buffer
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-emerald-300 border border-white/5">
                Spotify API & PyQt HUD
              </span>
            </div>
          </SpotlightCard>

          {/* Bento 3: MIT-WPU Academic Foundation */}
          <SpotlightCard className="p-6 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/30 transition-all">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400">Academic Hub</div>
              <h4 className="text-lg font-display font-bold text-white">MIT-WPU</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrated B.Tech in Computer Science & Engineering. Solid grounding in Data Structures, Algorithms, and Distributed Software.
              </p>
            </div>
            <div className="pt-4 text-[11px] font-mono text-slate-500">
              Pune, India • 2024–Present
            </div>
          </SpotlightCard>

          {/* Bento 4: Live Location & Local Time */}
          <SpotlightCard className="p-6 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/30 transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Local Time (IST)</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white tracking-wider">
                {currentTime || 'Loading...'}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
            <div className="pt-4 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Open to Remote & Hybrid</span>
            </div>
          </SpotlightCard>

          {/* Bento 5: Interactive Terminal Playground Banner (Span 2) */}
          <SpotlightCard className="md:col-span-2 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between gap-5 group hover:border-cyan-500/30 transition-all bg-gradient-to-r from-slate-900/90 to-[#0c101c]/90">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>Interactive Terminal Interface</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                Explore portfolio via Developer CLI
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Run commands like <code className="text-cyan-300 font-mono">whoami</code>, <code className="text-cyan-300 font-mono">skills</code>, <code className="text-cyan-300 font-mono">projects</code>, or <code className="text-cyan-300 font-mono">sudo hire</code>.
              </p>
            </div>
            
            {/* Centered Button in Bottom Middle */}
            <div className="flex items-center justify-center pt-2 w-full">
              <Link to="/terminal">
                <ShimmerButton
                  shimmerColor="#22d3ee"
                  shimmerDuration="2s"
                  className="text-xs font-semibold shadow-lg shadow-cyan-500/20"
                >
                  Open Terminal CLI →
                </ShimmerButton>
              </Link>
            </div>
          </SpotlightCard>

        </div>
      </section>

      {/* ----------------- FLAGSHIP AI INNOVATIONS SANDBOX (StudyBuddy AI & Aura-X) ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FlagshipDualShowcase />
      </section>

      {/* ----------------- FEATURED PROJECTS SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-3 border border-indigo-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Flagship Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Featured <span className="text-gradient-cyan">Projects & AI Apps</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
          >
            <span>Explore all projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={(proj) => setSelectedProject(proj)} 
            />
          ))}
        </div>
      </section>

      {/* ----------------- WORK EXPERIENCE SNAPSHOT ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard className="p-8 sm:p-12 border border-white/10 relative overflow-hidden" spotlightColor="rgba(6, 182, 212, 0.15)">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-3 border border-emerald-500/20">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Industry Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                WebMobi360 Pvt. Ltd.
              </h2>
              <p className="text-sm text-cyan-300 font-medium">
                Full Stack Developer Intern • Pune, India (June 2026 – August 2026)
              </p>
            </div>

            <Link
              to="/experience"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10 flex items-center gap-2 hover:scale-105"
            >
              <span>View Full Experience Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData[0].achievements.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </section>

      {/* ----------------- CALL TO ACTION BANNER ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard 
          className="p-8 sm:p-14 text-center border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 via-slate-900/80 to-[#07080d] shadow-2xl shadow-cyan-500/10"
          spotlightColor="rgba(6, 182, 212, 0.25)"
        >
          <BorderBeam size={250} duration={8} colorFrom="#06b6d4" colorTo="#6366f1" />
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center border border-cyan-500/30">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Let's Build Something <span className="text-gradient-cyan">Extraordinary</span> Together
            </h2>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you have an internship role, an AI-powered project, or a high-performance web platform in mind, I'm ready to contribute.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/contact">
                <ShimmerButton
                  shimmerColor="#22d3ee"
                  className="font-semibold shadow-xl shadow-cyan-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send a Message</span>
                </ShimmerButton>
              </Link>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3 rounded-full text-sm font-medium glass-panel hover:bg-white/10 text-slate-200 border border-white/10 transition-colors hover:scale-105"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </div>
  );
}
