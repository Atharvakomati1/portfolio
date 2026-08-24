import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  HelpCircle, 
  Sparkles, 
  Check, 
  Maximize2,
  Minimize2,
  Copy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands, personalInfo } from '../data/portfolioData';

export default function TerminalPage() {
  const [history, setHistory] = useState([
    {
      command: 'init',
      output: '⚡ Atharva Komati Interactive CLI Environment [v2.4.0]\nType "help" to view all available commands or click quick-command buttons below.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Add to navigation history
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'sudo hire') {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const output = terminalCommands[trimmed] || `Command not found: "${trimmed}". Type "help" for a list of valid commands.`;

    setHistory((prev) => [
      ...prev,
      { command: cmdText, output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx + 1 < cmdHistory.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  const quickActions = [
    'studybuddy',
    'aurax',
    'whoami',
    'skills',
    'projects',
    'experience',
    'education',
    'contact',
    'stats',
    'sudo hire'
  ];

  return (
    <div className="relative z-10 space-y-8 pt-28 sm:pt-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Interactive Shell</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Developer <span className="text-gradient-cyan">Terminal CLI</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Explore Atharva's background, system architecture, and experience via an interactive command-line interface.
        </p>
      </div>

      {/* Quick Action Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-mono text-slate-500 mr-1">Quick Run:</span>
        {quickActions.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              cmd === 'sudo hire'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-md shadow-cyan-500/20 hover:scale-105'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Window Box */}
      <div className="glass-panel rounded-2xl border border-white/15 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#0b0d14] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-slate-400 text-xs ml-2 font-mono hidden sm:inline">
              guest@atharva-dev:~
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <button
              onClick={() => {
                setHistory([]);
              }}
              title="Clear Terminal"
              className="p-1 hover:text-white transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Content Area */}
        <div 
          ref={containerRef}
          className="p-4 sm:p-6 space-y-4 max-h-[500px] min-h-[350px] overflow-y-auto bg-[#07090e]/95 text-slate-200 scroll-smooth"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command !== 'init' && (
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span>guest@atharva:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
              )}
              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-cyan-500/30">
                {item.output}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-cyan-400 font-bold">guest@atharva:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. 'help', 'skills', 'sudo hire')..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
              autoFocus
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Helper Footer */}
      <div className="text-center text-xs text-slate-500 font-mono">
        💡 Tip: Use <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">↑</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">↓</kbd> arrow keys to browse command history.
      </div>

    </div>
  );
}
