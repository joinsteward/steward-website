import numeral from 'numeral'

export const getCurrency = {
  EUR: '€',
  ZAR: 'R',
  USD: 'USD',
  UGX: 'UGX',
  RWF: 'RF',
  NGN: 'NGN',
  KES: 'K',
  GHS: 'GH¢',
}

export function removeAmountFraction(amount = 0, currency, isAmount = false) {
  const numberValue = Number(amount)
  if (isNaN(numberValue)) {
    return 0
  }
  return (
    (currency ? `${getCurrency[currency]} ` : '') +
      numeral(amount / 100).format(isAmount ? '0,0' : '0,0.00') || 'NA'
  )
}
