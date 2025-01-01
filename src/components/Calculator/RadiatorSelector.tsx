import React from 'react';
import { Thermometer } from 'lucide-react';
import { radiatorDiscounts } from './constants';
import { formatCurrency } from './utils';

interface RadiatorSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RadiatorSelector: React.FC<RadiatorSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-2">
        <Thermometer size={16} className="text-purple-300" />
        Number of Radiators Changing
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-[#1a1528] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e561a0] focus:ring-opacity-50"
      >
        {Object.entries(radiatorDiscounts).map(([count, discount]) => (
          <option key={count} value={count}>
            {count} - {formatCurrency(discount)}
          </option>
        ))}
      </select>
    </div>
  );
};