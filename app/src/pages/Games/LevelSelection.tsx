import React from 'react';
import { ChevronLeft, Zap, Shield, Trophy } from 'lucide-react';

export const LevelSelection = ({ subject, onSelect, onBack }: any) => {
  const levels = [
    { id: 'deb', label: 'Débutant', icon: <Zap className="text-green-400"/>, pts: '10 pts' },
    { id: 'int', label: 'Intermédiaire', icon: <Shield className="text-yellow-400"/>, pts: '50 pts' },
    { id: 'exp', label: 'Expert', icon: <Trophy className="text-red-400"/>, pts: '100 pts' },
  ];

  return (
    <div className="p-6 space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <ChevronLeft size={20}/> Retour aux matières
      </button>
      <h2 className="text-2xl font-bold">Niveau : {subject}</h2>
      <div className="space-y-4">
        {levels.map(l => (
          <button key={l.id} onClick={() => onSelect(l.label)}
                  className="w-full flex items-center justify-between p-5 bg-[#1a1a1a] border border-white/5 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">{l.icon}</div>
              <span className="font-bold text-lg">{l.label}</span>
            </div>
            <span className="text-xs font-mono text-gray-500">{l.pts}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
