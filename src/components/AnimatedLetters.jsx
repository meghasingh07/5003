import React from "react";
export default function AnimatedLetters({ text, delayStart = 0 }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            animation: "fadeInUp 0.5s ease forwards",
            animationDelay: `${delayStart + i * 0.05}s`,
            opacity: 0,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
