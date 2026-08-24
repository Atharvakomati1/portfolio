import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, ArrowRight, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Glow ambient background inside modal */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10 border border-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="relative z-10 space-y-3 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.period}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-cyan-300/90 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="relative z-10 py-6 space-y-6">
          
          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xs text-slate-400 font-mono mb-1">{m.label}</div>
                  <div className="text-sm sm:text-base font-bold text-white">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Full description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-2">
              Overview & Problem Statement
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Architecture Pipeline Steps */}
          {project.architectureSteps && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Architecture & Engineering Pipeline</span>
              </h4>
              <div className="space-y-2">
                {project.architectureSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </div>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features / Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-3">
                Key Accomplishments & Features
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack badges */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-2 border border-white/10"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
