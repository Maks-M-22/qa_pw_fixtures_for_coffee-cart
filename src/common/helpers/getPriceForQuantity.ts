export function unitPriceFormatStr(unitPrice, unitsNumber = 1): string {
  const formattedPrice = unitPrice.toFixed(2);
  return `${formattedPrice} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice): string {
  const formattedPrice = unitPrice.toFixed(2);
  return `$${formattedPrice}`;
}

export function totalPriceFormatStr(totalPrice): string {
  const formattedPrice = totalPrice.toFixed(2);
  return `Total: $${formattedPrice}`;
}
