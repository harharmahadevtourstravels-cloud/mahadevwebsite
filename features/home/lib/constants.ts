import {
  Car,
  CheckCircle2,
  HeadphonesIcon,
  Navigation,
  Receipt,
  Shield,
  Users,
  MapPin
} from 'lucide-react';
import { HeroStat, HowItWorksStep, PopularRoute, PricingRow, Testimonial, Vehicle, WhyChooseFeature } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Rental Vehicle', href: '/#fleet' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' }
];

/** Navbar / footer “Book Now” → home booking form (“Ready to Travel? …”) */
export const BOOK_NOW_HREF = '/#book';

export const WHATSAPP_COUNTRY_CODE = '91';
export const WHATSAPP_NUMBER = '918055159348';
export const CONTACT_PHONE_DISPLAY = '+91 8055159348';
export const CONTACT_PHONE_TEL = 'tel:+918055159348';
export const CONTACT_EMAIL = 'harharmahadevtourstravels@gmail.com';
export const OFFICE_ADDRESS_LINES = [
  'Gat No 283, Shop No 2 & 3,',
  'Behind K K Wagh Engineering College,',
  'Mumbai Agra Road, Panchavati,',
  'Nashik - 422003',
];
export const OFFICE_ADDRESS_INLINE = OFFICE_ADDRESS_LINES.join(' ');
export const OFFICE_ADDRESS_SHORT = 'Panchavati, Nashik - 422003';
export const OFFICE_MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Har%20Har%20Mahadev%20Tours%20%26%20Travels%2C%20Gat%20No%20283%2C%20Shop%20No%202%20%26%203%2C%20Behind%20K%20K%20Wagh%20Engineering%20College%2C%20Mumbai%20Agra%20Road%2C%20Panchavati%2C%20Nashik%20422003&z=17&output=embed';

