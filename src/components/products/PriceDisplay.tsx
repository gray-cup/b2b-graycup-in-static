"use client";

type PriceDisplayProps = {
  minPrice: number;
  maxPrice: number;
  unit: string;
};

export function PriceDisplay({ minPrice, maxPrice, unit }: PriceDisplayProps) {
  return (
    <>
      ₹{minPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })} - ₹
      {maxPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}{" "}
      <span className="text-sm font-normal text-muted-foreground">{unit}</span>
    </>
  );
}
