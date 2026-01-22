import React from 'react';
import { Beaker, Book, Globe, Calculator, GraduationCap } from 'lucide-react';

export const SubjectSelection = ({ onSelect }: any) => {
  const subjects = [
    { id: 'math', label: 'Mathématiques', icon: <Calculator className="text-blue-400"/>, color: 'from-blue-500/20' },
    { id: 'phys', label: 'Physique-Chimie', icon: <Beaker className="text-purple-400"/>, color: 'from-purple-500/20' },
    { id: 'svt', label: 'SVT', icon: <Activity className="text-green-400"/>, color: 'from-green-500/20' },
    { id: 'fra', label: 'Français', icon: <Book className="text-red-400"/>, color: 'from-red-500/20' },
    { id: 'hist', label: 'Histoire-Géo', icon: <Globe className="text-orange-400"/>, color: 'from-orange-500/20' },
  ];

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {subjects.map(sub => (
        <button key={sub.id} onClick={() => onSelect(sub.label)}
                className={`bg-gradient-to-br ${sub.color} to-transparent p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-4 hover:scale-105 transition-all active:scale-95`}>
          <div className="p-4 bg-[#1a1a1a] rounded-2xl shadow-xl">{sub.icon}</div>
          <span className="font-bold text-sm text-center">{sub.label}</span>
        </button>
      ))}
    </div>
  );
};
