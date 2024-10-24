"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface ShipType {
  name: string;
  value: number;
}

interface ShipTypeSectionProps {
  shipTypes: ShipType[];
  selectedShipType: ShipType;
  onShipTypeChange: (shipType: ShipType) => void;
}

export function ShipTypeSection({
  shipTypes,
  selectedShipType,
  onShipTypeChange,
}: ShipTypeSectionProps) {
  const [isLand, setIsLand] = useState(false);

  const handleLandChange = (checked: boolean) => {
    setIsLand(checked);
    if (checked) {
      onShipTypeChange({ name: "Land", value: 0 });
    } else {
      onShipTypeChange(shipTypes[0]);
    }
  };

  return (
    <div className="pt-4 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ship Type</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox
            id="land"
            checked={isLand}
            onCheckedChange={handleLandChange}
          />
          <Label htmlFor="land" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Land
          </Label>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="shipType">Select Ship Type</Label>
            <Select
              value={selectedShipType.name}
              onValueChange={(value) => {
                const ship = shipTypes.find((s) => s.name === value);
                if (ship) onShipTypeChange(ship);
              }}
              disabled={isLand}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a ship type" />
              </SelectTrigger>
              <SelectContent>
                {shipTypes.map((ship) => (
                  <SelectItem key={ship.name} value={ship.name}>
                    {ship.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-right text-blue-600 font-semibold">
            Selected Ship Type: {selectedShipType.name}, Value:{" "}
            {selectedShipType.value}
          </div>
        </div>
      </div>
    </div>
  );
}