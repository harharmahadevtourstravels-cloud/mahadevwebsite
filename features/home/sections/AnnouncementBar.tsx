import { CONTACT_PHONE_DISPLAY, OFFICE_ADDRESS_SHORT } from '../lib/constants';

export function AnnouncementBar() {
  return (
    <div className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center text-[11px] sm:text-sm whitespace-nowrap overflow-x-auto">
          <span style={{ fontWeight: 700 }}>{CONTACT_PHONE_DISPLAY}</span>
          <span className="px-2 sm:px-3 text-white/60">|</span>
          <span>{OFFICE_ADDRESS_SHORT}</span>
          <span className="px-2 sm:px-3 text-white/60">|</span>
          <span>Open 24/7</span>
        </div>
      </div>
    </div>
  );
}
