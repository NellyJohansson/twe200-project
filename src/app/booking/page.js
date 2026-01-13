//booking-sidan där besökare kan boka konsultation via Koalendar
//konstant för Koalendar-länken
const KOALENDAR_URL = 'https://koalendar.com/e/meet-with-alma-arvidsson';

export default function Booking() {
  return (
    //pt-16 för att kompensera för fixerad navbar
    <div className="pt-16">
      {/* Hero Section - introduktion */}
      <section className="bg-warm-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4">BOOK</p>
          <h1 className="text-4xl md:text-5xl font-light text-cream mb-6">
            Book a Session
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Choose a time that works for you. The first consultation is always free.
          </p>
        </div>
      </section>

      {/* Koalendar Booking Section - iframe som visar bokningskalendern */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* iframe som embeds Koalendar bokningssystemet */}
          <iframe
            src={`${KOALENDAR_URL}?embed=true`}
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-2xl"
            title="Book a session"
          />
          {/* information om integritetspolicy */}
          <p className="text-cream/50 text-xs text-center mt-4">
            We use Koalendar for bookings. Your information is handled according to their{' '}
            <a
              href="https://koalendar.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cream transition"
            >
              privacy policy
            </a>
            . We only use your data to manage bookings and send reminders.
          </p>
        </div>
      </section>

      {/* Contact Info - kontaktinformation med ikoner */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4 text-center">CONTACT INFO</p>
          {/* grid med 4 kontaktkort: email, telefon, plats, instagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-cream font-medium mb-1">Email</h3>
              <p className="text-cream/60 text-sm">almaarvidsson@icloud.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-cream font-medium mb-1">Phone</h3>
              <p className="text-cream/60 text-sm">+1 (805) 259-8343</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-cream font-medium mb-1">Location</h3>
              <p className="text-cream/60 text-sm">111 Santa Barbara Street</p>
              <p className="text-cream/60 text-sm">Santa Barbara, CA 93101</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-cream font-medium mb-1">Instagram</h3>
              <a href="https://instagram.com/almaarvidsson" target="_blank" rel="noopener noreferrer" className="text-cream/60 text-sm hover:text-sand transition">
                @almaarvidsson
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
