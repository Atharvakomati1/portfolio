import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  Terminal, 
  Search, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Cpu: Cpu,
    Layout: Layout,
    Database: Database,
    Terminal: Terminal
  };

  const allCategories = ['All', ...skillsData.categories.map((c) => c.name)];

  const filteredCategories = skillsData.categories.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.experience.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter((cat) => {
    const matchesCategory = activeCategory === 'All' || cat.name === activeCategory;
    return matchesCategory && cat.skills.length > 0;
  });

  return (
    <div className="relative z-10 space-y-16 pt-28 sm:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
          <Code2 className="w-3.5 h-3.5" />
          <span>Technical Proficiencies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
          Skills & <span className="text-gradient-cyan">Tech Matrix</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Comprehensive breakdown of languages, frameworks, AI architectures, database systems, and developer tooling.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {allCategories.map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === catName
                  ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skill, framework, or tool..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-12">
        {filteredCategories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || Code2;
          return (
            <div 
              key={idx}
              className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/10 space-y-6 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {cat.name}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
                  {cat.skills.length} Technologies
                </span>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all space-y-3 group hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {skill.badge}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-slate-400">
                        <span>Proficiency</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-1 border-t border-white/5">
                      <span>Applied in:</span>
                      <span className="text-slate-300">{skill.experience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Applied Tech In Practice Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack Integration</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            How Skills Translate to Production
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">01.</span>
              <span>AI & RAG Engineering</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Combining Python, local LLM quantization (Ollama/GGML), semantic vector chunking, and source citation algorithms to build StudyBuddy AI and Aura-X.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">02.</span>
              <span>Full Stack Web Development</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Architecting Next.js and React client frontends connected to MySQL relational backends, Razorpay payment flows, and responsive UI components.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
