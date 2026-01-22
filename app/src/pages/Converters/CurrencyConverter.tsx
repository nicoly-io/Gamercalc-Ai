import React, { useState } from 'react';
import { Coins } from 'lucide-react';

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const rates = { "XOF": 655.957, "USD": 1.08, "EUR": 1 }; // Taux fixes ou API

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="inline-block p-4 bg-yellow-500/10 rounded-full mb-4">
          <Coins className="text-yellow-500" size={32}/>
        </div>
        <h2 className="text-xl font-bold">Convertisseur de Devises</h2>
      </div>
      
      <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-white/5">
        <label className="text-xs text-gray-500">MONTANT EN EUR (BASE)</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full bg-transparent text-3xl font-bold outline-none mt-2"
        />
        
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
            <span className="font-bold">XOF (CFA)</span>
            <span className="text-xl text-green-400">{(amount * rates.XOF).toFixed(0)}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
            <span className="font-bold">USD ($)</span>
            <span className="text-xl text-blue-400">{(amount * rates.USD).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
