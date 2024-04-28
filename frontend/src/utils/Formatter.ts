export const FormatToVND = (price: number): string => {
  return price.toLocaleString('rs', { style: 'currency', currency: 'INR' })
}
