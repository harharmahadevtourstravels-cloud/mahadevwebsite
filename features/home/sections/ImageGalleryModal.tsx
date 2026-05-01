'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Images } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Vehicle } from '../lib/types';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

type ImageGalleryModalProps = {
  isOpen: boolean;
  selectedVehicleData?: Vehicle;
  currentImageIndex: number;
  onClose: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
  onSelectImage: (index: number) => void;
  onBookNow: () => void;
};

export function ImageGalleryModal({
  isOpen,
  selectedVehicleData,
  currentImageIndex,
  onClose,
  onPrevImage,
  onNextImage,
  onSelectImage,
  onBookNow
}: ImageGalleryModalProps) {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  // Preserve the last known vehicle so exit animations still render content.
  const [lastVehicle, setLastVehicle] = useState<Vehicle | undefined>(undefined);
  if (selectedVehicleData != null && selectedVehicleData !== lastVehicle) {
    setLastVehicle(selectedVehicleData);
  }
  const displayData = selectedVehicleData ?? lastVehicle;

  const totalImages = displayData?.images.length ?? 0;
  const safeIndex = totalImages > 0 ? Math.min(currentImageIndex, totalImages - 1) : 0;

  /* ---------- keyboard handler ---------- */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') { onClose(); return; }
      if (totalImages <= 1) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); onPrevImage(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); onNextImage(); }
    },
    [isOpen, totalImages, onClose, onPrevImage, onNextImage]
  );

  /* ---------- body scroll lock ---------- */
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  /* ---------- keyboard listener ---------- */
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /* ---------- scroll active thumbnail into view ---------- */
  useEffect(() => {
    if (!thumbnailRef.current) return;
    const active = thumbnailRef.current.querySelector<HTMLButtonElement>('[data-active="true"]');
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [safeIndex]);

  if (!displayData) return null;

  const images = displayData.images;
  const hasMultiple = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="gallery-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-end sm:items-center justify-center"
          style={{ background: 'rgba(11, 31, 58, 0.24)' }}
          onClick={onClose}
        >
          {/* Modal panel */}
          <motion.div
            key="gallery-panel"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full sm:max-w-4xl sm:mx-4 sm:rounded-2xl overflow-hidden bg-white border border-[#0B1F3A]/10 shadow-[0_20px_60px_rgba(11,31,58,0.2)]"
            style={{ maxHeight: '95dvh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ---- Header bar ---- */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#0B1F3A]/10 bg-[#F8F9FC]">
              <div className="flex items-center gap-2.5">
                <Images className="w-4 h-4 text-[#FF6B2B]" />
                <div>
                  <p
                    className="text-[#0B1F3A] text-sm sm:text-base leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {displayData.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {safeIndex + 1} / {images.length}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0B1F3A]/8 hover:bg-[#0B1F3A]/14 text-[#0B1F3A] transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ---- Main image area ---- */}
            <div
              className="relative bg-[#EEF2F8] flex items-center justify-center"
              style={{ height: 'clamp(260px, 55vh, 560px)' }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={safeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={images[safeIndex] ?? ''}
                    alt={`${displayData.name} – photo ${safeIndex + 1}`}
                    className="w-full h-full"
                    imageClassName="object-contain"
                    sizes="(max-width: 640px) 100vw, min(896px, calc(100vw - 2rem))"
                    priority
                    fetchPriority="high"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next */}
              {hasMultiple && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); onPrevImage(); }}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] flex items-center justify-center transition-colors shadow-lg z-10 border border-[#0B1F3A]/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onNextImage(); }}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] flex items-center justify-center transition-colors shadow-lg z-10 border border-[#0B1F3A]/10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}
            </div>

            {/* ---- Thumbnails ---- */}
            {hasMultiple && (
              <div
                ref={thumbnailRef}
                className="flex gap-2 px-4 py-3 overflow-x-auto border-t border-[#0B1F3A]/10 bg-white"
                style={{ scrollbarWidth: 'none' }}
              >
                {images.map((img, idx) => (
                  <button
                    key={img + idx}
                    data-active={safeIndex === idx ? 'true' : 'false'}
                    onClick={() => onSelectImage(idx)}
                    className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                      safeIndex === idx
                        ? 'border-[#FF6B2B] ring-2 ring-[#FF6B2B]/40'
                        : 'border-[#0B1F3A]/15 hover:border-[#0B1F3A]/40 opacity-75 hover:opacity-100'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full"
                      imageClassName="object-cover"
                      sizes="(max-width: 640px) 64px, 80px"
                      fetchPriority={safeIndex === idx ? 'auto' : 'low'}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* ---- Footer CTA ---- */}
            <div className="px-4 py-4 border-t border-[#0B1F3A]/10 bg-[#F8F9FC] flex flex-col sm:flex-row gap-3 items-center justify-between">
              <p className="text-gray-500 text-sm hidden sm:block">
                Press{' '}
                <kbd className="px-1.5 py-0.5 rounded bg-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-mono mx-1">←</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-mono">→</kbd>
                {' '}to navigate
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onBookNow}
                className="w-full sm:w-auto px-7 py-3 rounded-xl text-white shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                style={{
                  background: 'linear-gradient(135deg, #FF6B2B 0%, #e8531a 100%)',
                  fontWeight: 700,
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Book This Vehicle
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
