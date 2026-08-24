import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  BookOpen, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  Mic, 
  MicOff, 
  Music, 
  Terminal, 
  RefreshCw, 
  Code2, 
  ShieldCheck, 
  Volume2, 
  Play, 
  Pause,
  SkipForward,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FlagshipDualShowcase() {
  const [selectedFlagship, setSelectedFlagship] = useState('studybuddy'); // 'studybuddy' | 'aurax'
  const [studyTopic, setStudyTopic] = useState(0);
  const [isSimulatingRAG, setIsSimulatingRAG] = useState(false);
  const [isFlippedCard, setIsFlippedCard] = useState(false);
  const [quizSelected, setQuizSelected] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Aura-X States
  const [voiceCommandIdx, setVoiceCommandIdx] = useState(0);
  const [isVoiceListening, setIsVoiceListening] = useState(true);
  const [isPlayingSpotify, setIsPlayingSpotify] = useState(true);

  const studyTopics = [
    {
      title: "RAG & Vector Retrieval",
      file: "AI_Architecture_Notes.pdf",
      page: "Page 4, Line 12",
      chunk: "...Retrieval-Augmented Generation couples dense semantic embeddings with local LLM decoders to completely eliminate cloud hallucination and maintain 100% data confidentiality...",
      prompt: "Explain how StudyBuddy AI guarantees $0 cloud cost with source attribution.",
      answer: "StudyBuddy AI runs quantized 4-bit local LLMs via Ollama directly on consumer hardware. It maps query vectors to local chunks and synthesizes answers with exact page/line citations without any cloud API requests.",
      flashcard: {
        front: "What are the 3 main steps of the StudyBuddy AI pipeline?",
        back: "1. PDF Semantic Chunking & Local Vector Embeddings\n2. Cosine Similarity Top-K Retrieval\n3. Local LLM Context Synthesis with Citation Highlighting"
      },
      quiz: {
        question: "Why does StudyBuddy AI achieve $0 ongoing inference cost?",
        options: [
          "It uses free tier cloud APIs",
          "It runs quantized LLMs locally via Ollama / GGML on device",
          "It skips language models entirely",
          "It caches previous answers only"
        ],
        correct: 1
      }
    },
    {
      title: "Operating Systems & Memory",
      file: "OS_Virtual_Memory_Lec.pdf",
      page: "Page 18, Para 3",
      chunk: "...Virtual memory decouples the programmer's perception of memory from physical RAM using page tables, TLB caching, and demand paging to prevent memory overflow...",
      prompt: "How does demand paging differ from static memory allocation?",
      answer: "Demand paging brings virtual pages into physical memory only when accessed (page fault), maximizing RAM efficiency compared to static contiguous loading.",
      flashcard: {
        front: "What hardware component speeds up virtual page address translation?",
        back: "The Translation Lookaside Buffer (TLB) acts as a high-speed associative hardware cache for page table entries."
      },
      quiz: {
        question: "When is a virtual memory page actually loaded into RAM under demand paging?",
        options: [
          "During program compilation",
          "When the program is first launched",
          "Only when referenced and triggered by a page fault",
          "When the OS shuts down"
        ],
        correct: 2
      }
    }
  ];

  const currentStudy = studyTopics[studyTopic];

  const voiceCommands = [
    {
      speech: "Aura, play lo-fi focus tracks on Spotify and open VS Code",
      intent: "MULTI_STEP_AUTOMATION",
      spotifyTrack: "Chill Synthwave Beats (Coding Edition)",
      artist: "Lo-Fi AI Radio",
      actions: [
        "Spotify API: Initialized playback for URI: spotify:playlist:coding_lofi",
        "OS Bridge: Executed `code .` in working repository",
        "HUD: Switched to developer focus state"
      ],
      memoryTurn: "Turn 6 [User State: Coding Session Active]"
    },
    {
      speech: "Aura, check local Ollama server status and GPU memory",
      intent: "SYSTEM_DIAGNOSTIC",
      spotifyTrack: "Ambient Chillout",
      artist: "Deep Focus",
      actions: [
        "System Monitor: Ollama daemon active on port 11434",
        "VRAM Check: 4.8 GB allocated (Llama 3 8B Quantized)",
        "Latency: 28 tokens/sec inference ready"
      ],
      memoryTurn: "Turn 7 [System State: Local AI Ready]"
    }
  ];

  const currentVoice = voiceCommands[voiceCommandIdx];

  const handleRunRAG = () => {
    setIsSimulatingRAG(true);
    setQuizSelected(null);
    setIsFlippedCard(false);
    setTimeout(() => {
      setStudyTopic((prev) => (prev + 1) % studyTopics.length);
      setIsSimulatingRAG(false);
    }, 700);
  };

  const handleCopyCode = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden shadow-2xl space-y-8">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Header & Switcher */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive AI Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            Atharva's <span className="text-gradient-cyan">Flagship AI Innovations</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Test live simulated workflows for both primary AI systems built with Python and Local LLMs.
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center p-1.5 rounded-2xl bg-[#090c14] border border-white/10 shadow-inner shrink-0">
          <button
            onClick={() => setSelectedFlagship('studybuddy')}
            className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              selectedFlagship === 'studybuddy'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-cyan-300" />
            <span>StudyBuddy AI (RAG)</span>
          </button>

          <button
            onClick={() => setSelectedFlagship('aurax')}
            className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              selectedFlagship === 'aurax'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mic className="w-4 h-4 text-purple-300" />
            <span>Aura-X (Voice AI)</span>
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          TAB 1: STUDYBUDDY AI DEEP DIVE & LIVE SIMULATION
      ------------------------------------------------------------- */}
      {selectedFlagship === 'studybuddy' && (
        <div className="relative z-10 space-y-8 animate-fade-in">
          
          {/* Top Metric Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-cyan-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Architecture</div>
              <div className="text-sm font-bold text-cyan-300 mt-0.5">Offline Local RAG</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-cyan-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Cloud Token Cost</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">$0.00 / Zero Cost</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-cyan-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Inference Engine</div>
              <div className="text-sm font-bold text-white mt-0.5">Ollama / Llama 3 8B</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-cyan-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Citation Accuracy</div>
              <div className="text-sm font-bold text-yellow-300 mt-0.5">Exact Page & Line</div>
            </div>
          </div>

          {/* Interactive RAG Flow Window */}
          <div className="rounded-2xl bg-[#07090e] border border-white/10 p-5 sm:p-7 space-y-6 shadow-2xl">
            
            {/* Header controls inside RAG window */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Sample Ingested Document:</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                  📄 {currentStudy.file}
                </span>
              </div>

              <button
                onClick={handleRunRAG}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-colors border border-cyan-500/30 w-fit"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingRAG ? 'animate-spin' : ''}`} />
                <span>Simulate Next Query</span>
              </button>
            </div>

            {/* Prompt & Citation Highlighting Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Retrieval & Citation */}
              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-1.5">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Student Query:</div>
                  <div className="p-3 rounded-xl bg-slate-900/90 text-white font-sans text-sm border border-white/10">
                    "{currentStudy.prompt}"
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-yellow-400 flex items-center gap-1 font-semibold">
                      <BookOpen className="w-3.5 h-3.5" /> Source Citation ({currentStudy.page})
                    </span>
                    <span className="text-emerald-400 font-bold">100% Vector Match</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-100 font-sans text-xs leading-relaxed">
                    <span className="bg-yellow-400/30 text-yellow-100 font-bold px-1.5 py-0.5 rounded mr-1.5">
                      Retrieved Chunk:
                    </span>
                    {currentStudy.chunk}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Synthesized Answer with Citations:
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0b0e17] text-slate-200 font-sans text-xs border border-white/5 leading-relaxed">
                    {currentStudy.answer}
                  </div>
                </div>
              </div>

              {/* Right Column: Flashcard & Quiz Interactive Modules */}
              <div className="space-y-4">
                
                {/* Interactive Flashcard */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Generated Flashcard:</span>
                    <span className="text-cyan-400 text-[11px]">Click card to flip</span>
                  </div>

                  <div 
                    onClick={() => setIsFlippedCard(!isFlippedCard)}
                    className="cursor-pointer h-32 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0e121e] border border-cyan-500/30 p-4 flex flex-col justify-between hover:border-cyan-400 transition-all shadow-lg text-center"
                  >
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                      {isFlippedCard ? 'Answer / Concept Review' : 'Active Recall Question'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white px-2">
                      {isFlippedCard ? currentStudy.flashcard.back : currentStudy.flashcard.front}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 flex items-center justify-center gap-1">
                      <RotateCcw className="w-3 h-3 text-cyan-400" />
                      <span>{isFlippedCard ? 'Click to view question' : 'Click to reveal answer'}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Quiz Generator */}
                <div className="space-y-2 pt-1 font-sans">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>Generated Practice Quiz:</span>
                    <span className="text-emerald-400 font-bold text-[10px]">Instant Feedback</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2.5">
                    <div className="text-xs font-semibold text-white">
                      {currentStudy.quiz.question}
                    </div>

                    <div className="space-y-1.5">
                      {currentStudy.quiz.options.map((opt, idx) => {
                        const isSelected = quizSelected === idx;
                        const isCorrect = idx === currentStudy.quiz.correct;
                        return (
                          <button
                            key={idx}
                            onClick={() => setQuizSelected(idx)}
                            className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-center justify-between ${
                              isSelected
                                ? isCorrect
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                                  : 'bg-red-500/20 text-red-300 border border-red-500/40'
                                : 'bg-white/[0.03] text-slate-300 hover:bg-white/10'
                            }`}
                          >
                            <span>{opt}</span>
                            {isSelected && (
                              <span>{isCorrect ? '✅ Correct' : '❌ Try Again'}</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* -------------------------------------------------------------
          TAB 2: AURA-X AI ASSISTANT DEEP DIVE & VOICE HUD
      ------------------------------------------------------------- */}
      {selectedFlagship === 'aurax' && (
        <div className="relative z-10 space-y-8 animate-fade-in">
          
          {/* Top Metric Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-purple-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Modality</div>
              <div className="text-sm font-bold text-purple-300 mt-0.5">Voice & NLP Speech</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-purple-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Memory Architecture</div>
              <div className="text-sm font-bold text-cyan-300 mt-0.5">Conversational Buffer</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-purple-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">Integrations</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">Spotify API + OS Bridge</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0a0d17] border border-purple-500/20 text-center">
              <div className="text-slate-400 text-[10px] uppercase">HUD Frontend</div>
              <div className="text-sm font-bold text-white mt-0.5">PyQt Desktop Window</div>
            </div>
          </div>

          {/* Aura-X Voice HUD Simulation Box */}
          <div className="rounded-2xl bg-[#07090e] border border-purple-500/30 p-5 sm:p-7 space-y-6 shadow-2xl">
            
            {/* Header controls inside Aura-X HUD */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                <span className="text-white font-bold">Aura-X Voice Agent Engine</span>
                <span className="text-slate-500">•</span>
                <span className="text-purple-300">{currentVoice.memoryTurn}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsVoiceListening(!isVoiceListening)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-colors border ${
                    isVoiceListening 
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                      : 'bg-slate-800 text-slate-400 border-white/5'
                  }`}
                >
                  {isVoiceListening ? <Mic className="w-3.5 h-3.5 text-purple-400 animate-pulse" /> : <MicOff className="w-3.5 h-3.5" />}
                  <span>{isVoiceListening ? 'Microphone Active' : 'Muted'}</span>
                </button>

                <button
                  onClick={() => setVoiceCommandIdx((prev) => (prev + 1) % voiceCommands.length)}
                  className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono flex items-center gap-1 border border-white/10 transition-colors"
                >
                  <RefreshCw className="w-3 h-3 text-cyan-400" />
                  <span>Next Voice Scenario</span>
                </button>
              </div>
            </div>

            {/* Voice Audio Waveform Frequency Visualizer */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 flex flex-col items-center justify-center gap-3">
              <div className="flex items-center gap-1 h-14 w-full justify-center max-w-md">
                {[15, 30, 60, 45, 80, 95, 70, 40, 85, 90, 65, 35, 75, 90, 45, 25].map((val, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      height: isVoiceListening ? [`${val * 0.3}%`, `${val}%`, `${val * 0.4}%`] : '10%'
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.1,
                      delay: idx * 0.05,
                      ease: 'easeInOut'
                    }}
                    className="w-1.5 bg-gradient-to-t from-purple-600 via-indigo-400 to-cyan-400 rounded-full"
                  />
                ))}
              </div>
              <div className="text-[11px] font-mono text-purple-300">
                {isVoiceListening ? '🎙️ Spoken Command Recognized:' : 'Microphone paused'}
              </div>
              <div className="text-sm font-sans font-bold text-white text-center">
                "{currentVoice.speech}"
              </div>
            </div>

            {/* Actions & Spotify Widget Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Automated Actions Dispatched */}
              <div className="space-y-3 font-mono text-xs">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                  Automated Task Decomposition:
                </div>
                <div className="space-y-2">
                  {currentVoice.actions.map((act, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Spotify Controller Simulation */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Spotify API Sync:</span>
                  <span className="text-emerald-400 font-bold text-[10px]">Connected</span>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-[#0b0e17] border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                        <Music className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{currentVoice.spotifyTrack}</div>
                        <div className="text-[10px] text-slate-400">{currentVoice.artist}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsPlayingSpotify(!isPlayingSpotify)}
                      className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      {isPlayingSpotify ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                  </div>

                  {/* Playback progress bar */}
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-emerald-400 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-slate-500">
                      <span>1:42</span>
                      <span>3:10</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
