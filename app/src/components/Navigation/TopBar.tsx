import React from 'react';
import { Menu, Bell } from 'lucide-react';

export const TopBar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  return (
    <header className="safe-top sticky top-0 z-30 flex items-center justify-between p-4 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        <button onClick={onOpenMenu} className="p-2 hover:bg-white/5 rounded-xl transition-all">
          <Menu size={24} className="text-blue-400" />
        </button>
        <span className="font-bold tracking-tight text-lg">Gamert Calc <span className="text-blue-500">AI</span></span>
      </div>
      <button className="p-2 text-gray-500 hover:text-white transition-colors">
        <Bell size={20} />
      </button>
    </header>
  );
};
