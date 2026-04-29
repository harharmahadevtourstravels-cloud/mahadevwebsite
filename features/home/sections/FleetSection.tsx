import { motion } from 'motion/react';
import { CheckCircle2, Image as ImageIcon, Users } from 'lucide-react';
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
    <section id="fleet" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-[#FF6B2B]/10 border-2 border-[#FF6B2B]/30 mb-6">
            <span className="text-[#FF6B2B] text-lg" style={{ fontWeight: 700 }}>
              Rental Fleet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0B1F3A' }}>
            Premium Tempo Travellers, Buses &amp; Cars on Rent in Nashik
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ lineHeight: 1.8 }}>
          Professional rentals for any occasion—family, corporate, or weddings. Includes a skilled driver and clear per-km pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 group"
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <ImageWithFallback src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-[#FF6B2B] text-white px-4 py-2 rounded-full" style={{ fontWeight: 700 }}>
                  {vehicle.originalRate && <span className="text-xs line-through opacity-75 mr-2">₹{vehicle.originalRate}</span>}
                  ₹{vehicle.rate}/km
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-[#FF6B2B] mb-1" style={{ fontWeight: 600 }}>
                  {vehicle.subtitle}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0B1F3A' }}>
                  {vehicle.name}
                </h3>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700" style={{ fontWeight: 600 }}>
                      {vehicle.seating}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Min: {vehicle.minBooking}</div>
                </div>
                <div className="space-y-2 mb-6">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B2B]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenGallery(vehicle.id)}
                    className="w-full py-3 rounded-xl border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition-all flex items-center justify-center gap-2"
                    style={{
                      fontWeight: 600,
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    <ImageIcon className="w-5 h-5" />
                    See More Images ({vehicle.images.length})
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenBookingModal(vehicle.name)}
                    className="w-full py-4 rounded-xl text-white hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B2B 0%, #ff8555 100%)',
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
