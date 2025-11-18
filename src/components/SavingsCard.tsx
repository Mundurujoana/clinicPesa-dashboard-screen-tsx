// src/components/SavingsCard.tsx
import { EyeIcon } from "@heroicons/react/24/outline";

interface SavingsCardProps {
  balance: number;
  frequency: string;
  autoSave: number;
}

const SavingsCard: React.FC<SavingsCardProps> = ({ balance, frequency, autoSave }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 -mt-8 mx-4 relative z-10">
      <div className="flex justify-between items-center mb-2">
        {/* Savings badge */}
        <span className="bg-savingsBg text-savingsText px-2 py-1 rounded-full text-xs font-semibold">
          Savings
        </span>
        <EyeIcon className="h-5 w-5 text-savingsText" />
      </div>
      <p className="text-sm text-gray-500">Balance</p>
      <h2 className="text-2xl font-bold text-savingsText">UGX {balance.toLocaleString()}</h2>
      <div className="flex justify-between mt-2 text-gray-500 text-xs">
        <span>Frequency: {frequency}</span>
        <span>AutoSave: UGX {autoSave.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mt-4 border-t border-borderGray pt-2">
        <button className="flex-1 text-savingsText font-semibold">Deposit</button>
        <div className="border-l mx-2 border-borderGray" />
        <button className="flex-1 text-savingsText font-semibold">Share Medical</button>
      </div>
    </div>
  );
};

export default SavingsCard;
