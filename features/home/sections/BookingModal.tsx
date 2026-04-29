import { FormEvent } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY } from '../lib/constants';
import { BookingErrors, BookingFieldKey, BookingFormData, Vehicle } from '../lib/types';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

type BookingModalProps = {
  isOpen: boolean;
  bookingSource: string;
  bookingForm: BookingFormData;
  bookingErrors: BookingErrors;
  vehicles: Vehicle[];
  onClose: () => void;
  onFieldChange: (field: BookingFieldKey, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function BookingModal({
  isOpen,
  bookingSource,
  bookingForm,
  bookingErrors,
  vehicles,
  onClose,
  onFieldChange,
  onSubmit
}: BookingModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-110 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl text-[#0B1F3A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Complete Booking Details
            </h3>
            <p className="text-sm text-gray-600 mt-1">Source: {bookingSource}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-[#FF6B2B] transition-colors" aria-label="Close booking popup">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Pickup City *
              </label>
              <input
                type="text"
                placeholder="Nashik"
                value={bookingForm.pickupCity}
                onChange={(event) => onFieldChange('pickupCity', event.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                  bookingErrors.pickupCity ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B]/20'
                }`}
              />
              {bookingErrors.pickupCity && <p className="text-xs text-red-500 mt-1">{bookingErrors.pickupCity}</p>}
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Drop City *
              </label>
              <input
                type="text"
                placeholder="Enter drop city"
                value={bookingForm.dropCity}
                onChange={(event) => onFieldChange('dropCity', event.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                  bookingErrors.dropCity ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B]/20'
                }`}
              />
              {bookingErrors.dropCity && <p className="text-xs text-red-500 mt-1">{bookingErrors.dropCity}</p>}
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Travel Date *
              </label>
              <input
                type="date"
                value={bookingForm.travelDate}
                onChange={(event) => onFieldChange('travelDate', event.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                  bookingErrors.travelDate ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B]/20'
                }`}
              />
              {bookingErrors.travelDate && <p className="text-xs text-red-500 mt-1">{bookingErrors.travelDate}</p>}
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Vehicle Type *
              </label>
              <select
                value={bookingForm.vehicleType}
                onChange={(event) => onFieldChange('vehicleType', event.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                  bookingErrors.vehicleType ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B]/20'
                }`}
              >
                <option value="">Select vehicle</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.name}>
                    {vehicle.name}
                  </option>
                ))}
              </select>
              {bookingErrors.vehicleType && <p className="text-xs text-red-500 mt-1">{bookingErrors.vehicleType}</p>}
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Pickup Time
              </label>
              <input
                type="time"
                value={bookingForm.pickupTime}
                onChange={(event) => onFieldChange('pickupTime', event.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Passenger Count
              </label>
              <input
                type="number"
                min="1"
                placeholder="4"
                value={bookingForm.passengerCount}
                onChange={(event) => onFieldChange('passengerCount', event.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={bookingForm.fullName}
                onChange={(event) => onFieldChange('fullName', event.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                Phone Number
              </label>
              <input
                type="tel"
                placeholder={CONTACT_PHONE_DISPLAY}
                value={bookingForm.phoneNumber}
                onChange={(event) => onFieldChange('phoneNumber', event.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
              Additional Notes
            </label>
            <textarea
              rows={3}
              placeholder="Anything specific for your trip?"
              value={bookingForm.notes}
              onChange={(event) => onFieldChange('notes', event.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #1ebe5d 100%)',
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Check Fare & Book on WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
