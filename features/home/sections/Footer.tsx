import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPinned, Phone } from 'lucide-react';
import { buildWhatsAppUrl } from '@/features/home/lib/booking';
import { BOOK_NOW_HREF, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, OFFICE_ADDRESS_LINES, OFFICE_ADDRESS_SHORT } from '../lib/constants';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

type FooterProps = {
  logo: string;
};

export function Footer({ logo }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const primaryServices = [
    { label: 'Tempo Traveller on Rent', href: '/tempo-traveller-on-rent-nashik' },
    { label: 'Bus on Rent', href: '/bus-on-rent-nashik' },
  ];

  return (
    <footer className="bg-[#0B1F3A] text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 md:gap-10 mb-10 sm:mb-12">
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <Image
                src={logo}
                alt="Har Har Mahadev Tours & Travels logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mt-0.5 shrink-0"
              />
              <div className="text-xl sm:text-2xl leading-tight max-w-md" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                Har Har Mahadev Tours & Travels
              </div>
            </div>
            <p className="text-gray-300 mb-2">Since 2006 |  Nashik, Maharashtra</p>
            <p className="text-gray-400 mb-5 max-w-xl">
            Trusted for local and outstation group travel — tempo travellers and buses on rent
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Visit Us
              {OFFICE_ADDRESS_LINES.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Fleet', href: '/#fleet' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'Contact Us', href: '/#contact' },
                { label: 'Book Now', href: BOOK_NOW_HREF }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FF6B2B] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Popular Services
            </h4>
            <ul className="space-y-2">
              {primaryServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FF6B2B] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300 max-w-sm">
              <a href={CONTACT_PHONE_TEL} className="flex items-start gap-2 hover:text-[#FF6B2B] transition-colors">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a href={buildWhatsAppUrl()} className="flex items-start gap-2 hover:text-[#FF6B2B] transition-colors">
                <WhatsAppIcon className="w-4 h-4 mt-1 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-2 hover:text-[#FF6B2B] transition-colors break-all">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPinned className="w-4 h-4 mt-1 shrink-0" />
                <span>{OFFICE_ADDRESS_SHORT}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Har Har Mahadev Tours & Travels. All rights reserved.</p>
          <p className="mt-2">Operating from {OFFICE_ADDRESS_SHORT}.</p>
        </div>
      </div>
    </footer>
  );
}
