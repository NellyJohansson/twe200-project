//services-sidan med olika PT-paket och priser
import Link from 'next/link';

export default function Services() {
  return (
    //pt-16 för att kompensera för fixerad navbar
    <div className="pt-16">
      {/* Hero Section - introduktion till tjänster */}
      <section className="bg-warm-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-light text-cream mb-6">
            PT Packages
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Choose the package that suits you best. All packages include
            personal follow-up and customization based on your goals.
          </p>
        </div>
      </section>

      {/* Services Grid - grid med tre olika paket */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* responsive grid: 1 kolumn mobil, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Single Session - engångspass */}
            <div className="bg-warm-black/30 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-cream mb-2">Single Session</h3>
              <p className="text-sand text-sm mb-6">Perfect to try it out</p>
              <p className="text-3xl font-light text-cream mb-6">
                $50 <span className="text-sm text-cream/60">/session</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  60 minutes personal training
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized workout plan
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technique guidance
                </li>
              </ul>
              <Link
                href="/booking"
                className="block text-center bg-sand/20 text-cream py-3 rounded-full hover:bg-sand/30 transition"
              >
                Book Session
              </Link>
            </div>

            {/* 5-pack - mest populära paketet med "Popular"-badge */}
            <div className="bg-warm-black/30 rounded-2xl p-8 border-2 border-sand relative">
              {/* Popular-badge positionerad ovanför kortet */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sand text-primary px-4 py-1 rounded-full text-xs font-medium">
                Popular
              </div>
              <h3 className="text-xl font-medium text-cream mb-2">5-Pack</h3>
              <p className="text-sand text-sm mb-6">For those who want to get started</p>
              <p className="text-3xl font-light text-cream mb-6">
                $225 <span className="text-sm text-cream/60">/5 sessions</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 x 60 minutes personal training
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Training program to follow
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Follow-up between sessions
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Save $25
                </li>
              </ul>
              <Link
                href="/booking"
                className="block text-center bg-sand text-primary py-3 rounded-full hover:bg-accent transition font-medium"
              >
                Choose 5-Pack
              </Link>
            </div>

            {/* 10-pack - bäst värde för långsiktig utveckling */}
            <div className="bg-warm-black/30 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-cream mb-2">10-Pack</h3>
              <p className="text-sand text-sm mb-6">For long-term development</p>
              <p className="text-3xl font-light text-cream mb-6">
                $400 <span className="text-sm text-cream/60">/10 sessions</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  10 x 60 minutes personal training
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete training program
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic nutrition guidance
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing messaging support
                </li>
                <li className="flex items-start text-cream/70 text-sm">
                  <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Save $100
                </li>
              </ul>
              <Link
                href="/booking"
                className="block text-center bg-sand/20 text-cream py-3 rounded-full hover:bg-sand/30 transition"
              >
                Choose 10-Pack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Coaching - online träningscoaching för de som vill träna själva */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4">ONLINE</p>
          <h2 className="text-3xl font-light text-cream mb-8">Online Coaching</h2>
          <div className="border border-sand/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-light text-cream mb-4">
                  $100 <span className="text-sm text-cream/60">/month</span>
                </p>
                <p className="text-cream/70 text-sm leading-relaxed">
                  For those who want to train on their own but with personal
                  coaching, follow-up and programs.
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start text-cream/70 text-sm">
                    <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tailored training program
                  </li>
                  <li className="flex items-start text-cream/70 text-sm">
                    <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Weekly check-ins
                  </li>
                  <li className="flex items-start text-cream/70 text-sm">
                    <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Messaging support
                  </li>
                  <li className="flex items-start text-cream/70 text-sm">
                    <svg className="w-5 h-5 text-sand mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Video technique reviews
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/booking"
                className="inline-block bg-primary text-cream px-8 py-3 rounded-full hover:bg-primary-light transition"
              >
                Start Online Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - bildgalleri med träningsbilder */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm tracking-widest mb-4 text-center">TRAINING</p>
          <h2 className="text-3xl font-light text-primary mb-12 text-center">
            Glimpses from my sessions
          </h2>
          {/* grid med bilder, hover-effekt med scale */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden">
              <img src="/images/hyrox.jpeg" alt="Training" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/running.jpeg" alt="Training" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/gym.jpeg" alt="Training" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/gym2.jpeg" alt="Training" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/medals.jpeg" alt="Training" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/images/hyrox2.jpeg" alt="Training" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation - CTA för gratis konsultation */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-cream mb-6">
            Not sure what suits you?
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            Book a free consultation and let&apos;s discuss your goals
            and find the right approach for you.
          </p>
          <Link
            href="/booking"
            className="bg-primary text-cream px-8 py-4 rounded-full font-medium hover:bg-primary-light transition inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
