import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Filter, 
  Sparkles, 
  Github, 
  ExternalLink, 
  Cpu, 
  Database, 
  Terminal, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import FlagshipDualShowcase from '../components/ui/FlagshipDualShowcase';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Full Stack', 'AI & Systems'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative z-10 space-y-16 pt-28 sm:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Engineering Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
          Projects & <span className="text-gradient-cyan">System Architecture</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Explore offline RAG AI systems, real-time data pipelines, desktop automation assistants, and enterprise full-stack platforms.
        </p>
      </div>

      {/* Flagship AI Systems Spotlight */}
      <FlagshipDualShowcase />

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech, name, or keyword..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-panel rounded-2xl border border-white/5 space-y-3">
          <p className="text-sm text-slate-400">No projects found matching "{searchQuery}".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="text-xs font-mono text-cyan-400 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Deep Dive Architecture Highlights Section */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture Breakdown</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Engineering Principles & Design Patterns
          </h2>
          <p className="text-sm text-slate-300">
            How these projects address real-world constraints: zero-cost local inference, data transformations, and high-load web stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs font-mono">
              01
            </div>
            <h3 className="text-base font-bold text-white">Offline Local RAG</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              StudyBuddy AI executes semantic search and local LLM generation without third-party cloud dependence, guaranteeing 100% student privacy and $0 ongoing inference cost.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs font-mono">
              02
            </div>
            <h3 className="text-base font-bold text-white">ETL & Data Streaming</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Weatherify processes real-time JSON meteorological streams, transforms unstructured data into tabular CSV records, and plots multi-metric visual forecast curves.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
              03
            </div>
            <h3 className="text-base font-bold text-white">Production Reliability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              During the WebMobi360 internship, 100+ production bugs were systematically identified and patched, stabilizing Next.js routing, MySQL transactions, and Razorpay flows.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
