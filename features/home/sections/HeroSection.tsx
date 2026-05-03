"use client";

import { motion } from "motion/react";
import { ChevronRight, Phone } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { CONTACT_PHONE_TEL } from "../lib/constants";
import { HERO_STATS } from "../lib/constants-ui";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-16 sm:pt-18 lg:pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/herobg.webp"
          alt="Nashik outstation road travel with cab, tempo traveller, and bus rentals"
          priority
          className="w-full h-full"
          imageClassName="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0B1F3A]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 sm:px-4 py-2 rounded-full bg-[#FF6B2B]/20 border border-[#FF6B2B]/30 mb-4 sm:mb-6"
            >
              <span className="text-xs sm:text-sm md:text-base text-[#FF6B2B]" style={{ fontWeight: 600 }}>
              Serving Since 2006
              </span>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-white leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
            >
              Nashik&apos;s Most Trusted
              <span className="text-[#FF6B2B]"> Tempo Traveller &amp; Bus Rentals</span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
            >
              <span className="block">Perfect for Family Trips · Corporate Tours · Wedding Travel · Outstation Journeys</span>
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={CONTACT_PHONE_TEL} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base sm:text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B2B 0%, #ff8555 100%)',
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Call to Book Now
                </motion.button>
              </a>
              <a href="#fleet" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-white text-[#0B1F3A] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base sm:text-lg"
                  style={{
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  View Our Fleet
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {HERO_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <stat.icon className="w-10 h-10 text-[#FF6B2B] mb-3" />
                <div className="text-4xl mb-2 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                  {stat.number}
                </div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
