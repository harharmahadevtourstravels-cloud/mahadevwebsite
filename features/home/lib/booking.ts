import { BookingErrors, BookingFormData, requiredFieldKeys } from './types';
import { WHATSAPP_COUNTRY_CODE, WHATSAPP_NUMBER } from './constants';

const WHATSAPP_BASE_URL = 'https://wa.me';

/** Local calendar date YYYY-MM-DD for `<input type="date" min={...}>` */
export const getTodayIsoDateLocal = (): string => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const getBookingModalSubtitle = (form: BookingFormData): string => {
  if (form.pickupCity.trim() && form.dropCity.trim()) {
    return `Route: ${form.pickupCity.trim()} → ${form.dropCity.trim()}`;
  }
  if (form.vehicleType.trim()) {
    return `You're booking: ${form.vehicleType.trim()}`;
  }
  return "We'll open WhatsApp with this information so you can confirm the fare.";
};

export const createInitialBookingForm = (prefill: Partial<BookingFormData> = {}): BookingFormData => ({
  fullName: '',
  phoneNumber: '',
  pickupCity: '',
  dropCity: '',
  travelDate: '',
  pickupTime: '',
  vehicleType: '',
  passengerCount: '',
  estimatedKms: '',
  notes: '',
  ...prefill
});

export const normalizeWhatsAppPhoneNumber = (phoneNumber: string, countryCode = WHATSAPP_COUNTRY_CODE): string => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const countryCodeDigits = countryCode.replace(/\D/g, '');

  if (digitsOnly.startsWith(countryCodeDigits)) {
    return digitsOnly;
  }

  return `${countryCodeDigits}${digitsOnly.replace(/^0+/, '')}`;
};

export const validateIndianMobile = (phoneNumber: string): boolean => {
  const trimmed = phoneNumber.trim();
  if (!trimmed) {
    return false;
  }
  const normalized = normalizeWhatsAppPhoneNumber(trimmed);
  if (normalized.length !== 12 || !normalized.startsWith('91')) {
    return false;
  }
  const local = normalized.slice(2);
  return local.length === 10 && /^[6-9]\d{9}$/.test(local);
};

export const validateBookingForm = (bookingForm: BookingFormData): BookingErrors => {
  const errors: BookingErrors = {};
  requiredFieldKeys.forEach((field) => {
    if (!bookingForm[field].trim()) {
      errors[field] = 'This field is required';
    }
  });
  if (bookingForm.phoneNumber.trim() && !validateIndianMobile(bookingForm.phoneNumber)) {
    errors.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
  }
  return errors;
};

export const buildWhatsAppMessage = (bookingForm: BookingFormData, sourceLabel: string): string => {
  const lines = [
    'Hello Har Har Mahadev Tours & Travels,',
    '',
    'I would like to book a vehicle from your website.',
    '',
    `Booking Source: ${sourceLabel}`,
    `Vehicle Type: ${bookingForm.vehicleType || 'Not selected'}`,
    `Pickup City: ${bookingForm.pickupCity}`,
    `Drop City: ${bookingForm.dropCity}`,
    `Travel Date: ${bookingForm.travelDate}`,
    `Pickup Time: ${bookingForm.pickupTime || 'Not provided'}`,
    `Passenger Count: ${bookingForm.passengerCount || 'Not provided'}`,
    `Estimated KMs: ${bookingForm.estimatedKms || 'Not provided'}`,
    `Full Name: ${bookingForm.fullName || 'Not provided'}`,
    `Phone Number: ${bookingForm.phoneNumber || 'Not provided'}`,
    `Notes: ${bookingForm.notes || 'None'}`,
    '',
    'Please share fare details and confirm booking availability.'
  ];

  return lines.join('\n');
};

export const buildWhatsAppUrl = (message?: string, phoneNumber = WHATSAPP_NUMBER): string => {
  const normalizedPhoneNumber = normalizeWhatsAppPhoneNumber(phoneNumber);
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';

  return `${WHATSAPP_BASE_URL}/${normalizedPhoneNumber}${encodedMessage}`;
};
