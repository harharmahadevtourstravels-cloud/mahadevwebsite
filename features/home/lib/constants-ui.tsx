"use client";

import {
  Car,
  CheckCircle2,
  HeadphonesIcon,
  Navigation,
  Receipt,
  Shield,
  Users,
  MapPin,
} from "lucide-react";
import type { HeroStat, HowItWorksStep, WhyChooseFeature } from "./types";

export const HERO_STATS: HeroStat[] = [
  { number: "500+", label: "Happy Customers", icon: Users },
  { number: "50+", label: "Vehicles", icon: Car },
  { number: "100K+", label: "KM Travelled", icon: Navigation },
  { number: "24/7", label: "Support", icon: HeadphonesIcon },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "01",
    title: "Share Your Trip Details",
    description:
      "Tell us your pickup, destination, travel date, passenger count, and preferred vehicle type.",
    icon: MapPin,
    color: "#FF6B2B",
  },
  {
    step: "02",
    title: "Get Vehicle & Fare Guidance",
    description:
      "Our team suggests the right car, tempo traveller, Urbania, or bus with clear per-km pricing.",
    icon: Car,
    color: "#0B1F3A",
  },
  {
    step: "03",
    title: "Confirm on Call or WhatsApp",
    description:
      "Once you confirm, we share booking details and assign a professional driver for your journey.",
    icon: CheckCircle2,
    color: "#FF6B2B",
  },
];

export const WHY_CHOOSE_FEATURES: WhyChooseFeature[] = [
  {
    icon: Car,
    title: "Fleet for Every Group Size",
    description:
      "Choose from cars, Innova Crysta, Force Urbania, tempo travellers, and luxury buses for family, corporate, and group travel.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Receipt,
    title: "Clear Per-KM Pricing",
    description:
      "Vehicle rates are shown upfront, with tolls, parking, permits, and driver food communicated separately before booking.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Experienced Nashik Drivers",
    description:
      "Travel with drivers who understand local roads, pilgrimage routes, wedding travel, and long-distance outstation journeys.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CheckCircle2,
    title: "Clean, Trip-Ready Vehicles",
    description:
      "Vehicles are maintained for comfortable travel, with AC options and seating choices clearly listed for every category.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Direct Call & WhatsApp Support",
    description:
      "Reach us quickly for availability, fare details, route planning, and booking confirmation without waiting for callbacks.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Navigation,
    title: "Local and Outstation Trips",
    description:
      "Book tempo travellers and buses for Jyotirlinga darshan, Maharashtra routes, weddings, group tours, and multi-day travel.",
    gradient: "from-teal-500 to-cyan-500",
  },
];
