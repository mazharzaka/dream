'use client';

import Link from 'next/link';
import { EditorialButton } from '../ui/EditorialButton';
import { motion } from 'framer-motion';

export function Header() {
  const navLinks = [
    { label: 'Park Info', href: '#', active: true },
    { label: 'Attractions', href: '#' },
    { label: 'Dining', href: '#' },
    { label: 'Map', href: '#' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="glassmorphism rounded-full bg-white px-8 py-3 flex items-center justify-between shadow-ambient border border-white/20">
        {/* Logo */}
        <Link href="/" className="text-secondary text-2xl font-black italic tracking-tighter hover:opacity-80 transition-opacity">
          Dream Park
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-sm font-bold tracking-wide transition-colors hover:text-primary ${link.active ? 'text-primary' : 'text-on-surface/70'
                }`}
            >
              {link.label}
              {link.active && (
                <motion.div
                  layoutId="header-active-link"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <EditorialButton variant="primary" className="!px-6 !py-3 !min-h-0 !min-w-0 !text-xs">
          Book Now
        </EditorialButton>
      </nav>
    </header>
  );
}
