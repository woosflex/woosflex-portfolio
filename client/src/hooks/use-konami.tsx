/**
 * Konami Code Hook
 * Detects the classic Konami Code sequence: ↑↑↓↓←→←→BA
 * Used to activate the hidden terminal interface easter egg
 */

import { useEffect, useState } from 'react';

// Classic Konami Code sequence
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export function useKonami() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence(prev => {
        const newSequence = [...prev, e.code];
        if (newSequence.length > KONAMI_SEQUENCE.length) {
          newSequence.shift();
        }
        
        if (newSequence.join(',') === KONAMI_SEQUENCE.join(',')) {
          setActivated(true);
          return [];
        }
        
        return newSequence;
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const reset = () => {
    setActivated(false);
    setSequence([]);
  };

  return { activated, reset };
}
