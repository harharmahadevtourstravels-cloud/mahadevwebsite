'use client';

import { FormEvent, useEffect, useId, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDownUp, X } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY } from '../lib/constants';
import { getBookingModalSubtitle, getTodayIsoDateLocal } from '../lib/booking';
import { BookingErrors, BookingFieldKey, BookingFormData, Vehicle, requiredFieldKeys } from '../lib/types';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

type BookingModalProps = {
  isOpen: boolean;
  bookingForm: BookingFormData;
  bookingErrors: BookingErrors;
  vehicles: Vehicle[];
  onClose: () => void;
  onFieldChange: (field: BookingFieldKey, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const inputError = (hasError: boolean) =>
  hasError
    ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
    : 'border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B]/20';

export function BookingModal({
  isOpen,
  bookingForm,
  bookingErrors,
  vehicles,
  onClose,
  onFieldChange,
  onSubmit
}: BookingModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastSubmitAtRef = useRef(0);
  const todayMin = getTodayIsoDateLocal();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) {
      return;
    }
    const firstField = panelRef.current.querySelector<HTMLElement>('input:not([type="hidden"]), select, textarea');
    firstField?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }
      const root = panelRef.current;
      if (!root.contains(document.activeElement)) {
        return;
      }
      const nodes = root.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const list = Array.from(nodes).filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1);
      if (list.length === 0) {
        return;
      }
      const first = list[0];
      const last = list[list.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || Object.keys(bookingErrors).length === 0) {
      return;
    }
    for (const key of requiredFieldKeys) {
      if (bookingErrors[key]) {
        document.getElementById(`booking-field-${key}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }
    }
    if (bookingErrors.phoneNumber) {
      document.getElementById('booking-field-phoneNumber')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [bookingErrors, isOpen]);

  if (!isOpen) {
    return null;
  }

  const subtitle = getBookingModalSubtitle(bookingForm);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const now = Date.now();
    if (now - lastSubmitAtRef.current < 600) {
      event.preventDefault();
      return;
    }
    lastSubmitAtRef.current = now;
    onSubmit(event);
  };

  const swapPickupDrop = () => {
    const pickup = bookingForm.pickupCity;
    onFieldChange('pickupCity', bookingForm.dropCity);
    onFieldChange('dropCity', pickup);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-110 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[95dvh] sm:max-h-[90vh] flex flex-col sm:p-8 p-6 pb-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4 shrink-0">
          <div>
            <h3
              id={titleId}
              className="text-2xl text-[#0B1F3A]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Complete booking details
            </h3>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-[#FF6B2B] transition-colors shrink-0"
            aria-label="Close booking popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="overflow-y-auto flex-1 space-y-6 pb-4 sm:pb-6">
            <p className="text-sm text-gray-500">
              Pickup city, drop city, and travel date are required. We&apos;ll open WhatsApp with your details so you can
              confirm the fare with our team.
            </p>

            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Trip
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div id="booking-field-pickupCity" className="sm:col-span-1">
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Pickup city *
                  </label>
                  <input
                    type="text"
                    placeholder="Nashik"
                    value={bookingForm.pickupCity}
                    onChange={(event) => onFieldChange('pickupCity', event.target.value)}
                    autoComplete="address-level2"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${inputError(
                      Boolean(bookingErrors.pickupCity)
                    )}`}
                  />
                  {bookingErrors.pickupCity && <p className="text-xs text-red-500 mt-1">{bookingErrors.pickupCity}</p>}
                </div>
                <div id="booking-field-dropCity" className="sm:col-span-1">
                  <div className="flex items-end gap-2">
                    <div className="flex-1 min-w-0">
                      <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                        Drop city *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter drop city"
                        value={bookingForm.dropCity}
                        onChange={(event) => onFieldChange('dropCity', event.target.value)}
                        autoComplete="address-level2"
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${inputError(
                          Boolean(bookingErrors.dropCity)
                        )}`}
                      />
                      {bookingErrors.dropCity && <p className="text-xs text-red-500 mt-1">{bookingErrors.dropCity}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={swapPickupDrop}
                      className="mb-0.5 shrink-0 p-3 rounded-lg border border-gray-300 text-gray-600 hover:border-[#FF6B2B] hover:text-[#FF6B2B] transition-colors"
                      aria-label="Swap pickup and drop cities"
                      title="Swap pickup and drop"
                    >
                      <ArrowDownUp className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div id="booking-field-travelDate">
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Travel date *
                  </label>
                  <input
                    type="date"
                    min={todayMin}
                    value={bookingForm.travelDate}
                    onChange={(event) => onFieldChange('travelDate', event.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${inputError(
                      Boolean(bookingErrors.travelDate)
                    )}`}
                  />
                  {bookingErrors.travelDate && <p className="text-xs text-red-500 mt-1">{bookingErrors.travelDate}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Pickup time
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
                    Passenger count
                  </label>
                  <input
                    type="number"
                    min={1}
                    placeholder="4"
                    value={bookingForm.passengerCount}
                    onChange={(event) => onFieldChange('passengerCount', event.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Estimated KMs
                  </label>
                  <input
                    type="number"
                    min={1}
                    placeholder="e.g. 100"
                    value={bookingForm.estimatedKms}
                    onChange={(event) => onFieldChange('estimatedKms', event.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Vehicle
              </h4>
              <div id="booking-field-vehicleType">
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

            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div id="booking-field-fullName">
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
                <div id="booking-field-phoneNumber">
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder={CONTACT_PHONE_DISPLAY}
                    value={bookingForm.phoneNumber}
                    onChange={(event) => onFieldChange('phoneNumber', event.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${inputError(
                      Boolean(bookingErrors.phoneNumber)
                    )}`}
                  />
                  {bookingErrors.phoneNumber && (
                    <p className="text-xs text-red-500 mt-1">{bookingErrors.phoneNumber}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Notes
              </h4>
              <textarea
                aria-label="Additional notes"
                rows={3}
                placeholder="Anything specific for your trip?"
                value={bookingForm.notes}
                onChange={(event) => onFieldChange('notes', event.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none transition-all resize-none"
              />
            </div>
          </div>

          <div className="shrink-0 sticky bottom-0 bg-white border-t border-gray-100 pt-4 sm:pt-0 sm:border-0 sm:static -mx-6 px-6 sm:mx-0 sm:px-0 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
            <div aria-live="polite" className="sr-only">
              {Object.keys(bookingErrors).length > 0 ? 'Please fix the errors above.' : ''}
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
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              Check fare &amp; book on WhatsApp
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
