import React from 'react';
import { PoundSterling } from 'lucide-react';

interface QuoteInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const QuoteInput: React.FC<QuoteInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-2">
        <PoundSterling size={16} className="text-purple-300" />
        Quote Price
      </label>
      <div className="relative">
        <span className="absolute left-3 top-2 text-gray-400">£</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-8 pr-4 py-2 bg-[#1a1528] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e561a0] focus:ring-opacity-50"
          placeholder="0"
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
};