export const VEHICLES: Vehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Premium MPV',
    subtitle: 'Premium MPV',
    seating: '7-8 Seater',
    rate: 18,
    minBooking: 'Minimum 300km/day',
    image: '/images/innova/Screenshot%202026-05-01%20165238.png',
    images: ['/images/innova/Screenshot%202026-05-01%20165238.png'],
    features: ['Luxury Interiors', 'Professional Driver', 'AC Included', 'Ideal for Families']
  },

  {
    id: 'force-urbania',
    name: 'Force Urbania',
    category: 'Luxury Van',
    subtitle: 'Premium Luxury Van',
    seating: '16 Seater',
    rate: 40,
    minBooking: '₹40/km',
    image: '/images/urbania/urbania-1.webp',
    images: [
      '/images/urbania/urbania-1.webp',
      '/images/urbania/IMG-20250508-WA0072.jpg.webp',
      '/images/urbania/IMG-20250508-WA0074.jpg.webp',
      '/images/urbania/IMG-20250508-WA0078.jpg.webp',
      '/images/urbania/IMG-20250508-WA0080.jpg.webp',
      '/images/urbania/IMG-20250508-WA0088.jpg.webp',
      '/images/urbania/urbania-2.webp'
    ],
    features: ['Luxury AC Interiors', 'Recliner Seats', 'Ideal for Weddings & Tours', 'Professional Driver']
  },
  {
    id: 'tempo-13',
    name: 'Tempo Traveller (13 Seater)',
    category: 'Tempo Traveller',
    subtitle: 'Mini Van Rental',
    seating: '13 Seater',
    rate: 25,
    minBooking: 'AC: ₹25 | Non-AC: ₹21',
    image: '/images/s%2013/tempo-s13-1.webp',
    images: [
      '/images/s%2013/tempo-s13-1.webp',
      '/images/s%2013/IMG-20250519-WA0033.jpg.webp',
      '/images/s%2013/IMG-20250519-WA0034.jpg.webp'
    ],
    features: ['Pushback Seats', 'Music System', 'AC & Non-AC Variants', 'Local & Outstation']
  },
  {
    id: 'tempo-17',
    name: 'Tempo Traveller (17 Seater)',
    category: 'Tempo Traveller',
    subtitle: 'Group Travel Van',
    seating: '17 Seater',
    rate: 28,
    minBooking: 'AC: ₹28 | Non-AC: ₹23',
    image: '/images/s%2017/WhatsApp%20Image%202026-04-30%20at%203.24.43%20PM.jpeg',
    images: ['/images/s%2017/WhatsApp%20Image%202026-04-30%20at%203.24.43%20PM.jpeg'],
    features: ['Spacious Boot Space', 'Well Maintained', 'AC & Non-AC', 'Wedding Trips']
  },
  {
    id: 'tempo-20',
    name: 'Tempo Traveller (20 Seater)',
    category: 'Tempo Traveller',
    subtitle: 'Executive Group Travel',
    seating: '20 Seater',
    rate: 30,
    minBooking: 'AC: ₹30 | Non-AC: ₹25',
    image: '/images/s-20/tempo-s20-1.webp',
    images: [
      '/images/s-20/tempo-s20-1.webp',
      '/images/s-20/IMG-20220508-WA0008.webp',
      '/images/s-20/IMG-20220706-WA0021.webp',
      '/images/s-20/IMG-20220706-WA0022.webp',
      '/images/s-20/IMG-20220706-WA0026.webp',
    ],
    features: ['High Ceiling', 'Ample Legroom', 'AC/Non-AC Options', 'Corporate Travel']
  },
  {
    id: 'tempo-26',
    name: 'Tempo Traveller (26 Seater)',
    category: 'Tempo Traveller',
    subtitle: 'Large Capacity Van',
    seating: '26 Seater',
    rate: 37,
    minBooking: 'AC: ₹37 | Non-AC: ₹30',
    image: '/images/s%2026/tempo-s26-1.webp',
    images: [
      '/images/s%2026/tempo-s26-1.webp',
      '/images/s%2026/2025-10-05%20%286%29.webp',
      '/images/s%2026/20250606_183614.jpg.webp',
      '/images/s%2026/20250606_183623.jpg.webp',
      '/images/s%2026/20250606_184421.jpg.webp',
    ],
    features: ['Maximum Comfort', 'Ideal for Pilgrimage', 'Transparent Pricing', 'Professional Driver']
  },
  {
    id: 'tempo-26-alt',
    name: 'Tempo Traveller (26 Seater)',
    category: 'Tempo Traveller',
    subtitle: 'Large Capacity Van',
    seating: '26 Seater',
    rate: 37,
    minBooking: 'AC: ₹37 | Non-AC: ₹30',
    image: '/images/s-26/tempo-s26-1.webp',
    images: [
      '/images/s-26/tempo-s26-1.webp',
      '/images/s-26/IMG-20220508-WA0013.webp',
      '/images/s-26/IMG-20220706-WA0008.webp',
      '/images/s-26/IMG-20220706-WA0010.webp',
      '/images/s-26/IMG-20220706-WA0016.webp',
      '/images/s-26/IMG-20220706-WA0019.webp',
      '/images/s-26/IMG-20220706-WA0028.webp',
    ],
    features: ['Maximum Comfort', 'Ideal for Pilgrimage', 'Transparent Pricing', 'Professional Driver']
  },
  {
    id: 'bus-35',
    name: 'Luxury Bus (35 Seater)',
    category: 'Bus',
    subtitle: 'Standard Travel Coach',
    seating: '35 Seater',
    rate: 60,
    minBooking: 'AC: ₹60 | Non-AC: ₹42',
    image: '/images/s35/bus-s35-1.webp',
    images: [
      '/images/s35/bus-s35-1.webp',
      '/images/s35/2023-07-04%20%283%29.webp',
      '/images/s35/2023-07-04%20%286%29.webp',
      '/images/s35/20240308_232859_db9d0749-10df-446f-bd95-e446ad2f97bc.JPG.webp',
      '/images/s35/20240308_232900_4bae9530-43d4-4b80-85e7-e6cc4b12c3b1.JPG.webp',
      '/images/s35/20240815_095742_70240e25-09c0-45f6-982e-3a81021278dd.JPG.webp',
    ],
    features: ['Large Group Travel', 'Under-bus Storage', 'AC & Non-AC', 'Wedding Travel']
  },
  {
    id: 'bus-40',
    name: 'Luxury Bus (40 Seater)',
    category: 'Bus',
    subtitle: 'Deluxe Tourist Coach',
    seating: '40 Seater',
    rate: 63,
    minBooking: 'AC: ₹63 | Non-AC: ₹45',
    image: '/images/s40/bus-s40-1.webp',
    images: [
      '/images/s40/bus-s40-1.webp',
      '/images/s40/bus-s40-2.webp',
      '/images/s40/2025-10-05%20%281%29.webp',
      '/images/s40/bus-40-04.webp',
      '/images/s40/bus-40-07.webp',
    ],
    features: ['Premium Seating', 'Entertainment System', 'AC/Non-AC Options', 'School/College Trips']
  },
  {
    id: 'bus-45',
    name: 'Luxury Bus (45 Seater)',
    category: 'Bus',
    subtitle: 'Grand Group Coach',
    seating: '45 Seater',
    rate: 66,
    minBooking: 'AC: ₹66 | Non-AC: ₹49',
    image: '/images/s-45/bus-s45-1.webp',
    images: [
      '/images/s-45/bus-s45-1.webp',
      '/images/s-45/20250516_190340.jpg.webp',
      '/images/s-45/20250707_203249.jpg.webp',
      '/images/s-45/20251115_152620.jpg.webp',
      '/images/s-45/FB_IMG_1747482298444.jpg.webp',
      '/images/s-45/FB_IMG_1747482300646.jpg.webp',
      '/images/s-45/FB_IMG_1747482302862.jpg.webp',
    ],
    features: ['Smooth Suspension', 'Experienced Driver', 'AC & Non-AC', 'Outstation Journey']
  },
  {
    id: 'bus-49',
    name: 'Luxury Bus (49 Seater)',
    category: 'Bus',
    subtitle: 'Maximum Capacity Coach',
    seating: '49 Seater',
    rate: 70,
    minBooking: 'AC: ₹70 | Non-AC: ₹52',
    image:  '/images/s49/bus-s49-1.webp',
    images: [
      '/images/s49/bus-s49-1.webp',
      '/images/s49/bus-s49-2.webp',
      '/images/s49/bus-s49-3.webp',
      '/images/s49/IMG-20251104-WA0027.jpg.webp',
      '/images/s49/IMG-20251104-WA0029.jpg.webp',
      '/images/s49/IMG-20251104-WA0030.jpg.webp',
    ],
    features: ['Best-in-class AC', 'Plush Interiors', 'Ideal for Tours', 'Uniformed Driver']
  },
  {
    id: 'bus-49-alt',
    name: 'Luxury Bus (49 Seater)',
    category: 'Bus',
    subtitle: 'Maximum Capacity Coach',
    seating: '49 Seater',
    rate: 70,
    minBooking: 'AC: ₹70 | Non-AC: ₹52',
    image: '/images/s%2049/bus-s49-1.webp',
    images: [
      '/images/s%2049/bus-s49-1.webp',
      '/images/s%2049/20251020_143807.jpg.webp',
      '/images/s%2049/20251020_143842.jpg.webp',
      '/images/s%2049/20251020_144102.jpg.webp',
      '/images/s%2049/IMG-20230113-WA0046.webp',
      '/images/s%2049/IMG-20230114-WA0004.webp',
      '/images/s%2049/IMG-20230115-WA0007.webp',
    ],
    features: ['Best-in-class AC', 'Plush Interiors', 'Ideal for Tours', 'Uniformed Driver']
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    destination: 'Ujjain & Omkareshwar',
    distance: 600
  },
  {
    destination: 'Bhimashankar',
    distance: 180
  },
  {
    destination: 'Grishneshwar',
    distance: 190
  },
  {
    destination: 'Aundha Nagnath & Nageshwar',
    distance: 440
  },
  {
    destination: 'Shirdi',
    distance: 90
  },
  {
    destination: 'Shani Shingnapur',
    distance: 145
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Anand Pandey',
    location: 'Google Review',
    rating: 5,
    timeAgo: '6 months ago',
    text: 'Our trip with Har Har Mahadev Tours & Travels was absolutely wonderful from start to finish. The travel mini bus was clean, spacious and extremely comfortable — perfect for long drives. A special mention to their amazing staff and driver (Sandeep Uncle) — they were incredibly courteous, professional and genuinely cared about making our journey smooth and enjoyable. Very organised, calm and best driver.'
  },
  {
    name: 'Anurag Gautam',
    location: 'Google Review',
    rating: 5,
    timeAgo: '6 months ago',
    text: 'It was really a super smooth ride and communication between the driver and the agent. No other expressions just pure professionalism. The driver uncle were super cool and sweet, even gave us directions to what and how to do stuffs. The entire trip was a success all thanks to Har Har Mahadev Tours & Travels. Jay Shiv Shambhoo 🙏'
  },
  {
    name: 'Somil Jain',
    location: 'Google Review',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'The driver was always smiling and made the entire experience pleasant. He gave us a wonderful tour and ensured we were comfortable throughout. Highly recommended!'
  }
];

