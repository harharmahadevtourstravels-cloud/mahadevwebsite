"use client";

import { motion } from "motion/react";
import { CheckCircle2, Expand, Users } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Vehicle } from '../lib/types';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

type FleetSectionProps = {
  vehicles: Vehicle[];
  onOpenGallery: (vehicleId: string) => void;
  onOpenBookingModal: (vehicleName: string) => void;
};

export function FleetSection({ vehicles, onOpenGallery, onOpenBookingModal }: FleetSectionProps) {
  return (
    <section id="fleet" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/25 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            <span className="text-[#FF6B2B] text-sm tracking-wide" style={{ fontWeight: 700 }}>
              Rental Fleet
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-tight mb-5"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0B1F3A' }}
          >
            Premium Tempo Travellers,{' '}
            <span style={{ color: '#FF6B2B' }}>Buses &amp; Cars</span>{' '}
            on Rent in Nashik
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            Professional rentals for any occasion — family, corporate, or weddings.
            Skilled driver and transparent per-km pricing included.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(11,31,58,0.08)] hover:shadow-[0_8px_40px_rgba(11,31,58,0.16)] transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Vehicle image */}
              <button
                type="button"
                onClick={() => onOpenGallery(vehicle.id)}
                className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-100 text-left"
                aria-label={`Open ${vehicle.name} gallery`}
              >
                <ImageWithFallback
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full"
                  imageClassName="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 420px"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0B1F3A]/55 via-[#0B1F3A]/15 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Price badge */}
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                  <span
                    className="text-sm text-white px-3 py-1.5 rounded-full shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #FF6B2B 0%, #e8531a 100%)', fontWeight: 700 }}
                  >
                    ₹{vehicle.rate}/km
                  </span>
                </div>

                {/* Category pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs text-white bg-[#0B1F3A]/75 backdrop-blur-sm px-3 py-1 rounded-full" style={{ fontWeight: 600 }}>
                    {vehicle.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                    <Expand className="w-3.5 h-3.5" />
                    Tap to view
                  </span>
                </div>
              </button>

              {/* Card body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Title + seating */}
                <div className="mb-4">
                  <h3
                    className="text-lg sm:text-xl mb-1.5 leading-snug"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0B1F3A' }}
                  >
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FF6B2B]" />
                      <span style={{ fontWeight: 600, color: '#374151' }}>{vehicle.seating}</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="truncate">{vehicle.minBooking}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-4" />

                {/* Feature list */}
                <ul className="space-y-2 mb-4 flex-1">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#FF6B2B]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="space-y-3 mt-auto">
                  <div className="text-xs text-gray-500 text-center">
                    {vehicle.images.length} photo{vehicle.images.length > 1 ? 's' : ''} available
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => onOpenBookingModal(vehicle.name)}
                    className="w-full py-3 rounded-xl text-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B2B 0%, #e8531a 100%)',
                      fontWeight: 700,
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Book on WhatsApp
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
