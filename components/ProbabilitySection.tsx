"use client";

import { Slider } from "@/components/ui/slider";

interface ProbabilitySectionProps {
  speed: number;
  probability: number;
  onSpeedChange: (speed: number) => void;
}

export function ProbabilitySection({
  speed,
  probability,
  onSpeedChange,
}: ProbabilitySectionProps) {
  return (
    <div className="pt-4 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Probability of Lethality
      </h2>
      <div className="bg-gray-50 p-4 rounded-md mb-4 font-mono text-sm">
        P_L = 1 / (1 + exp^(-(-4.89 + 0.41 * v)))
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              value={[speed]}
              onValueChange={(values) => onSpeedChange(values[0])}
              max={30}
              step={1}
              className="w-full"
            />
          </div>
          <div className="w-48 text-right">
            <span className="font-medium">Selected Speed: {speed} knots</span>
          </div>
        </div>
        <div className="text-right text-blue-600 font-semibold">
          P_L: {probability.toFixed(4)}
        </div>
      </div>
    </div>
  );
}