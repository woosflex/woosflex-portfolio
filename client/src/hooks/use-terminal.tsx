import { useState, useCallback } from 'react';
import { portfolioData } from '@/data/portfolio';

interface TerminalCommand {
  command: string;
  output: string;
}

export function useTerminal() {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Available terminal commands generated from portfolioData
  const commands: Record<string, () => string> = {
    help: () =>
      'Available commands:\n' +
      '  about         - Professional background & engineering philosophy\n' +
      '  skills        - Technical skills across systems, infrastructure & bioinformatics\n' +
      '  projects      - Featured software projects & libraries\n' +
      '  experience    - Professional research software experience\n' +
      '  publications  - Peer-reviewed research papers and preprints\n' +
      '  education     - Degrees, academic credentials & qualifications\n' +
      '  thesis        - Undergraduate thesis link\n' +
      '  contact       - Communication routes & social links\n' +
      '  clear         - Clear terminal output\n' +
      '  exit          - Close the terminal',

    about: () =>
      `${portfolioData.hero.name} — ${portfolioData.hero.headline}\n` +
      `${portfolioData.hero.subheadline}\n\n` +
      portfolioData.about.paragraphs.join('\n\n'),

    skills: () =>
      'Technical Skills:\n' +
      portfolioData.skills
        .map((cat) => `\n[${cat.title}]\n  ${cat.skills.join(', ')}`)
        .join('\n'),

    projects: () =>
      'Featured Projects:\n' +
      portfolioData.projects
        .map(
          (p) =>
            `\n• ${p.title} (${p.category})\n` +
            `  ${p.description}\n` +
            `  Tech: ${p.technologies.join(', ')}\n` +
            (p.benchmarkHighlight ? `  Benchmark: ${p.benchmarkHighlight.opsPerSec} | ${p.benchmarkHighlight.scaling}\n` : '') +
            (p.links.github ? `  Repo: ${p.links.github}\n` : '')
        )
        .join(''),

    experience: () =>
      'Professional Experience:\n' +
      portfolioData.experience
        .map(
          (exp) =>
            `\n• ${exp.organization} ${exp.lab ? `(${exp.lab})` : ''}\n` +
            `  Roles: ${exp.roles.map((r) => `${r.title} [${r.period}]`).join(', ')}\n` +
            (exp.summary ? `  ${exp.summary}\n` : '') +
            `  Areas:\n${exp.areas.map((a) => `    - ${a}`).join('\n')}`
        )
        .join('\n'),

    publications: () =>
      'Publications:\n' +
      portfolioData.publications
        .map(
          (pub) =>
            `\n• "${pub.title}"\n` +
            `  ${pub.authors} (${pub.year}). ${pub.venue}${pub.citationDetails ? `, ${pub.citationDetails}` : ''}.\n` +
            `  DOI: ${pub.doi} (${pub.url})`
        )
        .join('\n'),

    education: () =>
      'Education & Qualifications:\n' +
      portfolioData.education
        .map(
          (edu) =>
            `\n• ${edu.degree} — ${edu.institution} (${edu.period})\n` +
            `  ${edu.grade}${edu.honours ? ` [${edu.honours}]` : ''}\n` +
            (edu.details ? `  ${edu.details}\n` : '')
        )
        .join('') +
      `\n• ${portfolioData.qualification.title} (${portfolioData.qualification.year}) — ${portfolioData.qualification.status}`,

    thesis: () => `Undergraduate thesis PDF: ${portfolioData.about.thesis.url}`,

    contact: () =>
      `Email: ${portfolioData.contact.email}\n` +
      `GitHub: ${portfolioData.contact.github}\n` +
      `LinkedIn: ${portfolioData.contact.linkedin}\n` +
      `Google Scholar: ${portfolioData.contact.scholar}`,

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
      output = `Command not found: '${command}'\nType 'help' for available commands.`;
    } else {
      output = '';
    }

    setHistory((prev) => [...prev, { command: input, output }]);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    setHistory([{ command: '', output: "Welcome to Adnan's shell. Type 'help' to see available commands." }]);
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
