import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import BorderBeam from './ui/BorderBeam';
import { 
  StudyBuddyRAGDemo, 
  WeatherifyLiveDemo, 
  AuraXVoiceDemo, 
  TPNAdminDemo 
} from './ui/InteractiveProjectDemos';

export default function ProjectCard({ project, onOpenModal }) {
  const renderInteractiveDemo = () => {
    switch (project.id) {
      case 'studybuddy-ai':
        return <StudyBuddyRAGDemo />;
      case 'weatherify':
        return <WeatherifyLiveDemo />;
      case 'aura-x':
        return <AuraXVoiceDemo />;
      case 'tpn-platform':
        return <TPNAdminDemo />;
      default:
        return null;
    }
  };

  return (
    <SpotlightCard
      className="p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
      spotlightColor="rgba(6, 182, 212, 0.15)"
      borderColor="rgba(6, 182, 212, 0.4)"
      tilt={true}
    >
      {/* 21st.dev Border Beam on Featured Cards */}
      {project.featured && (
        <BorderBeam
          size={180}
          duration={10}
          delay={project.id === 'studybuddy-ai' ? 0 : project.id === 'weatherify' ? 3 : 6}
          colorFrom="#06b6d4"
          colorTo="#6366f1"
        />
      )}

      <div className="space-y-4">
        
        {/* Category & Period */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {project.category}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.period}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-cyan-400/80 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Interactive Live Mini Demo */}
        <div className="pt-2">
          {renderInteractiveDemo()}
        </div>

        {/* Highlights */}
        {project.highlights && (
          <div className="space-y-1.5 pt-2">
            {project.highlights.slice(0, 2).map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Card Actions */}
      <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onOpenModal(project)}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group/btn"
        >
          <span>Deep Dive Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </motion.button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

    </SpotlightCard>
  );
}
