import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function Character({ char, index, total, progress }: { char: string; index: number; total: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span aria-hidden="true" className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      {characters.map((char, i) => (
        <Character key={i} char={char === " " ? " " : char} index={i} total={characters.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
