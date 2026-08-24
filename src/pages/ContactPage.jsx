import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Sparkles, 
  Clock,
  ArrowRight,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Hiring Opportunity',
    message: ''
  });
  const [copiedType, setCopiedType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    'Internship / Hiring Opportunity',
    'AI & RAG Project Collaboration',
    'Full Stack Web Development',
    'General Inquiry & Networking'
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <div className="relative z-10 space-y-16 pt-28 sm:pt-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
          <Send className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
          Let's Build the <span className="text-gradient-cyan">Next Great Project</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Open for software engineering roles, internships, AI pipeline development, and full-stack collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Column: Direct Info & Quick Copy (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Contact Card 1: Email */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 border border-white/5"
              >
                {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Email Address</div>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block mt-0.5"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Contact Card 2: Phone */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 border border-white/5"
              >
                {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'phone' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Phone Number</div>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors block mt-0.5"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <MapPin className="w-4 h-4" />
              <span>Location & Availability</span>
            </div>
            <div className="text-sm font-semibold text-white">
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="text-xs font-mono text-slate-400">Social Profiles</div>
            <div className="flex gap-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs border border-white/5"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs border border-white/5"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Form (Span 3) */}
        <div className="lg:col-span-3">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Atharva will review your message and reply promptly at <span className="text-cyan-400 font-mono">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: subjects[0], message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below or write directly to <span className="text-cyan-400 font-mono">{personalInfo.email}</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject / Intent</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    {subjects.map((s, idx) => (
                      <option key={idx} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project scope, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
