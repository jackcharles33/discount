import React from 'react';
import { formatCurrency } from './utils';

interface TotalSummaryProps {
  totalDiscount: number;
  deposit: number;
  quotePrice: string;
}

export const TotalSummary: React.FC<TotalSummaryProps> = ({ 
  totalDiscount, 
  deposit, 
  quotePrice 
}) => {
  const calculateTotalBalance = () => {
    const base = parseFloat(quotePrice) || 0;
    return base - totalDiscount - deposit;
  };

  return (
    <div className="space-y-4 pt-4">
      <div className="flex justify-between items-center">
        <span className="text-white text-xl">Total Discount</span>
        <span className="text-white text-xl">{formatCurrency(totalDiscount)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white text-xl">Deposit</span>
        <span className="text-white text-xl">{formatCurrency(deposit)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white text-xl">Total Balance</span>
        <span className="text-white text-xl">{formatCurrency(calculateTotalBalance())}</span>
      </div>
    </div>
  );
};