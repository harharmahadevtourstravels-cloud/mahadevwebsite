"use client";

import Link from "next/link";
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';
import { BOOK_NOW_HREF, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, NAV_ITEMS } from '../lib/constants';

type HeaderProps = {
  logo: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Header({ logo, isMenuOpen, onToggleMenu, onCloseMenu }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center gap-2 cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Har Har Mahadev Tours & Travels logo"
                  width={48}
                  height={48}
                  priority
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                />
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-base sm:text-lg lg:text-xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A' }}>
                  Har Har Mahadev Tours & Travels
                </div>
                <div className="text-xs text-gray-600 -mt-0.5 hidden lg:block" style={{ fontWeight: 500 }}>
                  Cab & Bus Service on Rent
                </div>
              </div>
              <div className="sm:hidden">
                <div className="leading-tight">
                  <div className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A' }}>
                    Har Har Mahadev
                  </div>
                  <div className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontWeight: 600 }}>
                    Tours &amp; Travels
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                style={{ fontWeight: 600, fontSize: '0.9rem' }}
              >
                <Link href={item.href} className="relative block text-gray-700 hover:text-[#FF6B2B] transition-colors duration-200 py-2">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B2B] transition-all duration-200 hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT_PHONE_TEL}
              className="flex items-center gap-2 text-[#0B1F3A] hover:text-[#FF6B2B] transition-colors"
              style={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={BOOK_NOW_HREF}
                className="inline-block px-5 py-2.5 rounded-lg text-white shadow-md hover:shadow-lg transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FF6B2B 0%, #ff8555 100%)',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem'
                }}
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <motion.div whileTap={{ scale: 0.95 }} className="hidden sm:block">
              <Link
                href={BOOK_NOW_HREF}
                className="inline-flex px-4 py-2 rounded-lg text-white shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #FF6B2B 0%, #ff8555 100%)',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}
              >
                Book Now
              </Link>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onToggleMenu}
              className="p-2 text-[#0B1F3A] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <nav className="py-4 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-[#FF6B2B] hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors"
                    onClick={onCloseMenu}
                    style={{ fontWeight: 600 }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="h-px bg-gray-200 my-3" />

              <a
                href={CONTACT_PHONE_TEL}
                className="flex items-center gap-3 text-[#0B1F3A] py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors mx-0"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FF6B2B]" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Call to Book</div>
                  <div className="text-sm font-semibold">{CONTACT_PHONE_DISPLAY}</div>
                </div>
              </a>

              <div className="px-4 pt-2 sm:hidden">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    href={BOOK_NOW_HREF}
                    onClick={onCloseMenu}
                    className="w-full px-6 py-3 rounded-lg text-white shadow-md flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B2B 0%, #ff8555 100%)',
                      fontWeight: 600,
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Book Now</span>
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
