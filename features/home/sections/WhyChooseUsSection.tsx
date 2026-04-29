import { motion } from 'motion/react';
import { WHY_CHOOSE_FEATURES } from '../lib/constants';

export function WhyChooseUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-4">
            <span className="text-[#FF6B2B]" style={{ fontWeight: 600 }}>
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0B1F3A' }}>
            Built for Reliable Travel from Nashik
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing, suitable vehicles, local route knowledge, and direct support for family trips, weddings, corporate travel, and outstation tours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0B1F3A' }}>
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
