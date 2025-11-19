// src/components/SavingsCard.tsx

import React from 'react';
import { EyeOff, Wallet, Send } from 'lucide-react';

interface SavingsCardProps {
  balance: number;
  frequency: string;
  autoSave: number;
}

const SavingsCard: React.FC<SavingsCardProps> = ({ balance, frequency, autoSave }) => {
  return (
    <div className="relative z-10 bg-white rounded-2xl shadow-lg p-2 -mt-10 mx-auto w-[320px] h-10px]">
      <span className="absolute -top-0 -left-0 bg-savingsBg text-appText px-1 py-1 rounded-tl-2xl rounded-br-lg text-[10px] font-bold">
        Savings
      </span>

      <div className="relative flex flex-col items-center mb-2 w-full">
        <p className="text-sm text-appText font-semibold mb-1">Balance</p>

        <div className="flex items-center w-full justify-center relative">
          <h2 className="text-2xl font-bold text-appText">UGX {balance.toLocaleString()}</h2>

          <EyeOff className="h-6 w-6 text-appText scale-x-[-1] absolute right-3" />
        </div>
      </div>

      <div className="flex mt-2 text-grayText  text-[9px]">
        <div className="flex space-x-1 ml-8">
          <span>Frequency:</span>
          <span className="font-semibold">{frequency}</span>
        </div>
        <div className="flex space-x-1 ml-10">
          <span>AutoSave amount:</span>
          <span className="font-semibold">UGX {autoSave.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex justify-between mt-4 border-t border-borderGray pt-2">
        <button className="flex-1 flex flex-col items-center text-appText font-semibold text-[12px]">
          <Wallet className="h-4 w-4 mb-1 " />
          Deposit
        </button>

        <div className="border-l mx-2 border-warmYellow" />

        <button className="flex-1 flex flex-col items-center text-appText font-semibold text-[12px]">
          <Send className="h-4 w-4 mb-1" />
          Share Medical
        </button>
      </div>
    </div>
  );
};

export default SavingsCard;
