import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '@/features/home/lib/booking';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center"
      animate={{ opacity: [1, 0.35, 1], scale: [1, 1.08, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </motion.a>
  );
}
