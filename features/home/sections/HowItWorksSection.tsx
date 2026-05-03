"use client";

import { motion } from "motion/react";
import { HOW_IT_WORKS_STEPS } from "../lib/constants-ui";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-4">
            <span className="text-[#FF6B2B]" style={{ fontWeight: 600 }}>
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0B1F3A' }}>
            From Inquiry to Journey in 3 Steps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Share your plan, get the right vehicle and fare guidance, then confirm your booking directly on call or WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-linear-to-r from-[#FF6B2B]/20 via-[#FF6B2B] to-[#FF6B2B]/20 transform translate-y-1/2" style={{ top: '80px' }} />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl flex items-center justify-center relative z-10 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)` }}
                >
                  <step.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" strokeWidth={2} />
                </motion.div>
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 opacity-20" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, color: '#0B1F3A' }}>
                  {step.step}
                </div>
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 px-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0B1F3A' }}>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
