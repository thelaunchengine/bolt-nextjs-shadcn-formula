"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { IndexValueSection } from "@/components/IndexValueSection";
import { ProbabilitySection } from "@/components/ProbabilitySection";
import { ShipTypeSection } from "@/components/ShipTypeSection";
import { RiskLevelSection } from "@/components/RiskLevelSection";
import type { ShipType } from "@/components/ShipTypeSection";

const shipTypes: ShipType[] = [
  { name: "Recreational Power Boat", value: 0.5 },
  { name: "Recreational Sailboat", value: 0.5 },
  { name: "Whale Watch Tour", value: 1.0 },
  { name: "Passenger Vessel", value: 1.0 },
  { name: "Fishing boat", value: 0.5 },
  { name: "Cargo Vessel", value: 1.0 },
  { name: "Tanker", value: 1.0 },
  { name: "Military / Coastguard", value: 1.0 },
  { name: "Tug / Workboat", value: 0.5 },
  { name: "Non-motorized Boat", value: 0.5 },
  { name: "Other", value: 0.5 },
];

export default function Home() {
  const [indexValue, setIndexValue] = useState(0.5);
  const [speed, setSpeed] = useState(15);
  const [selectedShipType, setSelectedShipType] = useState(shipTypes[0]);
  const [probability, setProbability] = useState(0);

  useEffect(() => {
    const calculateProbability = () => {
      const pL = 1 / (1 + Math.exp(-(-4.89 + 0.41 * speed)));
      setProbability(pL);
    };
    calculateProbability();
  }, [speed]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-6 shadow-lg">
          <div className="space-y-6">
            <IndexValueSection value={indexValue} onChange={setIndexValue} />
            <ProbabilitySection
              speed={speed}
              probability={probability}
              onSpeedChange={setSpeed}
            />
            <ShipTypeSection
              shipTypes={shipTypes}
              selectedShipType={selectedShipType}
              onShipTypeChange={setSelectedShipType}
            />
            <RiskLevelSection
              indexValue={indexValue}
              probability={probability}
              shipTypeValue={selectedShipType.value}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}