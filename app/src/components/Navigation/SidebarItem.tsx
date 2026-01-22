import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  isPremium?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick, isPremium }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group
        ${active 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
          : 'hover:bg-white/5 text-gray-400 hover:text-white'}
      `}
    >
      <div className={`${active ? 'text-white' : 'text-blue-500 group-hover:text-blue-400'}`}>
        {icon}
      </div>
      <span className="text-sm font-semibold flex-1 text-left">{label}</span>
      {isPremium && (
        <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-md border border-yellow-500/20">
          PRO
        </span>
      )}
    </button>
  );
};
