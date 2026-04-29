import { BookingErrors, BookingFormData, requiredFieldKeys } from './types';
import { WHATSAPP_COUNTRY_CODE, WHATSAPP_NUMBER } from './constants';

const WHATSAPP_BASE_URL = 'https://wa.me';

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

export const validateBookingForm = (bookingForm: BookingFormData): BookingErrors => {
  const errors: BookingErrors = {};
  requiredFieldKeys.forEach((field) => {
    if (!bookingForm[field].trim()) {
      errors[field] = 'This field is required';
    }
  });
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

export const normalizeWhatsAppPhoneNumber = (phoneNumber: string, countryCode = WHATSAPP_COUNTRY_CODE): string => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const countryCodeDigits = countryCode.replace(/\D/g, '');

  if (digitsOnly.startsWith(countryCodeDigits)) {
    return digitsOnly;
  }

  return `${countryCodeDigits}${digitsOnly.replace(/^0+/, '')}`;
};

export const buildWhatsAppUrl = (message?: string, phoneNumber = WHATSAPP_NUMBER): string => {
  const normalizedPhoneNumber = normalizeWhatsAppPhoneNumber(phoneNumber);
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';

  return `${WHATSAPP_BASE_URL}/${normalizedPhoneNumber}${encodedMessage}`;
};
