import { useEffect, useState } from "react";

const words = [
  "Building modern products",
  "Crafting smooth user experiences",
  "Turning ideas into scalable apps",
];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const atEnd = subIndex === current.length;
    const atStart = subIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && atEnd) {
          setDeleting(true);
          return;
        }

        if (deleting && atStart) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }

        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 45 : atEnd ? 1200 : 80,
    );

    return () => clearTimeout(timeout);
  }, [index, subIndex, deleting]);

  return (
    <p className="typing-gradient text-lg text-zinc-200 md:text-xl">
      {words[index].substring(0, subIndex)}
      <span className="ml-0.5 animate-pulse text-red-400">|</span>
    </p>
  );
}
