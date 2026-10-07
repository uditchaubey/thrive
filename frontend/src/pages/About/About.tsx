import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronDown,
  Heart,
  Leaf,
  LockKeyhole,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Sprout,
  UserRound,
} from 'lucide-react'

function About() {
  const [openPrinciple, setOpenPrinciple] = useState<number | null>(null)

  const features = [
    {
      icon: Brain,
      title: 'Check In',
      description:
        "Take a moment to reflect on how you're feeling and what's affecting your wellbeing.",
      status: 'Coming Soon',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      path: '',
    },
    {
      icon: BarChart3,
      title: 'Understand Your Wellbeing',
      description:
        'Recognize patterns in your wellbeing over time through simple and meaningful trends.',
      status: 'Coming Soon',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      path: '',
    },
    {
      icon: Sprout,
      title: 'Helpful Resources',
      description:
        'Explore useful material covering stress, sleep, academic pressure, healthy habits and more.',
      status: 'Available Now',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      path: '/resources',
    },
    {
      icon: MessageCircleHeart,
      title: 'Find Support',
      description:
        'Learn where to turn for support and discover when talking to someone may be helpful.',
      status: 'Available Now',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      path: '/support',
    },
  ]

  const principles = [
    {
      icon: LockKeyhole,
      title: 'Privacy First',
      shortText: 'Your wellbeing information deserves careful handling.',
      details:
        'Thrive is designed with privacy in mind. Wellbeing information is sensitive, so the platform aims to collect only what is necessary and communicate clearly about how information is used.',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Leaf,
      title: 'Simple & Non-Judgmental',
      shortText: 'Wellbeing support should feel approachable.',
      details:
        'Thrive uses simple language and a calm interface so that students can explore their wellbeing without feeling judged, overwhelmed or intimidated.',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      icon: UserRound,
      title: 'Human Support Matters',
      shortText: 'Technology should support people, not replace them.',
      details:
        'Thrive can help someone recognize that they may need support, but technology cannot replace meaningful human connection or qualified professional care.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-teal-50/20 to-white text-slate-800">

      {/* =========================================================
          ABOUT HERO
      ========================================================== */}

      <section className="relative border-b border-slate-100 bg-white">

        <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-purple-100/25 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/70 px-4 py-2 text-sm font-medium text-teal-700">
            <Sparkles size={16} />
            About Thrive
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-[58px]">
            A little support can make a{' '}
            <span className="text-teal-600">big difference.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Thrive is a wellbeing platform designed for students and young
            people to pause, reflect, discover helpful resources, and find
            support when they need it.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">

            <div className="mx-auto mb-5 h-px w-16 bg-teal-200" />

            <p className="text-base font-medium italic leading-7 text-slate-500 sm:text-lg">
              “Taking care of your wellbeing starts with giving yourself
              permission to pause.”
            </p>

            <div className="mx-auto mt-5 h-px w-16 bg-teal-200" />

          </div>

          <div className="mt-9 flex items-center justify-center gap-2 text-sm text-violet-500">
            <ShieldCheck size={19} strokeWidth={1.8} />
            <span>Built with privacy and wellbeing in mind.</span>
          </div>

        </div>
      </section>


      {/* =========================================================
          WHY THRIVE
      ========================================================== */}

      <section className="border-b border-slate-100 bg-white/70">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              Why Thrive?
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Sometimes the hardest part is knowing what to do next.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Student life can bring academic pressure, uncertainty, social
              challenges and everyday stress. Thrive aims to make the first
              step toward understanding your wellbeing feel a little easier.
            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: '📚',
                title: 'Academic Pressure',
                text: 'Deadlines, exams and expectations can sometimes feel overwhelming.',
              },
              {
                icon: '🌧️',
                title: 'Everyday Stress',
                text: 'Balancing studies, relationships and daily life can be difficult.',
              },
              {
                icon: '💭',
                title: 'Uncertainty',
                text: "It isn't always easy to understand why you're feeling a certain way.",
              },
              {
                icon: '🤝',
                title: 'Finding Help',
                text: 'Knowing where to turn for trustworthy support can be challenging.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHAT THRIVE OFFERS
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              What Thrive offers
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Support that grows with you.
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Some features are being developed for future releases, while
            resources and support are available as part of our first release.
          </p>

        </div>


        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon

            const cardContent = (
              <>
                {/* Decorative background */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-50 transition duration-300 group-hover:scale-150" />

                <div className="relative">

                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} ${feature.iconColor}`}
                    >
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        feature.status === 'Available Now'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-purple-50 text-purple-600'
                      }`}
                    >
                      {feature.status}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-slate-800">
                    {feature.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>


                  {/* Bottom action */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-medium ${
                      feature.status === 'Available Now'
                        ? 'text-teal-600'
                        : 'text-slate-400'
                    }`}
                  >

                    <span>
                      {feature.status === 'Available Now'
                        ? 'Explore'
                        : 'Coming Soon'}
                    </span>

                    {feature.status === 'Available Now' && (
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}

                  </div>

                </div>
              </>
            )

            {/* =================================================
                AVAILABLE FEATURES = CLICKABLE
                COMING SOON FEATURES = NOT CLICKABLE
            ================================================== */}

            if (feature.status === 'Available Now') {
              return (
                <Link
                  key={feature.title}
                  to={feature.path}
                  className="group relative block overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                >
                  {cardContent}
                </Link>
              )
            }

            return (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                {cardContent}
              </div>
            )
          })}

        </div>

      </section>


      {/* =========================================================
          OUR APPROACH
      ========================================================== */}

      <section className="bg-gradient-to-br from-teal-50/70 via-white to-purple-50/50">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
              Our approach
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
              Built for awareness, not diagnosis.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Thrive is designed as an early wellbeing awareness and support
              platform. It is not intended to diagnose mental health
              conditions or replace qualified professional care.
            </p>

          </div>


          {/* Accordion */}

          <div className="mx-auto mt-14 max-w-4xl space-y-4">

            {principles.map((principle, index) => {
              const Icon = principle.icon
              const isOpen = openPrinciple === index

              return (
                <div
                  key={principle.title}
                  className="overflow-hidden rounded-3xl border border-white bg-white/90 shadow-sm"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenPrinciple(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-slate-50 sm:px-7"
                    aria-expanded={isOpen}
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${principle.bg} ${principle.color}`}
                      >
                        <Icon size={23} strokeWidth={1.7} />
                      </div>

                      <div>

                        <h3 className="font-semibold text-slate-800">
                          {principle.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {principle.shortText}
                        </p>

                      </div>

                    </div>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />

                  </button>


                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600 sm:px-7">
                        {principle.details}
                      </p>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW THRIVE WORKS
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            How Thrive works
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
            Three steps toward greater awareness.
          </h2>

        </div>


        <div className="relative mt-16 grid gap-10 md:grid-cols-3">

          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-teal-100 via-purple-100 to-blue-100 md:block" />

          {[
            {
              number: '01',
              icon: Brain,
              title: 'Check In',
              description:
                "Reflect on how you're feeling and what's happening in your everyday life.",
              color: 'bg-purple-50 text-purple-500',
            },
            {
              number: '02',
              icon: BarChart3,
              title: 'Understand',
              description:
                'Over time, identify patterns and explore resources that may be useful.',
              color: 'bg-teal-50 text-teal-600',
            },
            {
              number: '03',
              icon: UserRound,
              title: 'Connect',
              description:
                'Find appropriate resources and human support when you feel you need it.',
              color: 'bg-blue-50 text-blue-500',
            },
          ].map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center"
              >

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${step.color} border-8 border-white shadow-md`}
                >
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <span className="mt-5 text-xs font-bold tracking-[0.2em] text-slate-400">
                  {step.number}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-slate-800">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

              </div>
            )
          })}

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-teal-600 to-teal-700 px-7 py-14 text-center shadow-xl sm:px-12 sm:py-16">

          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

          <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
              <Heart size={27} fill="currentColor" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Take the first step toward understanding your wellbeing.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-teal-50 sm:text-lg">
              Explore helpful material or find support whenever you're ready.
              You don't have to figure everything out alone.
            </p>

            <p className="mt-5 text-sm font-medium text-teal-100">
              Explore the dedicated Resources and Support sections from the
              navigation above.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default About