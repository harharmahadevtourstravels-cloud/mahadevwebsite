import { LucideIcon } from 'lucide-react';

export type Vehicle = {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  seating: string;
  rate: number;
  originalRate: number | null;
  minBooking: string;
  image: string;
  images: string[];
  features: string[];
};

export type PopularRoute = {
  destination: string;
  distance: number;
};

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  timeAgo?: string;
};

export const requiredFieldKeys = ['pickupCity', 'dropCity', 'travelDate', 'vehicleType'] as const;

export type RequiredFieldKey = (typeof requiredFieldKeys)[number];

export type BookingFieldKey =
  | 'fullName'
  | 'phoneNumber'
  | 'pickupCity'
  | 'dropCity'
  | 'travelDate'
  | 'pickupTime'
  | 'vehicleType'
  | 'passengerCount'
  | 'estimatedKms'
  | 'notes';

export type BookingFormData = Record<BookingFieldKey, string>;

export type BookingPrefill = {
  vehicleType?: string;
  pickupCity?: string;
  dropCity?: string;
  source?: string;
};

export type BookingErrors = Partial<Record<RequiredFieldKey, string>>;

export type PricingRow = {
  type: string;
  seating: string;
  rateAC: string;
  rateNonAC: string | null;
};

export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export type WhyChooseFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

export type HeroStat = {
  number: string;
  label: string;
  icon: LucideIcon;
};
