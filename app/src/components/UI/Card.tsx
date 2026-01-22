import React from 'react';

export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};
