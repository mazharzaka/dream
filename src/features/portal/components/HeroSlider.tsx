'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useHeroData } from '../hooks/useHeroData';
import { SlideContent } from './SlideContent';

import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/slider.css';

export function HeroSlider() {
  const { slides, isLoading } = useHeroData();

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-surface flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          nextEl: '.slider-nav-next',
          prevEl: '.slider-nav-prev',
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <SlideContent slide={slide} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="slider-nav-btn slider-nav-prev">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-nav-btn slider-nav-next">
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
