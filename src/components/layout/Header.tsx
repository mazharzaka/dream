'use client';

import Link from 'next/link';
import { EditorialButton } from '../ui/EditorialButton';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Header() {
  const navLinks = [
    { label: 'Park Info', href: '#', active: true },
    { label: 'Attractions', href: '#' },
    { label: 'Dining', href: '#' },
    { label: 'Map', href: '#' },
  ];

  return (
    <header className="fixed  left-1/2 -translate-x-1/2 z-50 w-full ">
      <nav className="glassmorphism  bg-white px-6 py-3 flex items-center justify-between shadow-ambient border border-white/20">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logoDream.png" alt="Logo" width={80} height={80} />
          <Link href="/" className="text-secondary text-xl md:block pt-2 font-black italic tracking-tighter hover:opacity-80 transition-opacity">
            <span className='text-primary'> Dream</span> Park
          </Link>
        </div>

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
