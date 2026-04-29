import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
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
  if (!isOpen || !selectedVehicleData) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:text-[#FF6B2B] transition-colors" aria-label="Close gallery">
          <X className="w-8 h-8" />
        </button>

        <div className="text-white text-center mb-4">
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {selectedVehicleData.name}
          </h3>
          <p className="text-gray-300 mt-1">
            Image {currentImageIndex + 1} of {selectedVehicleData.images.length}
          </p>
        </div>

        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={selectedVehicleData.images[currentImageIndex] || ''}
            alt={`${selectedVehicleData.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-[60vh] sm:h-[70vh] object-contain bg-gray-100"
          />

          {selectedVehicleData.images.length > 1 && (
            <>
              <button
                onClick={onPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-[#0B1F3A]" />
              </button>
              <button
                onClick={onNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-[#0B1F3A]" />
              </button>
            </>
          )}
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {selectedVehicleData.images.map((img, idx) => (
            <button
              key={img}
              onClick={() => onSelectImage(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === idx ? 'border-[#FF6B2B] scale-110' : 'border-white/30 hover:border-white/60'
              }`}
            >
              <ImageWithFallback src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookNow}
            className="px-8 py-4 rounded-xl text-white shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #FF6B2B 0%, #ff8555 100%)',
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Book This Vehicle Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
