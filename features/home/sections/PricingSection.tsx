"use client";

import { motion } from "motion/react";
import { CheckCircle2, Receipt } from 'lucide-react';
import { PRICING_ROWS } from '../lib/constants';

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-[#0B1F3A] to-[#1a3a5c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B2B]/20 border border-[#FF6B2B]/30 mb-4">
            <span className="text-[#FF6B2B]" style={{ fontWeight: 600 }}>
              Pricing
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">No hidden fees. Pay only for the kilometers you travel.</p>
        </motion.div>

        {/* Mobile: card list */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden space-y-3"
        >
          {PRICING_ROWS.map((row) => (
            <div key={row.type} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/15 p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="text-white text-sm font-semibold leading-tight">{row.type}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{row.seating} Seater</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-xs">Driver incl.</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 rounded-lg px-3 py-2 text-center">
                  <div className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">AC Rate/km</div>
                  <div className="text-[#FF6B2B] font-bold text-base">{row.rateAC}</div>
                </div>
                <div className="bg-sky-500/10 border border-sky-400/20 rounded-lg px-3 py-2 text-center">
                  <div className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">Non-AC Rate/km</div>
                  {row.rateNonAC ? (
                    <div className="text-sky-300 font-bold text-base">{row.rateNonAC}</div>
                  ) : (
                    <div className="text-gray-500 text-xs italic mt-1">AC only</div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="text-gray-300 text-xs text-center pt-2 pb-1 flex items-center justify-center gap-1.5">
            <Receipt className="w-3.5 h-3.5 shrink-0" />
            Toll, parking, state permits & driver food charged extra.
          </div>
        </motion.div>

        {/* Desktop: full table */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20 bg-white/5">
                <th className="px-6 py-4 text-left text-white text-sm" style={{ fontWeight: 700 }}>Vehicle Type</th>
                <th className="px-6 py-4 text-center text-white text-sm" style={{ fontWeight: 700 }}>Seats</th>
                <th className="px-6 py-4 text-center text-[#FF6B2B] text-sm" style={{ fontWeight: 700 }}>AC Rate/km</th>
                <th className="px-6 py-4 text-center text-sky-300 text-sm" style={{ fontWeight: 700 }}>Non-AC Rate/km</th>
                <th className="px-6 py-4 text-center text-white text-sm" style={{ fontWeight: 700 }}>Driver</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_ROWS.map((row, i) => (
                <tr
                  key={row.type}
                  className={`border-b border-white/10 hover:bg-white/5 transition-colors ${i % 2 === 0 ? '' : 'bg-white/3'}`}
                >
                  <td className="px-6 py-4 text-white text-sm" style={{ fontWeight: 600 }}>{row.type}</td>
                  <td className="px-6 py-4 text-gray-200 text-center text-sm">{row.seating}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-[#FF6B2B] text-sm" style={{ fontWeight: 700 }}>{row.rateAC}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.rateNonAC ? (
                      <span className="text-sky-300 text-sm" style={{ fontWeight: 700 }}>{row.rateNonAC}</span>
                    ) : (
                      <span className="text-gray-500 text-xs italic">AC only</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-white/5 text-gray-200 text-center border-t border-white/10 text-sm">
            <Receipt className="w-4 h-4 inline mr-2" />
            Toll, parking, state permits & driver food charged extra. Driver included.
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}
