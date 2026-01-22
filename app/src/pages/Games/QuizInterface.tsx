import React, { useState } from 'react';
import { Star, Timer } from 'lucide-react';

export const QuizInterface = ({ subject, level, onComplete }: any) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  // Exemple de structure de question
  const question = {
    text: "Quel est le résultat de 12 x 8 ?",
    options: ["86", "96", "106", "76"],
    correct: 1
  };

  const handleAnswer = (index: number) => {
    if (index === question.correct) setScore(s => s + 10);
    // Logique de passage à la question suivante...
  };

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
          <Star size={16} className="text-yellow-500" fill="currentColor"/>
          <span className="text-yellow-500 font-bold">{score}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 font-mono"><Timer size={18}/> 15s</div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold leading-tight">{question.text}</h3>
        <div className="grid gap-3">
          {question.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)}
                    className="w-full p-5 text-left bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all font-medium">
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
