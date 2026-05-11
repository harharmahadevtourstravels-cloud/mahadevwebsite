"use client";

import { motion } from "motion/react";
import { Navigation } from 'lucide-react';
import { PopularRoute } from '../lib/types';

type RoutesSectionProps = {
  popularRoutes: PopularRoute[];
  onOpenBookingModal: (from: string, to: string) => void;
};

const DEFAULT_PICKUP_CITY = 'Nashik';

export function RoutesSection({ popularRoutes, onOpenBookingModal }: RoutesSectionProps) {
  return (
    <section id="routes" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-4">
            <span className="text-[#FF6B2B]" style={{ fontWeight: 600 }}>
              Popular Routes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0B1F3A' }}>
            Popular Routes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Book trusted Maharashtra destinations with one click</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <motion.div
              key={route.destination}
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h4 className="text-lg leading-snug" style={{ fontWeight: 700, color: '#0B1F3A' }}>
                  {route.destination}
                </h4>
                <Navigation className="w-8 h-8 text-[#FF6B2B] group-hover:rotate-45 transition-transform shrink-0" />
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">Distance (Approx.)</div>
                <div style={{ fontWeight: 700, color: '#0B1F3A' }}>
                  {route.distanceLabel ?? `${route.distance} km`}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBookingModal(DEFAULT_PICKUP_CITY, route.destination)}
                className="w-full mt-5 py-2 rounded-lg bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90 transition-colors"
                style={{ fontWeight: 600 }}
              >
                Book This Route
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
