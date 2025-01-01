import React from 'react';
import { Users } from 'lucide-react';

interface ReferralSelectorProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const ReferralSelector: React.FC<ReferralSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <div className="mb-2">
        <label className="flex items-center gap-2 text-sm font-medium text-purple-300">
          <Users size={16} className="text-purple-300" />
          Referral Code
        </label>
        <p className="text-gray-400 text-xs mt-1">£100 discount will be applied if referral code is used</p>
      </div>
      <div className="flex gap-4">
        {['Yes', 'No'].map((option) => (
          <button
            key={option}
            onClick={() => onChange(option === 'Yes')}
            className={`flex-1 py-3 px-4 rounded-lg text-white transition-colors ${
              (value && option === 'Yes') || (!value && option === 'No')
                ? 'bg-[#e561a0]' 
                : 'bg-[#281c34] hover:bg-[#e561a0]/80'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};