import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  CreditCard, 
  Layers, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function ExperiencePage() {
  return (
    <div className="relative z-10 space-y-20 pt-28 sm:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
          Experience & <span className="text-gradient-cyan">Education</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Real-world software engineering contributions, production bug resolution, database architecture, and academic milestones.
        </p>
      </div>

      {/* Work Experience Detailed Breakdown */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 pb-2 border-b border-white/10">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl font-display font-bold text-white">Work Experience</h2>
        </div>

        {experienceData.map((exp) => (
          <div 
            key={exp.id} 
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden space-y-8 hover:border-cyan-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Role Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {exp.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {exp.type}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {exp.role}
                </h3>
                <div className="text-base text-cyan-400 font-medium">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-1 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="relative z-10">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.summary}
              </p>
            </div>

            {/* Key Deliverables & Achievements */}
            <div className="relative z-10 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                Key Contributions & Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Pillars at WebMobi360 */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Assurance</span>
                </div>
                <div className="text-lg font-bold text-white">100+ Bug Fixes</div>
                <p className="text-xs text-slate-400">
                  Enhanced frontend validation, navigation state, and database stability.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold">
                  <CreditCard className="w-4 h-4" />
                  <span>Payment Gateway</span>
                </div>
                <div className="text-lg font-bold text-white">Razorpay API</div>
                <p className="text-xs text-slate-400">
                  Integrated transactional workflows, order verification, and error handling.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                  <Server className="w-4 h-4" />
                  <span>DevOps & Cloud</span>
                </div>
                <div className="text-lg font-bold text-white">Hostinger Deploy</div>
                <p className="text-xs text-slate-400">
                  Managed live production deployment, database routing, and server config.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="relative z-10 pt-4 border-t border-white/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Technologies & Tools Utilized
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 pb-2 border-b border-white/10">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          <h2 className="text-2xl font-display font-bold text-white">Academic Journey</h2>
        </div>

        {educationData.map((edu, idx) => (
          <div 
            key={idx} 
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden space-y-6 hover:border-indigo-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {edu.institution}
                </h3>
                <div className="text-base text-indigo-400 font-medium mt-1">
                  {edu.degree}
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-1 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            <p className="relative z-10 text-sm text-slate-300 leading-relaxed">
              {edu.description}
            </p>

            <div className="relative z-10 space-y-2.5">
              {edu.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <div className="text-center pt-8">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/20 hover:opacity-95 transition-all"
        >
          <span>Discuss Opportunities with Atharva</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
