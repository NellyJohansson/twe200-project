//startsidan (Home) - första sidan användare ser när de besöker hemsidan
import Link from 'next/link';

export default function Home() {
  return (
    //pt-16 ger padding-top för att kompensera för den fixerade navbaren
    <div className="pt-16">

      {/* HERO SECTION - första intrycket med stor bakgrundsbild och huvudbudskap */}
      <section className="bg-warm-black min-h-[80vh] flex items-center relative overflow-hidden">
        {/* bakgrundsbild med opacity för att få texten att synas bättre */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/gym2.jpeg"
            alt="Alma training"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-2xl">
            {/* textShadow gör att texten syns bra över bilden */}
            <p className="text-sand text-sm tracking-widest mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>PERSONAL TRAINER</p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
              Training for <span className="text-sand">body</span> and <span className="text-sand">mind</span>
            </h1>
            <p className="text-white text-lg mb-8 leading-relaxed" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              I help you build strength, endurance and mental balance.
              With a background in both elite athletics and psychology, I offer
              a supportive approach that goes beyond just training.
            </p>
            {/* call-to-action knappar, centrerade på mobil och vänsterjusterade på desktop */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Link
                href="/booking"
                className="bg-primary text-cream px-22 py-3 rounded-full font-medium hover:bg-primary-light transition text-center inline-block"
              >
                Let&apos;s Get Started
              </Link>
              <Link
                href="/about"
                className="border border-sand/40 text-cream px-22 py-3 rounded-full font-medium hover:border-sand hover:text-sand transition text-center inline-block"
              >
                Get to Know Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I OFFER - grid med fyra tjänstekort som visar vad Alma erbjuder */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4">WHAT I OFFER</p>
          <h2 className="text-3xl md:text-4xl font-light text-cream mb-2">
            Holistic Training
          </h2>
          {/* responsive grid: 1 kolumn på mobil, 2 på tablet, 4 på desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-warm-black/30 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-cream mb-2">Strength Training</h3>
              <p className="text-cream/60 text-sm">
                Build muscle and functional body control
              </p>
            </div>
            <div className="bg-warm-black/30 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-cream mb-2">Conditioning</h3>
              <p className="text-cream/60 text-sm">
                Running, intervals and endurance training
              </p>
            </div>
            <div className="bg-warm-black/30 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-cream mb-2">Performance</h3>
              <p className="text-cream/60 text-sm">
                Become strong, fast and mentally balanced
              </p>
            </div>
            <div className="bg-warm-black/30 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-cream mb-2">Mental Health</h3>
              <p className="text-cream/60 text-sm">
                Movement that strengthens mental well-being
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW - kort presentation av Alma med bild och länk till About-sidan */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sand text-sm tracking-widest mb-4">ABOUT ME</p>
              <h2 className="text-3xl md:text-4xl font-light text-cream mb-6">
                More than just training
              </h2>
              <p className="text-cream/70 mb-4 leading-relaxed">
                With a bachelor&apos;s degree in psychology and experience from elite athletics,
                I understand how body and mind are connected - and how to make training work for your life.
              </p>
              <p className="text-cream/70 mb-6 leading-relaxed">
                I graduate as a personal trainer in spring 2026 and have already
                earned podium finishes in HYROX and marathons. But my real passion? Helping you find your strength.
              </p>
              <Link
                href="/about"
                className="text-sand hover:text-cream transition inline-flex items-center"
              >
                Read more about my background
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/medals2.jpeg"
                alt="Alma training"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS - visar Almas tävlingsresultat i HYROX och maraton */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-black text-sm tracking-widest mb-8 text-center">MY ACHIEVEMENTS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-light text-black mb-2">3rd Place</p>
              <p className="text-black/70 text-sm">HYROX in age group</p>
            </div>
            <div>
              <p className="text-4xl font-light text-black mb-2">3rd Place</p>
              <p className="text-black/70 text-sm">Overall in first marathon</p>
            </div>
            <div>
              <p className="text-4xl font-light text-black mb-2">2nd Place</p>
              <p className="text-black/70 text-sm">In age group marathon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (Call To Action) - uppmanar besökaren att boka en gratis konsultation */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-cream mb-6">
            Ready to feel stronger?
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            Book a free consultation and let&apos;s talk about your goals.
            No pressure, just a friendly chat about where you want to be.
          </p>
          <Link
            href="/booking"
            className="bg-primary text-cream px-8 py-4 rounded-full font-medium hover:bg-primary-light transition inline-block"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
