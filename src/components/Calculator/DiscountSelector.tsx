import React from 'react';
import { Tag } from 'lucide-react';
import { discountOptions } from './constants';

interface DiscountSelectorProps {
  selectedDiscount: string;
  onChange: (value: string) => void;
}

export const DiscountSelector: React.FC<DiscountSelectorProps> = ({ 
  selectedDiscount, 
  onChange 
}) => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-2">
        <Tag size={16} className="text-purple-300" />
        Discount Type
      </label>
      <select
        value={selectedDiscount}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-[#1a1528] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e561a0] focus:ring-opacity-50"
      >
        <option value="">Select Discount Type</option>
        {discountOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};