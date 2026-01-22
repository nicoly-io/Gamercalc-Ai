import { useState, useEffect } from 'react';

export const useHistory = () => {
  const [history, setHistory] = useState<any[]>(() => {
    const saved = localStorage.getItem('gamert_history');
    return saved ? JSON.parse(saved) : [];
  });

  const save = (calc: string, res: string, steps: string[]) => {
    const newItem = { calc, res, steps, id: Date.now() };
    const newHistory = [newItem, ...history].slice(0, 50); // Garde les 50 derniers
    setHistory(newHistory);
    localStorage.setItem('gamert_history', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('gamert_history');
  };

  return { history, save, clearHistory };
};
