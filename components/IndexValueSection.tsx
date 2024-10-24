"use client";

import { Slider } from "@/components/ui/slider";

interface IndexValueSectionProps {
  value: number;
  onChange: (value: number) => void;
}

export function IndexValueSection({ value, onChange }: IndexValueSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Index value at position
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              value={[value]}
              onValueChange={(values) => onChange(values[0])}
              max={1}
              step={0.01}
              className="w-full"
            />
          </div>
          <div className="w-32 text-right">
            <span className="font-medium">
              Selected Index Value: {value.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}