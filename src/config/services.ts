import {
  AirVent,
  Bath,
  ChefHat,
  DoorOpen,
  Home,
  LucideIcon,
  Ruler,
  Trees,
  WashingMachine,
  Waves,
  Wifi
} from "lucide-react";

export type Service = {
  key: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { key: "private", icon: Home },
  { key: "size", icon: Ruler },
  { key: "pool", icon: Waves },
  { key: "wifi", icon: Wifi },
  { key: "air", icon: AirVent },
  { key: "kitchen", icon: ChefHat },
  { key: "washer", icon: WashingMachine },
  { key: "lift", icon: DoorOpen },
  { key: "bathroom", icon: Bath },
  { key: "garden", icon: Trees }
];
