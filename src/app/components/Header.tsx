'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Prabhu Baa', href: '/parampujya-paramhans-swami-sugandheshwaranand-rajyogi-prabhu-baa' },
    { name: 'Shiv Pravah', href: '/shiv-pravah' },
    { name: 'Ashrams', href: '#ashrams' },
    { name: 'Meditation', href: '/meditation' },
    { name: 'Events', href: '#events' },
    { name: 'Health', href: '#health' },
    { name: 'Donation', href: '#donation' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="section-container py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-serif font-bold text-earth-dark">
              <Image src={'/assets/svg/logo.svg'} width={150} height={50} alt="logo" className='object-contain' />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8 px-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-earth-brown hover:text-accent-orange transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            {/* <button className="btn-primary">Sign In</button> */}
          </div>

          <button
            className="lg:hidden p-2 relative z-40"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-earth-brown"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-earth-beige pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-earth-brown hover:text-accent-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <button className="btn-primary w-full mt-4">Sign In</button> */}
          </div>
        )}
      </nav>
    </header>
  );
}
