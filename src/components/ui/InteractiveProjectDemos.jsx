import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  CloudSun, 
  Wind, 
  Droplets, 
  Mic, 
  MicOff, 
  Music, 
  ShieldCheck, 
  CreditCard, 
  RefreshCw,
  Play,
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* =========================================================================
   1. StudyBuddy AI Live RAG Widget
========================================================================= */
export function StudyBuddyRAGDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    {
      query: "What are the core stages of RAG architecture?",
      citation: "Lecture_Notes_04.pdf (Page 3, Line 14)",
      extractedChunk: "...Retrieval-Augmented Generation pairs a local dense vector retriever with an LLM synthesizer to eliminate hallucinations...",
      answer: "RAG involves (1) Document Chunking & Embedding, (2) Semantic Top-K Vector Retrieval, and (3) Contextual LLM Generation with source highlighting."
    },
    {
      query: "How does zero-cost local LLM inference work?",
      citation: "System_Architecture_Doc.pdf (Page 1, Para 2)",
      extractedChunk: "...using quantized 4-bit GGML weights on local hardware via Ollama or llama.cpp ensures $0 cloud API costs with zero external data leaks...",
      answer: "Local inference runs quantized LLMs directly on native hardware without cloud API tokens or external data transmission."
    }
  ];

  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setIsProcessing(false);
    }, 600);
  };

  const current = steps[activeStep];

  return (
    <div className="rounded-2xl bg-[#090c14] border border-cyan-500/20 p-4 font-mono text-xs space-y-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2 text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span className="font-semibold">Local RAG Engine (Ollama / GGML)</span>
        </div>
        <button
          onClick={handleNext}
          className="px-2 py-0.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-colors flex items-center gap-1 text-[11px]"
        >
          <RefreshCw className={`w-3 h-3 ${isProcessing ? 'animate-spin' : ''}`} />
          <span>Simulate Query</span>
        </button>
      </div>

      <div className="space-y-1.5">
        <div className="text-[11px] text-slate-400">Prompt / Question:</div>
        <div className="p-2 rounded bg-slate-900/90 text-white border border-white/5 font-sans font-medium text-xs">
          "{current.query}"
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-yellow-400">
            <BookOpen className="w-3 h-3" />
            Source Citation: {current.citation}
          </span>
          <span className="text-emerald-400 font-bold">100% Offline Match</span>
        </div>
        <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90 text-[11px] font-sans leading-relaxed">
          <span className="bg-yellow-400/30 text-yellow-100 font-semibold px-1 rounded mr-1">
            Retrieved Chunk:
          </span>
          {current.extractedChunk}
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-[11px] text-emerald-400 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          <span>Generated Answer with Citations:</span>
        </div>
        <div className="p-2 rounded bg-slate-950 text-slate-200 border border-white/5 font-sans text-xs">
          {current.answer}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. Weatherify Live Visual Trend Demo
========================================================================= */
export function WeatherifyLiveDemo() {
  const [unit, setUnit] = useState('C');
  const tempC = 27;
  const tempF = Math.round((tempC * 9) / 5 + 32);

  const forecast = [
    { day: 'Mon', temp: unit === 'C' ? '26°' : '79°', height: '65%' },
    { day: 'Tue', temp: unit === 'C' ? '28°' : '82°', height: '80%' },
    { day: 'Wed', temp: unit === 'C' ? '27°' : '80°', height: '70%' },
    { day: 'Thu', temp: unit === 'C' ? '29°' : '84°', height: '90%' },
    { day: 'Fri', temp: unit === 'C' ? '25°' : '77°', height: '60%' },
  ];

  return (
    <div className="rounded-2xl bg-[#090c14] border border-blue-500/20 p-4 font-mono text-xs space-y-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2 text-blue-400">
          <CloudSun className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold font-sans">Weatherify Live ETL Feed</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-0.5 border border-white/5 text-[10px]">
          <button
            onClick={() => setUnit('C')}
            className={`px-1.5 py-0.5 rounded ${unit === 'C' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
          >
            °C
          </button>
          <button
            onClick={() => setUnit('F')}
            className={`px-1.5 py-0.5 rounded ${unit === 'F' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
          >
            °F
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <div>
          <div className="text-2xl font-bold text-white font-sans">
            {unit === 'C' ? `${tempC}°C` : `${tempF}°F`}
          </div>
          <div className="text-[11px] text-slate-400">Pune, India • Partly Cloudy</div>
        </div>
        <div className="text-right space-y-0.5 text-[10px] text-slate-400">
          <div className="flex items-center justify-end gap-1 text-cyan-300">
            <Wind className="w-3 h-3" /> 14 km/h
          </div>
          <div className="flex items-center justify-end gap-1 text-blue-300">
            <Droplets className="w-3 h-3" /> 48% Humidity
          </div>
        </div>
      </div>

      {/* Mini Forecast Chart */}
      <div className="space-y-1 pt-1">
        <div className="text-[10px] text-slate-500 uppercase tracking-wider">
          Matplotlib Matched 5-Day Trend
        </div>
        <div className="flex items-end justify-between h-16 pt-2 px-1 border-b border-white/5">
          {forecast.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-[9px] text-cyan-300 font-bold">{f.temp}</span>
              <div 
                className="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t transition-all duration-500"
                style={{ height: f.height }}
              />
              <span className="text-[9px] text-slate-500">{f.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. Aura-X Voice Assistant Interactive Demo
========================================================================= */
export function AuraXVoiceDemo() {
  const [isListening, setIsListening] = useState(true);
  const [activeCommand, setActiveCommand] = useState("Play coding playlist on Spotify & open VS Code");

  return (
    <div className="rounded-2xl bg-[#090c14] border border-purple-500/20 p-4 font-mono text-xs space-y-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2 text-purple-400">
          <Volume2 className="w-4 h-4 text-purple-400" />
          <span className="font-semibold font-sans">Aura-X Voice Automation HUD</span>
        </div>
        <button
          onClick={() => setIsListening(!isListening)}
          className={`px-2 py-0.5 rounded text-[11px] flex items-center gap-1 transition-colors ${
            isListening ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-slate-800 text-slate-400'
          }`}
        >
          {isListening ? <Mic className="w-3 h-3 text-purple-400 animate-pulse" /> : <MicOff className="w-3 h-3" />}
          <span>{isListening ? 'Listening...' : 'Muted'}</span>
        </button>
      </div>

      {/* Waveform Visualizer */}
      <div className="flex items-center justify-center gap-1.5 h-10 py-1 bg-slate-950 rounded-xl border border-white/5">
        {[20, 45, 80, 60, 95, 40, 75, 90, 50, 30, 85, 40].map((height, i) => (
          <motion.div
            key={i}
            animate={{
              height: isListening ? [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`] : '15%'
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: i * 0.08,
              ease: "easeInOut"
            }}
            className="w-1 bg-gradient-to-t from-purple-600 via-indigo-400 to-cyan-400 rounded-full"
          />
        ))}
      </div>

      <div className="space-y-1">
        <div className="text-[10px] text-slate-400">Multi-Step Intent Parse:</div>
        <div className="p-2 rounded bg-slate-900/90 text-slate-200 border border-white/5 font-sans text-xs">
          "{activeCommand}"
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
        <span className="flex items-center gap-1.5 font-semibold">
          <Music className="w-3.5 h-3.5 text-emerald-400" />
          Spotify API Sync: Active
        </span>
        <span className="text-slate-300">Memory: Turn 4</span>
      </div>
    </div>
  );
}

/* =========================================================================
   4. TPN WebMobi360 Live Admin Metrics Demo
========================================================================= */
export function TPNAdminDemo() {
  return (
    <div className="rounded-2xl bg-[#090c14] border border-emerald-500/20 p-4 font-mono text-xs space-y-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2 text-emerald-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold font-sans">TPN Platform Health & Metrics</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
          Live on Hostinger
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/5">
          <div className="text-[10px] text-slate-400">Production Bugs Fixed</div>
          <div className="text-lg font-bold text-white font-sans mt-0.5">100+ Patched</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/5">
          <div className="text-[10px] text-slate-400">Payment Gateway</div>
          <div className="text-lg font-bold text-cyan-400 font-sans mt-0.5 flex items-center gap-1">
            <CreditCard className="w-4 h-4" /> Razorpay
          </div>
        </div>
      </div>

      <div className="text-[11px] text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/5 flex items-center justify-between font-sans">
        <span>Admin Dashboard RBAC:</span>
        <span className="text-emerald-400 font-mono font-bold text-[10px]">Verified & Secure</span>
      </div>
    </div>
  );
}
