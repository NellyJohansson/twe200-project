//about-sidan med information om Alma Arvidsson
import Link from 'next/link';

export default function About() {
  return (
    //pt-16 för att kompensera för fixerad navbar
    <div className="pt-16">
      {/* Hero Section - introduktion med porträttbild */}
      <section className="bg-warm-black py-20">
        <div className="max-w-5xl mx-auto px-10 sm:px-12 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sand text-sm tracking-widest mb-4">ABOUT ME</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight whitespace-nowrap">
                Hi, I&apos;m Alma Arvidsson
              </h1>
              <p className="text-cream/70 text-xl leading-relaxed">
                A driven person who combines physical training with a
                holistic approach to health, where body and mind are connected.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden w-64 sm:w-80 md:w-96 h-80 sm:h-96 md:h-[28rem]">
                <img
                  src="/images/alma.jpeg"
                  alt="Alma portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - visar Alma i aktion med video och bilder */}
      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-10 sm:px-12 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4 text-center">SEE ME IN ACTION</p>
          <h2 className="text-3xl font-light text-cream mb-8 text-center">
            Training is my passion
          </h2>
          {/* grid med 3 kolumner: bild-video-bild layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* vänster bild */}
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[250px] sm:max-w-xs mx-auto">
              <img
                src="/images/hyrox2.jpeg"
                alt="Alma training"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* video i mitten med controls för att användaren kan spela/pausa */}
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[250px] sm:max-w-xs mx-auto">
              <video
                controls
                className="w-full aspect-[3/4] object-cover"
                poster="/images/hyrox3.jpeg"
              >
                <source src="/images/marathon.MOV" type="video/quicktime" />
                <source src="/images/marathon.MOV" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>

            {/* höger bild */}
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[250px] sm:max-w-xs mx-auto">
              <img
                src="/images/running2.jpeg"
                alt="Alma running"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MY BACKGROUND - Almas bakgrund med psykologi och elitidrott */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-6xl mx-auto px-10 sm:px-12 lg:px-8">
          {/* grid med text och bild sida vid sida */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sand text-sm tracking-widest mb-4">MY BACKGROUND</p>
              <h2 className="text-3xl font-light text-cream mb-8">
                More than just a trainer
              </h2>
              <div className="space-y-6 text-cream/80 leading-relaxed">
                <p>
                  I am currently studying to become a personal trainer, graduating in spring 2026.
                  With a background in both elite athletics and psychology, I can offer
                  more than just traditional coaching.
                </p>
                <p>
                  My bachelor&apos;s degree in psychology gives me tools to help you understand
                  the connection between training and mental health - how movement can reduce stress,
                  create structure, build self-esteem and give a sense of control in everyday life.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden max-w-[250px] sm:max-w-xs mx-auto lg:ml-16">
              <img
                src="/images/running.jpeg"
                alt="Alma running"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS - visar Almas tävlingsmeriter */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-8">
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

      {/* WHAT I FOCUS ON - olika träningsområden som Alma fokuserar på */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-6xl mx-auto px-10 sm:px-12 lg:px-8">
          <p className="text-sand text-sm tracking-widest mb-4">WHAT I FOCUS ON</p>
          <h2 className="text-3xl font-light text-cream mb-12">My Areas</h2>
          {/* fyra kort i 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-sand/20 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-cream mb-4">Strength Training</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Build strength, muscle and functional body control through
                progressive training adapted to your level.
              </p>
            </div>
            <div className="border border-sand/20 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-cream mb-4">Conditioning</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Running, intervals and endurance to build a strong
                cardiovascular base.
              </p>
            </div>
            <div className="border border-sand/20 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-cream mb-4">Performance Training</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                For those who want to become strong, fast and mentally balanced -
                whether you compete or just want to perform better.
              </p>
            </div>
            <div className="border border-sand/20 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-cream mb-4">Training for Mental Health</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                How movement, routines and goals can strengthen mental well-being
                and provide structure in everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION - Almas utbildning och meriter */}
      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-10 sm:px-12 lg:px-8">
          {/* grid med text och bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sand text-sm tracking-widest mb-4">EDUCATION</p>
              <h2 className="text-3xl font-light text-cream mb-8">Qualifications</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-sand/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cream font-medium">Bachelor&apos;s Degree in Psychology</h3>
                    <p className="text-cream/60 text-sm">Understanding of mental health and behavior</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-sand/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cream font-medium">Personal Trainer</h3>
                    <p className="text-cream/60 text-sm">Graduating spring 2026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-sand/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cream font-medium">Competitive Athlete</h3>
                    <p className="text-cream/60 text-sm">HYROX and marathon with podium finishes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden max-w-[250px] sm:max-w-xs mx-auto lg:ml-16">
              <img
                src="/images/graduation.jpg"
                alt="Alma graduation"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - uppmanar besökare att boka konsultation */}
      <section className="py-20 bg-warm-black">
        <div className="max-w-3xl mx-auto px-10 sm:px-12 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-cream mb-6">
            Let&apos;s start together
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            I&apos;ll help you find a training program that suits you -
            whether you&apos;re a beginner or experienced.
          </p>
          <Link
            href="/booking"
            className="bg-primary text-cream px-8 py-4 rounded-full font-medium hover:bg-primary-light transition inline-block"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
