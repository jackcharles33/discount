import React from 'react';
import { Wallet } from 'lucide-react';
import { formatCurrency } from './utils';

interface DepositSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export const DepositSelector: React.FC<DepositSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-2">
        <Wallet size={16} className="text-purple-300" />
        Deposit Amount Taken
      </label>
      <div className="flex gap-4">
        {[200, 500].map((amount) => (
          <button
            key={amount}
            onClick={() => onChange(amount)}
            className={`flex-1 py-3 px-4 rounded-lg text-white transition-colors ${
              value === amount 
                ? 'bg-[#e561a0]' 
                : 'bg-[#281c34] hover:bg-[#e561a0]/80'
            }`}
          >
            {formatCurrency(amount)}
          </button>
        ))}
      </div>
    </div>
  );
};