export const HERO_STATS: HeroStat[] = [
  { number: '500+', label: 'Happy Customers', icon: Users },
  { number: '50+', label: 'Vehicles', icon: Car },
  { number: '100K+', label: 'KM Travelled', icon: Navigation },
  { number: '24/7', label: 'Support', icon: HeadphonesIcon }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Share Your Trip Details',
    description: 'Tell us your pickup, destination, travel date, passenger count, and preferred vehicle type.',
    icon: MapPin,
    color: '#FF6B2B'
  },
  {
    step: '02',
    title: 'Get Vehicle & Fare Guidance',
    description: 'Our team suggests the right car, tempo traveller, Urbania, or bus with clear per-km pricing.',
    icon: Car,
    color: '#0B1F3A'
  },
  {
    step: '03',
    title: 'Confirm on Call or WhatsApp',
    description: 'Once you confirm, we share booking details and assign a professional driver for your journey.',
    icon: CheckCircle2,
    color: '#FF6B2B'
  }
];

export const PRICING_ROWS: PricingRow[] = [
  { type: 'Innova Crysta',                seating: '7–8', rateAC: '₹18/km', rateNonAC: null      },
  { type: 'Tempo Traveller (13 Seater)',   seating: '13',  rateAC: '₹25/km', rateNonAC: '₹21/km' },
  { type: 'Tempo Traveller (17 Seater)',   seating: '17',  rateAC: '₹28/km', rateNonAC: '₹23/km' },
  { type: 'Tempo Traveller (20 Seater)',   seating: '20',  rateAC: '₹30/km', rateNonAC: '₹25/km' },
  { type: 'Tempo Traveller (26 Seater)',   seating: '26',  rateAC: '₹37/km', rateNonAC: '₹30/km' },
  { type: 'Luxury Bus (35 Seater)',        seating: '35',  rateAC: '₹60/km', rateNonAC: '₹42/km' },
  { type: 'Luxury Bus (40 Seater)',        seating: '40',  rateAC: '₹63/km', rateNonAC: '₹45/km' },
  { type: 'Luxury Bus (45 Seater)',        seating: '45',  rateAC: '₹66/km', rateNonAC: '₹49/km' },
  { type: 'Luxury Bus (49 Seater)',        seating: '49',  rateAC: '₹70/km', rateNonAC: '₹52/km' },
  { type: 'Force Urbania',                 seating: '16',  rateAC: '₹40/km', rateNonAC: null      },
];

export const WHY_CHOOSE_FEATURES: WhyChooseFeature[] = [
  {
    icon: Car,
    title: 'Fleet for Every Group Size',
    description: 'Choose from cars, Innova Crysta, Force Urbania, tempo travellers, and luxury buses for family, corporate, and group travel.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Receipt,
    title: 'Clear Per-KM Pricing',
    description: 'Vehicle rates are shown upfront, with tolls, parking, permits, and driver food communicated separately before booking.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Shield,
    title: 'Experienced Nashik Drivers',
    description: 'Travel with drivers who understand local roads, pilgrimage routes, wedding travel, and long-distance outstation journeys.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: CheckCircle2,
    title: 'Clean, Trip-Ready Vehicles',
    description: 'Vehicles are maintained for comfortable travel, with AC options and seating choices clearly listed for every category.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: HeadphonesIcon,
    title: 'Direct Call & WhatsApp Support',
    description: 'Reach us quickly for availability, fare details, route planning, and booking confirmation without waiting for callbacks.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Navigation,
    title: 'Local and Outstation Trips',
    description: 'Book tempo travellers and buses for Jyotirlinga darshan, Maharashtra routes, weddings, group tours, and multi-day travel.',
    gradient: 'from-teal-500 to-cyan-500'
  }
];
