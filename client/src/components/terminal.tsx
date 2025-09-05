/**
 * Terminal Component
 * Full-screen terminal interface activated by Konami code
 * Provides command-line interaction with portfolio information
 */

import { useEffect, useRef, useState } from 'react';

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

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay flex flex-col" data-testid="terminal-overlay">
      <div 
        ref={outputRef}
        className="flex-1 p-8 overflow-y-auto text-green-400"
        data-testid="terminal-output"
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.command && (
              <div className="flex items-center">
                <span className="text-accent">adnan@raza-portfolio:~$</span>
                <span className="ml-2">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <div className="whitespace-pre-wrap mb-2">{entry.output}</div>
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
            className="terminal-input ml-2"
            autoComplete="off"
            spellCheck={false}
            data-testid="terminal-input"
          />
          <span className="cursor-blink">█</span>
        </div>
      </div>
    </div>
  );
}
