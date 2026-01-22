import React, { useState } from 'react';

export const ProgrammerScreen = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="p-6 space-y-6">
      <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-blue-500/20">
        <div className="space-y-4">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-blue-500 font-mono text-xs">HEX</span>
            <span className="font-mono text-xl uppercase">{num.toString(16)}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-green-500 font-mono text-xs">DEC</span>
            <span className="font-mono text-xl">{num}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-500 font-mono text-xs">BIN</span>
            <span className="font-mono text-lg break-all text-right ml-4">{num.toString(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {[7,8,9,4,5,6,1,2,3,0].map(n => (
          <button key={n} onClick={() => setNum(v => parseInt(`${v}${n}`))} className="p-5 bg-white/5 rounded-xl hover:bg-white/10 active:scale-95 transition-all">{n}</button>
        ))}
        <button onClick={() => setNum(0)} className="col-span-2 p-5 bg-red-500/20 text-red-500 rounded-xl">EFFACER</button>
      </div>
    </div>
  );
};
