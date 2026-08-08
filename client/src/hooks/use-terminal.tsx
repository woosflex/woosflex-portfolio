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
    help: () => 'Available commands: about, experience, education, projects, opensource, thesis, vision, contact, clear, exit, mellon, onepiece, shadow, ally',
    about: () => 'Adnan Raza. Computational biologist solving biology-based problems with agentic AI, low-level systems engineering, and high-performance computing.',
    experience: () => 'Research Intern, Ahuja Lab, IIIT-Delhi (September 2025 - Present)\nSummer Bioinformatics Intern, Jawaharlal Nehru University (May 2025 - July 2025)\nPublication: Cell Reports -- cell.com/cell-reports/fulltext/S2211-1247(26)00081-1',
    education: () => 'MSc Bioinformatics, Jamia Millia Islamia (August 2024 - May 2026)\nBSc Microbiology, Sharda University (September 2020 - May 2023)',
    projects: () => 'Featured Projects:\n• TracEon: High-performance genomic data cache (C++, expanding into Rust)\n• GRN Analysis: MS gene regulatory network analysis\n• RNA-Seq Analysis: Nextflow pipeline for RNA-seq quantification and QC\n• iQR DNA: Quantum-secure genomic compression suite, developed under InfraQR -- infraqr.com',
    opensource: () => 'Open Source:\n• evolf-pipeline (Ahuja Lab): published computational biology pipeline\n• NucXplore: in-development, unpublished\n• TracEon: macOS build fixes',
    thesis: () => 'Thesis PDF available at /Adnan_Raza_Thesis.pdf',
    vision: () => 'My research goal is to apply agentic AI and systems-level engineering to biological computation, bridging molecular biology with high-performance systems.',
    contact: () => 'Email: adnanraza3435@gmail.com\nLinkedIn: linkedin.com/in/woosflex\nGitHub: github.com/woosflex\nGoogle Scholar: scholar.google.com/citations?user=fuD1FzcAAAAJ',
    clear: () => '',
    exit: () => '',
    mellon: () => "'The doors of Durin, Lord of Moria. Speak, friend, and enter.'",
    onepiece: () => "Ore no nawa Monkey D. Luffy.",
    shadow: () => "I....  Am.... Atomic!!!...",
    ally: () => "It is a chance for Faramir, captain of Gondor, to show his quality."
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
