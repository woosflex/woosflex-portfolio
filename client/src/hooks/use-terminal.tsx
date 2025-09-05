/**
 * Terminal Hook
 * Manages the hidden terminal interface state and command execution
 * Provides predefined commands for portfolio navigation and information
 */

import { useState, useCallback } from 'react';

interface TerminalCommand {
  command: string;
  output: string;
}

export function useTerminal() {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Available terminal commands with their outputs
  const commands: Record<string, () => string> = {
    help: () => 'Available commands: about, projects, vision, contact, clear, exit, mellon',
    about: () => 'Adnan Raza. I build computationally efficient models of complex biological systems, merging practical software engineering with a forward-looking vision for AI and biological computing.',
    projects: () => 'Featured Projects:\n• TracEon: High-performance genomic data cache\n• AutophiGen: Deprecated phylogenetic analysis automator\n• GCVisualyst: GC content visualization tool\n• RNA-Seq Pipeline: Transitioning to Nextflow implementation\n• GRN Analysis: MS gene regulatory network analysis',
    vision: () => 'My research goal is to apply principles of systems design to the ultimate biological hardware: neurons. I focus on optimizing computational biology at fundamental layers.',
    contact: () => 'Email: adnanraza3435@gmail.com\nLinkedIn: linkedin.com/in/woosflex\nGitHub: github.com/woosflex\nGoogle Scholar: scholar.google.com/citations?user=fuD1FzcAAAAJ',
    clear: () => '',
    exit: () => '',
    mellon: () => "'The doors of Durin, Lord of Moria. Speak, friend, and enter.'"
  };

  const executeCommand = useCallback((input: string) => {
    const command = input.trim().toLowerCase();
    
    if (command === 'clear') {
      setHistory([]);
      return;
    }
    
    if (command === 'exit') {
      setIsOpen(false);
      return;
    }
    
    let output: string;
    if (commands[command]) {
      output = commands[command]();
    } else if (command) {
      output = `Command not found: ${command}\nType 'help' for available commands.`;
    } else {
      output = '';
    }
    
    setHistory(prev => [...prev, { command: input, output }]);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    setHistory([{ command: '', output: 'Welcome to the shell. Type \'help\' to see available commands.' }]);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setHistory([]);
  }, []);

  return {
    history,
    isOpen,
    executeCommand,
    open,
    close
  };
}
