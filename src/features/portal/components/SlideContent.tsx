import { motion } from 'framer-motion';
import { HeroSlide } from '../types';
import { EditorialButton } from '@/src/components/ui/EditorialButton';
import Image from 'next/image';

interface SlideContentProps {
  slide: HeroSlide;
  isActive: boolean;
}

export function SlideContent({ slide, isActive }: SlideContentProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1], // Ease out expo
      },
    },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-start text-left px-8 md:px-24 lg:px-32 2xl:px-[10%]">
      {/* Background Image Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.image || ""}
          alt={slide.title}
          fill
          priority={isActive}
          className={`object-cover transition-transform duration-[10000ms] ${isActive ? 'scale-100' : 'scale-110'}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Content shifted off-center for "Layout Energy" */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl xl:max-w-5xl 2xl:max-w-7xl pt-20"
      >
        {slide.tagline && (
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.3em] text-white/80 uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/10"
          >
            {slide.tagline}
          </motion.span>
        )}

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[7rem] 2xl:text-[10rem] font-sans font-extrabold text-white leading-[0.9] mb-8 select-none"
        >
          {slide.title}
          <br />
          <span className="text-primary">{slide.titleAccent}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl 2xl:text-2xl text-white/70 max-w-2xl 2xl:max-w-3xl mb-10 leading-relaxed font-medium"
        >
          {slide.description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-start">
          {slide.buttons.map((btn, idx) => (
            <EditorialButton key={idx} variant={btn.variant}>
              {btn.label}
            </EditorialButton>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
