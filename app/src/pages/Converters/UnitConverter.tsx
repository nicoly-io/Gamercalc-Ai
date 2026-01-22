import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import { conversionRates } from '../../data/conversions';

export const UnitConverter = ({ type }: { type: string }) => {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState<number>(0);

  const units = conversionRates[type] || {};
  const unitKeys = Object.keys(units);

  useEffect(() => {
    if (unitKeys.length > 0) {
      setFromUnit(unitKeys[0]);
      setToUnit(unitKeys[1] || unitKeys[0]);
    }
  }, [type]);

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;
    // Calcul : (Valeur / Taux de départ) * Taux d'arrivée
    const converted = (val / units[fromUnit]) * units[toUnit];
    setResult(converted);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
        <div className="space-y-2">
          <input 
            type="number" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent text-4xl font-bold outline-none border-b border-white/10 pb-2 focus:border-blue-500 transition-colors"
          />
          <select 
            value={fromUnit} 
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full bg-white/5 p-3 rounded-xl outline-none mt-2"
          >
            {unitKeys.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>

        <div className="flex justify-center">
          <button onClick={convert} className="p-4 bg-blue-600 rounded-full hover:rotate-180 transition-all duration-500 shadow-lg shadow-blue-600/20">
            <RefreshCcw size={24} />
          </button>
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-bold text-blue-400 break-all">
            {result.toLocaleString(undefined, { maximumFractionDigits: 4 })}
          </div>
          <select 
            value={toUnit} 
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full bg-white/5 p-3 rounded-xl outline-none mt-2"
          >
            {unitKeys.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};
