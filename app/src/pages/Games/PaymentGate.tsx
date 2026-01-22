import React from 'react';
import { CreditCard, Smartphone, DollarSign } from 'lucide-react';

export const PaymentGate = ({ onPaid }: { onPaid: () => void }) => {
  return (
    <div className="p-6 max-w-md mx-auto space-y-8 animate-slide-up">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black text-white">Zone Premium</h2>
        <p className="text-gray-400">Accédez à +300 quiz pour seulement <span className="text-white font-bold">200 FCFA</span></p>
      </div>

      <div className="space-y-4">
        {/* Orange Money */}
        <a href="tel:#144#2*1*1*783113787*200#" 
           className="flex items-center justify-between p-5 bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-2xl hover:bg-[#FF6600]/20 transition-all group">
          <div className="flex items-center gap-4">
            <div className="bg-[#FF6600] p-2 rounded-lg text-white font-bold">OM</div>
            <span className="font-bold text-white">Orange Money</span>
          </div>
          <Smartphone className="text-[#FF6600] group-hover:scale-110 transition-transform"/>
        </a>

        {/* Wave */}
        <a href="tel:#2171#1*783113787*200#" 
           className="flex items-center justify-between p-5 bg-[#1da1f2]/10 border border-[#1da1f2]/30 rounded-2xl hover:bg-[#1da1f2]/20 transition-all group">
          <div className="flex items-center gap-4">
            <div className="bg-[#1da1f2] p-2 rounded-lg text-white font-bold">W</div>
            <span className="font-bold text-white">Wave</span>
          </div>
          <Smartphone className="text-[#1da1f2] group-hover:scale-110 transition-transform"/>
        </a>

        <button onClick={onPaid} className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-gray-500 hover:text-white transition-colors">
          J'ai déjà payé / Vérifier l'accès
        </button>
      </div>
    </div>
  );
};
