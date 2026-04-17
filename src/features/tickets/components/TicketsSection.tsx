'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { StepIndicator } from './StepIndicator';
import { PassCard } from './PassCard';
import { TICKET_TIERS } from '../lib/ticket-data';

import 'swiper/css';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

export function TicketsSection() {
  const t = useTranslations('Tickets');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const handleSelect = (id: string) => {
    console.log('Selected tier:', id);
    // Logic for Step 02 would go here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Progress Header */}
        <StepIndicator />

        {/* Desktop Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:flex justify-center items-center gap-6"
        >
          {TICKET_TIERS.map((tier) => (
            <motion.div key={tier.id} variants={itemVariants}>
              <PassCard 
                tier={tier} 
                onSelect={handleSelect} 
                isRtl={isRtl} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="tickets-swiper pb-12"
          >
            {TICKET_TIERS.map((tier) => (
              <SwiperSlide key={tier.id} className="flex justify-center">
                <PassCard 
                  tier={tier} 
                  onSelect={handleSelect} 
                  isRtl={isRtl} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .tickets-swiper .swiper-pagination-bullet {
          background: var(--color-primary);
          opacity: 0.2;
        }
        .tickets-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
