/**
 * Terminal Component
 * Full-screen terminal interface activated by Konami code
 * Provides command-line interaction with portfolio information
 */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  history: Array<{ command: string; output: string }>;
  onExecuteCommand: (command: string) => void;
  onClose: () => void;
}

export function Terminal({ isOpen, history, onExecuteCommand, onClose }: TerminalProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onExecuteCommand(input);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col bg-[#0C0C0C]/95 backdrop-blur-xl"
          data-testid="terminal-overlay"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#D7E2EA]/15">
            <span className="hero-heading font-bold uppercase tracking-widest text-sm md:text-base font-mono">
              adnan@raza-portfolio — shell
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest text-xs px-4 py-2 hover:bg-[#D7E2EA]/10 transition-colors"
              data-testid="terminal-close"
            >
              <X className="h-3.5 w-3.5" />
              Esc
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            ref={outputRef}
            className="flex-1 p-6 md:p-10 overflow-y-auto font-mono text-sm md:text-base max-w-4xl mx-auto w-full"
            data-testid="terminal-output"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-3">
                {entry.command && (
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-accent">adnan@raza-portfolio:~$</span>
                    <span className="text-[#D7E2EA]">{entry.command}</span>
                  </div>
                )}
                {entry.output && (
                  <div className="whitespace-pre-wrap mb-2 text-[#D7E2EA]/70 mt-1">{entry.output}</div>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-accent">adnan@raza-portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleSubmit}
                className="bg-transparent border-none outline-none text-[#D7E2EA] font-mono flex-1 ml-2"
                autoComplete="off"
                spellCheck={false}
                data-testid="terminal-input"
              />
              <span className="cursor-blink text-[#D7E2EA]">█</span>
            </div>
          </motion.div>

          <div className="px-6 md:px-10 py-4 border-t border-[#D7E2EA]/15 text-center">
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs font-mono">
              Type &apos;help&apos; for commands · Esc to close
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
