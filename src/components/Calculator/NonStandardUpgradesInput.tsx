import React from 'react';
import { Wrench } from 'lucide-react';

interface NonStandardUpgradesInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NonStandardUpgradesInput: React.FC<NonStandardUpgradesInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-2">
        <Wrench size={16} className="text-purple-300" />
        Non-Standard Upgrades
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