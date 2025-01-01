import React, { useState, useEffect } from 'react';
import { calculateDiscountAmount } from './utils';
import { HeaderImage } from './HeaderImage';
import { DiscountSelector } from './DiscountSelector';
import { Summary } from './Summary';
import { QuoteInput } from './QuoteInput';
import { DepositSelector } from './DepositSelector';
import { RadiatorSelector } from './RadiatorSelector';
import { ReferralSelector } from './ReferralSelector';
import { InstallationAgreementSelector } from './InstallationAgreementSelector';
import { NonStandardUpgradesInput } from './NonStandardUpgradesInput';
import { TotalSummary } from './TotalSummary';

const Calculator: React.FC = () => {
  const [quotePrice, setQuotePrice] = useState('');
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [hasReferral, setHasReferral] = useState(false);
  const [deposit, setDeposit] = useState(200);
  const [radiatorCount, setRadiatorCount] = useState('0');
  const [showRadiatorCount, setShowRadiatorCount] = useState(false);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [isInstallationAgreement, setIsInstallationAgreement] = useState(false);
  const [additionalUpgrades, setAdditionalUpgrades] = useState('');

  useEffect(() => {
    const discountAmount = calculateDiscountAmount(quotePrice, selectedDiscount, hasReferral, radiatorCount);
    setTotalDiscount(discountAmount);
  }, [quotePrice, selectedDiscount, hasReferral, radiatorCount]);

  const handleDiscountChange = (value: string) => {
    setSelectedDiscount(value);
    setShowRadiatorCount(value === 'radiator');
  };

  return (
    <div className="space-y-8">
      <HeaderImage />
      
      <QuoteInput value={quotePrice} onChange={setQuotePrice} />
      
      <DepositSelector value={deposit} onChange={setDeposit} />
      
      <DiscountSelector 
        selectedDiscount={selectedDiscount} 
        onChange={handleDiscountChange}
      />
      
      {showRadiatorCount && (
        <RadiatorSelector 
          value={radiatorCount} 
          onChange={setRadiatorCount} 
        />
      )}
      
      <ReferralSelector 
        value={hasReferral} 
        onChange={setHasReferral} 
      />

      <InstallationAgreementSelector 
        value={isInstallationAgreement} 
        onChange={setIsInstallationAgreement} 
      />

      {isInstallationAgreement && (
        <NonStandardUpgradesInput 
          value={additionalUpgrades} 
          onChange={setAdditionalUpgrades}
        />
      )}
      
      {!isInstallationAgreement && (
        <TotalSummary 
          totalDiscount={totalDiscount}
          deposit={deposit}
          quotePrice={quotePrice}
        />
      )}
      
      <Summary
        quotePrice={quotePrice}
        totalDiscount={totalDiscount}
        deposit={deposit}
        additionalUpgrades={additionalUpgrades}
        isInstallationAgreement={isInstallationAgreement}
      />
    </div>
  );
};

export default Calculator;