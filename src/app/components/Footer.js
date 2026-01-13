//footer-komponenten som visas längst ner på alla sidor
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warm-black text-cream border-t border-sand/20">
      <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-8 py-12">
        {/* grid med tre kolumner för desktop, staplas på mobil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* varumärke och logotyp */}
          <div>
            <div className="flex items-center gap-0.5 -mt-3">
              <Link href="/">
                <img src="/images/logo.png" alt="Alma PT" className="h-12" />
              </Link>
              {/* samma logotyp text som i Navigation */}
              <Link href="/" className="text-2xl tracking-wide mt-1" style={{ fontFamily: 'Garamond, serif' }}>
                <span className="text-cream font-light">LMA</span> <span className="text-sand font-light">PT</span>
              </Link>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mt-1">
              Personal training that combines physical strength with mental health.
            </p>
          </div>

          {/* snabblänkar till olika sidor */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-sand tracking-wide">PAGES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/60 hover:text-sand transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/60 hover:text-sand transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/60 hover:text-sand transition text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-cream/60 hover:text-sand transition text-sm">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* kontaktinformation och social media */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-sand tracking-wide">CONTACT</h3>
            <ul className="space-y-2 text-cream/60 text-sm">
              <li>111 Santa Barbara Street</li>
              <li>Santa Barbara, CA 93101</li>
              <li>+1 (805) 259-8343</li>
              <li>almaarvidsson@icloud.com</li>
            </ul>
            {/* Instagram-länk med ikon */}
            <div className="mt-4">
              <a
                href="https://instagram.com/almaarvidsson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cream/60 hover:text-sand transition text-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* copyright-sektion */}
        <div className="border-t border-sand/20 mt-8 pt-8 text-center text-cream/40 text-xs">
          <p>2026 Alma PT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
