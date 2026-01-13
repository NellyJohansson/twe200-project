//navigationskomponenten som visas högst upp på alla sidor
'use client'; //behövs för att använda useState (React hooks)

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  //state för att hålla koll på om mobilmenyn är öppen eller stängd
  const [isOpen, setIsOpen] = useState(false);

  return (
    //fixerad navbar som alltid syns högst upp
    <nav className="bg-warm-black fixed w-full z-50 border-b border-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* logotypen - klickbar länk till startsidan */}
          <div className="flex items-center gap-0.5">
            <Link href="/">
              <img src="/images/logo.png" alt="Alma PT" className="h-12" />
            </Link>
            {/* logotyp text med Garamond font */}
            <Link href="/" className="text-2xl tracking-wide mt-1" style={{ fontFamily: 'Garamond, serif' }}>
              <span className="text-cream font-light">LMA</span> <span className="text-sand font-light">PT</span>
            </Link>
          </div>

          {/* desktop-menyn, dold på mobil (hidden md:flex) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-cream/80 hover:text-sand transition text-sm tracking-wide">
              Home
            </Link>
            <Link href="/about" className="text-cream/80 hover:text-sand transition text-sm tracking-wide">
              About
            </Link>
            <Link href="/services" className="text-cream/80 hover:text-sand transition text-sm tracking-wide">
              Services
            </Link>
            {/* CTA-knapp med annan stil */}
            <Link href="/booking" className="bg-primary text-cream px-6 py-2 rounded-full hover:bg-primary-light transition text-sm tracking-wide">
              Book Now
            </Link>
          </div>

          {/* hamburgerknapp för mobil, visas bara på små skärmar */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream hover:text-sand focus:outline-none"
            >
              {/* byter ikon beroende på om menyn är öppen eller stängd */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  //X-ikon när menyn är öppen
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  //hamburgerikon när menyn är stängd
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobilmenyn, visas bara när isOpen är true */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-warm-black border-t border-sand/20">
            <Link href="/" className="block px-3 py-3 text-cream/80 hover:text-sand transition text-sm">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-3 text-cream/80 hover:text-sand transition text-sm">
              About
            </Link>
            <Link href="/services" className="block px-3 py-3 text-cream/80 hover:text-sand transition text-sm">
              Services
            </Link>
            <Link href="/booking" className="block px-3 py-3 bg-primary text-cream hover:bg-primary-light rounded-full text-center text-sm mt-2">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
