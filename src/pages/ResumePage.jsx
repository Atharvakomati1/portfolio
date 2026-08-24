import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalInfo, experienceData, educationData, projectsData, skillsData } from '../data/portfolioData';

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRaw = () => {
    const rawText = `
ATHARVA KOMATI
Computer Science Student & Full Stack/AI Developer
Phone: ${personalInfo.phone} | Email: ${personalInfo.email} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.socialLinks.linkedin} | GitHub: ${personalInfo.socialLinks.github}

SUMMARY:
${personalInfo.fullBio}

EXPERIENCE:
Full Stack Developer Intern — WebMobi360 Pvt. Ltd. (Pune, India | June 2026 – August 2026)
- Contributed to live Training Placement Network (TPN) platform using Next.js, React, MySQL, and Git.
- Developed Admin Dashboard with database integration and secure authentication.
- Integrated Razorpay payments and developed several pages.
- Identified and resolved 100+ bugs, improving platform stability, validation, navigation, and UI/UX.
- Deployed platform to Hostinger and resolved routing, database connectivity, and server configuration issues.

EDUCATION:
Integrated B.Tech, MIT World Peace University (MIT-WPU), Pune, India (08/2024 – Present)

PROJECTS:
1. StudyBuddy AI (04/2026 - 05/2026): Offline AI-powered study assistant built using RAG architecture to answer questions from student's own notes. Local LLMs, PDF extraction, source citations, flashcards, quiz generator.
2. Weatherify Weather Web App (01/2026 - 01/2026): Full-stack weather web app powered by OpenWeatherMap API, JSON to CSV pipeline, and dynamic Matplotlib graphs.
3. Aura-X AI Assistant (02/2026 - 03/2026): Voice-controlled desktop assistant featuring multi-step command processing, conversational memory, modular backend automating system tasks, and Spotify integration.

SKILLS:
Python, React, Next.js, Flask, C/C++, HTML5, CSS3, JavaScript, NumPy, Pandas, Matplotlib, SQL/MySQL, Git, VS Code, PyQt, Modular, RAG Architecture, Local LLMs.
    `.trim();

    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 space-y-10 pt-28 sm:pt-36 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & Controls (Hidden in Print) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Digital <span className="text-gradient-cyan">Resume</span>
          </h1>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyRaw}
            className="px-4 py-2 text-xs font-mono rounded-xl bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2 border border-white/10"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
            <span>{copied ? 'Copied Text!' : 'Copy Plaintext'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-5 py-2 text-xs font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Clean ATS-Styled Paper Container */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl bg-[#0d1019] text-slate-200 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none space-y-8 font-sans">
        
        {/* Resume Header */}
        <div className="border-b border-white/10 print:border-black/20 pb-6 flex flex-col sm:flex-row items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-display font-extrabold text-white print:text-black tracking-tight uppercase">
              {personalInfo.name}
            </h2>
            <div className="text-sm font-semibold text-cyan-400 print:text-slate-800 mt-0.5">
              Computer Science Student • Full Stack & AI Developer
            </div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 print:text-slate-600 mt-2.5 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400 print:text-black" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400 print:text-black" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400 print:text-black" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-display font-bold text-xl text-cyan-400 print:hidden shrink-0">
            AK
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black font-mono border-b border-cyan-500/20 print:border-black pb-1">
            Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
            I'm a Computer Science student with a keen interest in AI and software development. I have hands-on experience with various programming languages and have completed multiple projects that showcase my ability to create innovative solutions. My strong foundation in programming combined with real-world project experience equips me to contribute effectively to team environments and tackle challenges in technology.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black font-mono border-b border-cyan-500/20 print:border-black pb-1">
            Experience
          </h3>
          {experienceData.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-white print:text-black">{exp.role}</span>
                  <span className="text-slate-400 print:text-slate-600"> — {exp.company}</span>
                </div>
                <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                  {exp.location} | {exp.period}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800 pl-1">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="leading-relaxed">{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black font-mono border-b border-cyan-500/20 print:border-black pb-1">
            Education
          </h3>
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <div className="font-bold text-white print:text-black">{edu.degree}</div>
                <div className="text-cyan-400 print:text-slate-700 text-xs font-semibold">{edu.institution}</div>
              </div>
              <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                {edu.period} | {edu.location}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black font-mono border-b border-cyan-500/20 print:border-black pb-1">
            Projects
          </h3>
          <div className="space-y-4">
            {projectsData.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white print:text-black">{proj.title}</span>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600">{proj.period}</span>
                </div>
                <p className="text-xs text-slate-300 print:text-slate-700 leading-snug">
                  {proj.shortDescription}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300 print:text-slate-800 pl-1">
                  {proj.highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-black font-mono border-b border-cyan-500/20 print:border-black pb-1">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
            <div>
              <span className="font-semibold text-slate-100 print:text-black">Languages: </span>
              <span>Python, JavaScript, C/C++, HTML, CSS, SQL</span>
            </div>
            <div>
              <span className="font-semibold text-slate-100 print:text-black">Frameworks & Libraries: </span>
              <span>React, Next.js, Flask, PyQt, NumPy, Pandas, Matplotlib, Tailwind CSS</span>
            </div>
            <div>
              <span className="font-semibold text-slate-100 print:text-black">Tools & Cloud: </span>
              <span>Git, GitHub, Visual Studio Code, Hostinger Cloud, Razorpay API</span>
            </div>
            <div>
              <span className="font-semibold text-slate-100 print:text-black">AI & Architecture: </span>
              <span>RAG Architecture, Local LLMs, Modular Systems, JSON Pipelines</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
