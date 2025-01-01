import { radiatorDiscounts } from './constants';

export const formatCurrency = (value: number | string): string => {
  const num = parseFloat(value.toString());
  if (isNaN(num)) return '£0.00';
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(num);
};

export const calculateDiscountAmount = (
  price: string, 
  discount: string, 
  referral: boolean, 
  radiators: string
): number => {
  const basePrice = parseFloat(price) || 0;
  let discountAmount = 0;

  switch (discount) {
    case 'percent20':
      discountAmount = basePrice * 0.2;
      break;
    case 'quick4':
      discountAmount = 500;
      break;
    case 'quick6':
      discountAmount = 250;
      break;
    case 'radiator':
      discountAmount = radiatorDiscounts[radiators] || 0;
      break;
    default:
      discountAmount = 0;
  }

  if (referral) {
    discountAmount += 100;
  }

  return discountAmount;
};