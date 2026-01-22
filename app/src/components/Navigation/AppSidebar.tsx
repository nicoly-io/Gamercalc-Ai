import React from 'react';
import { 
  Calculator, Activity, Code, Calendar, 
  Settings, Gamepad2, Coins, Ruler, Thermometer 
} from 'lucide-react';

export const AppSidebar = ({ activeMode, setMode, isOpen, toggle }: any) => {
  const menuItems = [
    { id: 'sci', label: 'Scientifique', icon: <Calculator size={20}/> },
    { id: 'graph', label: 'Graphique', icon: <Activity size={20}/> },
    { id: 'prog', label: 'Programmeur', icon: <Code size={20}/> },
    { id: 'date', label: 'Calcul de date', icon: <Calendar size={20}/> },
    { id: 'games', label: 'Espace Jeux', icon: <Gamepad2 size={20} className="text-yellow-500"/> },
    { id: 'currency', label: 'Devises', icon: <Coins size={20}/> },
    { id: 'length', label: 'Longueur', icon: <Ruler size={20}/> },
    { id: 'temp', label: 'Température', icon: <Thermometer size={20}/> },
  ];

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggle}></div>
      )}
      
      <aside className={`fixed top-0 left-0 h-full bg-[#1a1a1a] w-64 z-50 transition-transform duration-300 border-r border-white/5 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 font-bold text-xl border-b border-white/5 flex justify-between items-center">
          Menu Calc
          <button onClick={toggle} className="text-gray-400 lg:hidden">✕</button>
        </div>
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setMode(item.id); toggle(); }}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeMode === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-white/5 text-gray-400'}`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
