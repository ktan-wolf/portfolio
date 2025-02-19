import { useState, useEffect } from "react";

const greetings = [
  "Hello",       // English
  "Hola",        // Spanish
  "Bonjour",     // French
  "こんにちは",     // Japanese
  "नमस्ते",      // Hindi
  "Ciao",        // Italian
  "Olá",         // Portuguese
];

const Preloader = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 230); // Change text every 1 second

    setTimeout(() => {
      setFade(true);
      setTimeout(onFinish, 800); // Fade-out effect before removing
    }, 1000); // Total duration of preloader

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-800 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-4xl text-white font-bold animate-fade">
        {greetings[index]}
      </h1>
    </div>
  );
};

export default Preloader;
