import React from 'react';
import { formatCurrency } from './utils';
import { BOILER_UPGRADE_GRANT } from './constants';

interface SummaryProps {
  quotePrice: string;
  totalDiscount: number;
  deposit: number;
  additionalUpgrades: string;
  isInstallationAgreement: boolean;
}

export const Summary: React.FC<SummaryProps> = ({
  quotePrice,
  totalDiscount,
  deposit,
  additionalUpgrades,
  isInstallationAgreement,
}) => {
  if (!isInstallationAgreement) return null;

  return (
    <div className="text-gray-900 bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-[#E182E0]">Installation Agreement Details</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Standard Installation Quote</span>
          <span>{formatCurrency(parseFloat(quotePrice) + BOILER_UPGRADE_GRANT)}</span>
        </div>
        
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Non-Standard Upgrades</span>
          <span>{formatCurrency(parseFloat(additionalUpgrades) || 0)}</span>
        </div>
        
        <div className="flex justify-between py-2 border-b border-gray-200 font-medium">
          <span>Sub-Total</span>
          <span>
            {formatCurrency((parseFloat(quotePrice) + BOILER_UPGRADE_GRANT) + (parseFloat(additionalUpgrades) || 0))}
          </span>
        </div>
        
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Boiler Upgrade Scheme Grant</span>
          <span className="text-red-400">- {formatCurrency(BOILER_UPGRADE_GRANT)}</span>
        </div>
        
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Applied Discounts</span>
          <span className="text-red-400">- {formatCurrency(totalDiscount)}</span>
        </div>
        
        <div className="flex justify-between py-2 font-bold">
          <span>Total Amount You'll Pay</span>
          <span>
            {formatCurrency(
              (parseFloat(quotePrice) + BOILER_UPGRADE_GRANT + (parseFloat(additionalUpgrades) || 0)) - 
              BOILER_UPGRADE_GRANT - 
              totalDiscount
            )}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-6 text-[#E182E0]">Payment Schedule</h3>
      <div className="space-y-4">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Advance Payment Required</span>
          <span>{formatCurrency(deposit)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Balance due upon completion</span>
          <span>
            {formatCurrency(
              ((parseFloat(quotePrice) + BOILER_UPGRADE_GRANT + (parseFloat(additionalUpgrades) || 0)) - 
              BOILER_UPGRADE_GRANT - 
              totalDiscount) - 
              deposit
            )}
          </span>
        </div>
      </div>
    </div>
  );
};