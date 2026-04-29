"use client";

import React, { FormEvent, useState } from 'react';
import { BookingCtaSection } from '@/features/home/sections/BookingCtaSection';
import { BookingModal } from '@/features/home/sections/BookingModal';
import { ContactStrip } from '@/features/home/sections/ContactStrip';
import { FleetSection } from '@/features/home/sections/FleetSection';
import { HeroSection } from '@/features/home/sections/HeroSection';
import { HowItWorksSection } from '@/features/home/sections/HowItWorksSection';
import { ImageGalleryModal } from '@/features/home/sections/ImageGalleryModal';
import { PricingSection } from '@/features/home/sections/PricingSection';
import { RoutesSection } from '@/features/home/sections/RoutesSection';
import { TestimonialsSection } from '@/features/home/sections/TestimonialsSection';
import { WhyChooseUsSection } from '@/features/home/sections/WhyChooseUsSection';
import { buildWhatsAppMessage, buildWhatsAppUrl, createInitialBookingForm, validateBookingForm } from '@/features/home/lib/booking';
import { POPULAR_ROUTES, TESTIMONIALS, VEHICLES } from '@/features/home/lib/constants';
import { BookingFieldKey, BookingPrefill, RequiredFieldKey, requiredFieldKeys } from '@/features/home/lib/types';

export default function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingSource, setBookingSource] = useState('Website');
  const [bookingForm, setBookingForm] = useState(createInitialBookingForm());
  const [bookingErrors, setBookingErrors] = useState<Partial<Record<RequiredFieldKey, string>>>({});

  const openGallery = (vehicleId: string) => {
    setSelectedVehicle(vehicleId);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedVehicle(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const vehicle = VEHICLES.find((entry) => entry.id === selectedVehicle);
    if (vehicle) {
      setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    }
  };

  const prevImage = () => {
    const vehicle = VEHICLES.find((entry) => entry.id === selectedVehicle);
    if (vehicle) {
      setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
    }
  };

  const handleBookingFieldChange = (field: BookingFieldKey, value: string) => {
    setBookingForm((prev) => ({ ...prev, [field]: value }));
    if (requiredFieldKeys.includes(field as RequiredFieldKey) && value.trim()) {
      setBookingErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const openBookingModal = ({ vehicleType = '', pickupCity = '', dropCity = '', source = 'Website' }: BookingPrefill = {}) => {
    setBookingForm(
      createInitialBookingForm({
        vehicleType,
        pickupCity,
        dropCity
      })
    );
    setBookingErrors({});
    setBookingSource(source);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingErrors({});
  };

  const submitBookingToWhatsApp = (sourceLabel: string) => {
    const errors = validateBookingForm(bookingForm);
    setBookingErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const message = buildWhatsAppMessage(bookingForm, sourceLabel);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    closeBookingModal();
  };

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const source = 'Homepage Quote Form';
    setBookingSource(source);
    submitBookingToWhatsApp(source);
  };

  const handleModalSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitBookingToWhatsApp(bookingSource);
  };

  const selectedVehicleData = VEHICLES.find((entry) => entry.id === selectedVehicle);

  return (
    <>
      <HeroSection />
      <FleetSection
        vehicles={VEHICLES}
        onOpenGallery={openGallery}
        onOpenBookingModal={(vehicleName) =>
          openBookingModal({
            vehicleType: vehicleName,
            source: `Vehicle Card - ${vehicleName}`
          })
        }
      />
      <HowItWorksSection />
      <PricingSection />
      <WhyChooseUsSection />
      <RoutesSection
        popularRoutes={POPULAR_ROUTES}
        onOpenBookingModal={(from, to) =>
          openBookingModal({
            pickupCity: from,
            dropCity: to,
            source: `Popular Route - ${from} to ${to}`
          })
        }
      />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <BookingCtaSection
        bookingForm={bookingForm}
        bookingErrors={bookingErrors}
        vehicles={VEHICLES}
        onFieldChange={handleBookingFieldChange}
        onSubmit={handleQuoteSubmit}
      />
      <ContactStrip />

      <BookingModal
        isOpen={isBookingModalOpen}
        bookingSource={bookingSource}
        bookingForm={bookingForm}
        bookingErrors={bookingErrors}
        vehicles={VEHICLES}
        onClose={closeBookingModal}
        onFieldChange={handleBookingFieldChange}
        onSubmit={handleModalSubmit}
      />

      <ImageGalleryModal
        isOpen={Boolean(selectedVehicle)}
        selectedVehicleData={selectedVehicleData}
        currentImageIndex={currentImageIndex}
        onClose={closeGallery}
        onPrevImage={prevImage}
        onNextImage={nextImage}
        onSelectImage={setCurrentImageIndex}
        onBookNow={() => {
          closeGallery();
          openBookingModal({
            vehicleType: selectedVehicleData?.name || '',
            source: `Gallery Modal - ${selectedVehicleData?.name || 'Vehicle'}`
          });
        }}
      />
    </>
  );
}
