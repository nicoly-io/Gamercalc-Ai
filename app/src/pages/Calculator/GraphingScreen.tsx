import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Simulation de points pour f(x) = x²
const data = Array.from({ length: 21 }, (_, i) => {
  const x = i - 10;
  return { x, y: x * x };
});

export const GraphingScreen = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Calculatrice Graphique</h2>
        <p className="text-gray-400 text-sm italic">Visualisation de f(x) = x²</p>
      </div>
      <div className="flex-1 bg-white/5 rounded-3xl p-4 border border-white/10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="x" stroke="#666" fontSize={12} />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px' }} />
            <Line type="monotone" dataKey="y" stroke="#3b82f6" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
