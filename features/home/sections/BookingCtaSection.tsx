import { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { getTodayIsoDateLocal } from '../lib/booking';
import { OFFICE_ADDRESS_INLINE, OFFICE_MAP_EMBED_URL } from '../lib/constants';
import { BookingErrors, BookingFieldKey, BookingFormData, Vehicle } from '../lib/types';

type BookingCtaSectionProps = {
  bookingForm: BookingFormData;
  bookingErrors: BookingErrors;
  vehicles: Vehicle[];
  onFieldChange: (field: BookingFieldKey, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const fieldClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
    hasError ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B]/20'
  }`;

export function BookingCtaSection({ bookingForm, bookingErrors, vehicles, onFieldChange, onSubmit }: BookingCtaSectionProps) {
  const todayMin = getTodayIsoDateLocal();

  return (
    <section
      id="book"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-r from-[#FF6B2B] to-[#ff8555] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
            Ready to Travel? Book Your Vehicle Now
          </h2>
          <p className="text-xl text-white/90">We&apos;ll call you back within 15 minutes</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Booking Form */}
          <motion.form initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <p className="text-sm text-gray-600 mb-6">
              Pickup city, drop city, and travel date are required. We&apos;ll open WhatsApp with your details so you can
              confirm the fare.
            </p>
            <div className="space-y-8 mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={bookingForm.fullName}
                      onChange={(event) => onFieldChange('fullName', event.target.value)}
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 8055159348"
                      value={bookingForm.phoneNumber}
                      onChange={(event) => onFieldChange('phoneNumber', event.target.value)}
                      autoComplete="tel"
                      inputMode="tel"
                      className={fieldClass(Boolean(bookingErrors.phoneNumber))}
                    />
                    {bookingErrors.phoneNumber && (
                      <p className="text-xs text-red-500 mt-1">{bookingErrors.phoneNumber}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Trip
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Pickup city *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      value={bookingForm.pickupCity}
                      onChange={(event) => onFieldChange('pickupCity', event.target.value)}
                      className={fieldClass(Boolean(bookingErrors.pickupCity))}
                    />
                    {bookingErrors.pickupCity && <p className="text-xs text-red-500 mt-1">{bookingErrors.pickupCity}</p>}
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Drop city *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter drop location"
                      value={bookingForm.dropCity}
                      onChange={(event) => onFieldChange('dropCity', event.target.value)}
                      className={fieldClass(Boolean(bookingErrors.dropCity))}
                    />
                    {bookingErrors.dropCity && <p className="text-xs text-red-500 mt-1">{bookingErrors.dropCity}</p>}
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Travel date *
                    </label>
                    <input
                      type="date"
                      min={todayMin}
                      value={bookingForm.travelDate}
                      onChange={(event) => onFieldChange('travelDate', event.target.value)}
                      className={fieldClass(Boolean(bookingErrors.travelDate))}
                    />
                    {bookingErrors.travelDate && <p className="text-xs text-red-500 mt-1">{bookingErrors.travelDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Estimated KMs
                    </label>
                    <input
                      type="number"
                      min={1}
                      placeholder="100"
                      value={bookingForm.estimatedKms}
                      onChange={(event) => onFieldChange('estimatedKms', event.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Vehicle
                </h3>
                <div>
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Vehicle type
                  </label>
                  <select
                    value={bookingForm.vehicleType}
                    onChange={(event) => onFieldChange('vehicleType', event.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
                  >
                    <option value="">Select vehicle</option>
                    {vehicles.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.name}>
                        {vehicle.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all"
              style={{
                background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.125rem'
              }}
            >
              Get Instant Quote
            </motion.button>
            <p className="text-center text-gray-600 mt-4 text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              We will open WhatsApp with your booking details
            </p>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <p className="text-white font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Office Location</p>
              <p className="text-white/80 text-sm">{OFFICE_ADDRESS_INLINE}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 w-full h-80 sm:h-96 lg:h-[460px]">
              <iframe
                src={OFFICE_MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Har Har Mahadev Tours & Travels Location"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/JRkUDny7XgPz8XUd9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white/80 hover:text-white text-sm underline underline-offset-2 transition-colors"
            >
              Open in Google Maps →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
