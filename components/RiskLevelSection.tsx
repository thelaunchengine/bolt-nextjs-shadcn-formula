"use client";

import Image from "next/image";

interface RiskLevelSectionProps {
  indexValue: number;
  probability: number;
  shipTypeValue: number;
}

export function RiskLevelSection({
  indexValue,
  probability,
  shipTypeValue,
}: RiskLevelSectionProps) {
  const riskLevel = indexValue * probability * shipTypeValue;
  const riskPercentage = riskLevel * 100;

  const getRiskLevel = (percentage: number) => {
    if (percentage < 33) return { level: "Low", color: "text-green-600", image: "/lowrisk.png" };
    if (percentage < 66) return { level: "Medium", color: "text-yellow-600", image: "/mediumrisk.png" };
    return { level: "High", color: "text-red-600", image: "/highrisk.png" };
  };

  const risk = getRiskLevel(riskPercentage);

  return (
    <div className="pt-4 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Whale Occurrence Risk Level
      </h2>
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-[200px] h-[100px]">
            <Image
              src={risk.image}
              alt={`${risk.level} Risk Indicator`}
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-1">
              Risk Level: {riskLevel.toFixed(4)} ({riskPercentage.toFixed(1)}%)
            </div>
            <div className={`text-xl font-bold ${risk.color}`}>
              {risk.level} Risk
            </div>
          </div>
          <div className="text-sm text-blue-600 mt-2">
            Calculated from: ({indexValue.toFixed(2)} × {probability.toFixed(4)} × {shipTypeValue})
          </div>
        </div>
      </div>
    </div>
  );
}