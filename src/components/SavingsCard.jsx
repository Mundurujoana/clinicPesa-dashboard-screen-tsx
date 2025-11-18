import React from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { LiaWalletSolid } from "react-icons/lia";
import { FiSend } from "react-icons/fi";

const SavingsCard = ({ balance, frequency, autoSave }) => {
  return (
    <div className="relative z-10 bg-white rounded-2xl shadow-lg p-4 -mt-8 mx-4">
      
      {/* Savings Badge */}
      <span className="absolute -top-0 -left-0 bg-savingsBg text-savingsText px-3 py-1 rounded-br-lg text-xs font-semibold">
        Savings
      </span>

      {/* Balance Section */}
      <div className="flex flex-col items-center mb-2">
        <p className="text-sm text-savingsText font-semibold mb-1">Balance</p>
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-bold text-savingsText">
            UGX {balance.toLocaleString()}
          </h2>
          <EyeSlashIcon className="h-5 w-5 text-savingsText scale-x-[-1]" />
        </div>
      </div>

      {/* Frequency & AutoSave */}
      <div className="flex mt-2 text-gray-500 ml-6 text-[10px]">
        <div className="flex space-x-1">
          <span>Frequency:</span>
          <span className="font-semibold">{frequency}</span>
        </div>
        <div className="flex space-x-1 ml-10">
          <span>AutoSave:</span>
          <span className="font-semibold">UGX {autoSave.toLocaleString()}</span>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-between mt-4 border-t border-borderGray pt-2">
        {/* Deposit Button */}
        <button className="flex-1 flex flex-col items-center text-savingsText font-semibold">
          <LiaWalletSolid size={20} className="mb-1" />
          Deposit
        </button>

        <div className="border-l mx-2 border-warmYellow" />

        {/* Share Medical Button */}
        <button className="flex-1 flex flex-col items-center text-savingsText font-semibold">
          <FiSend size={20} className="mb-1" />
          Share Medical
        </button>
      </div>
    </div>
  );
};

export default SavingsCard;
