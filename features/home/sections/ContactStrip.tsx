"use client";

import { HeadphonesIcon, Mail, Phone } from "lucide-react";
import { buildWhatsAppUrl } from '@/features/home/lib/booking';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../lib/constants';

export function ContactStrip() {
  return (
    <section id="contact" className="py-10 sm:py-12 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-white">
          <a
            href={CONTACT_PHONE_TEL}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 hover:border-[#FF6B2B]/50 hover:bg-white/10 transition-all"
          >
            <div className="w-11 h-11 rounded-full bg-[#FF6B2B] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-300">Call Us 24/7</div>
              <div className="text-base sm:text-lg leading-tight" style={{ fontWeight: 700 }}>
                {CONTACT_PHONE_DISPLAY}
              </div>
            </div>
          </a>

          <a
            href={buildWhatsAppUrl()}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 hover:border-[#FF6B2B]/50 hover:bg-white/10 transition-all"
          >
            <div className="w-11 h-11 rounded-full bg-[#FF6B2B] flex items-center justify-center shrink-0">
              <HeadphonesIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-300">WhatsApp Support</div>
              <div className="text-base sm:text-lg leading-tight" style={{ fontWeight: 700 }}>
                Chat on WhatsApp
              </div>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 hover:border-[#FF6B2B]/50 hover:bg-white/10 transition-all"
          >
            <div className="w-11 h-11 rounded-full bg-[#FF6B2B] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-300">Email Us</div>
              <div className="text-sm sm:text-base leading-tight break-all" style={{ fontWeight: 700 }}>
                {CONTACT_EMAIL}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
