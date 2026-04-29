import Image from 'next/image';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Testimonial } from '../lib/types';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const AVATAR_COLORS = [
  'bg-[#FF6B2B]',
  'bg-[#0B1F3A]',
  'bg-emerald-600',
];

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-4">
            <span className="text-[#FF6B2B]" style={{ fontWeight: 600 }}>
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0B1F3A' }}>
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">Real reviews from real travellers on Google</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Stars + Google badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#FF6B2B] text-[#FF6B2B]" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">Google Review</span>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm shrink-0 ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`} style={{ fontWeight: 700 }}>
                    {getInitials(testimonial.name)}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-sm truncate" style={{ fontWeight: 700, color: '#0B1F3A' }}>{testimonial.name}</div>
                  {testimonial.timeAgo && (
                    <div className="text-xs text-gray-400">{testimonial.timeAgo}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
