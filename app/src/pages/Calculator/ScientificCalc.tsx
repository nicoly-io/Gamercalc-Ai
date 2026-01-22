import React from 'react';
import { useCalculator } from '../../hooks/useCalculator';
import { Display } from './components/Display';
import { CalcButton } from './components/CalcButton';

const ScientificCalc = () => {
  const { display, formula, handleInput, calculate, clear } = useCalculator();

  const keys = [
    { l: 'C', c: 'text-red-500' }, { l: '(', c: 'text-blue-400' }, { l: ')', c: 'text-blue-400' }, { l: '/', c: 'text-blue-500' },
    { l: '7' }, { l: '8' }, { l: '9' }, { l: '*', c: 'text-blue-500' },
    { l: '4' }, { l: '5' }, { l: '6' }, { l: '-', c: 'text-blue-500' },
    { l: '1' }, { l: '2' }, { l: '3' }, { l: '+', c: 'text-blue-500' },
    { l: '0', s: 2 }, { l: '.' }, { l: '=', c: 'bg-blue-600 text-white' }
  ];

  return (
    <div className="p-4 max-w-md mx-auto h-full flex flex-col justify-center animate-fade-in">
      <Display value={display} formula={formula} />
      <div className="grid grid-cols-4 gap-3 mt-6">
        {keys.map((k, i) => (
          <CalcButton 
            key={i} 
            label={k.l} 
            onClick={() => k.l === '=' ? calculate() : k.l === 'C' ? clear() : handleInput(k.l)} 
            className={k.c}
            span={k.s}
          />
        ))}
      </div>
    </div>
  );
};

export default ScientificCalc;
