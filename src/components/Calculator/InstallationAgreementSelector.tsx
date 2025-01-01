import React from 'react';
import { FileCheck } from 'lucide-react';

interface InstallationAgreementSelectorProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const InstallationAgreementSelector: React.FC<InstallationAgreementSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-2">
        <FileCheck size={16} className="text-purple-300" />
        Is this an Installation Agreement customer?
      </label>
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