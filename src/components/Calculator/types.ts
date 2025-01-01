export interface DiscountOption {
  label: string;
  value: string;
}

export interface RadiatorDiscounts {
  [key: string]: number;
}

export interface CalculatorProps {
  quotePrice: string;
  setQuotePrice: (price: string) => void;
  deposit: number;
  setDeposit: (amount: number) => void;
  selectedDiscount: string;
  setSelectedDiscount: (discount: string) => void;
  hasReferral: boolean;
  setHasReferral: (has: boolean) => void;
  radiatorCount: string;
  setRadiatorCount: (count: string) => void;
  showRadiatorCount: boolean;
  isInstallationAgreement: boolean;
  setIsInstallationAgreement: (is: boolean) => void;
  additionalUpgrades: string;
  setAdditionalUpgrades: (upgrades: string) => void;
  totalDiscount: number;
}