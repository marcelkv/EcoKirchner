export function calculateCost(quantity: number, cost: number): number {
  const totalCost = quantity * cost;
  return parseFloat(totalCost.toFixed(2));
}

export function costAsString(cost: number): string {
  return cost.toFixed(2).replace(".", ",") + " €";
}
