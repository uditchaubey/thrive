import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Siren,
  ArrowRight,
  BookOpen,
  HeartHandshake,
  MessageCircleHeart,
  Phone,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'

import supportIllustration from '../../assets/support-illustration.png'

function Support() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#edf8f5] via-[#faf8f5] to-[#f5f1fa] text-slate-800">

      {/* =========================================================
          SOFT PAGE-WIDE ATMOSPHERE
          The colours continue from the illustration throughout
          the entire page.
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d9eee8]/50 blur-3xl" />

        <div className="absolute right-[-120px] top-[35%] h-96 w-96 rounded-full bg-[#e9e0f2]/40 blur-3xl" />

        <div className="absolute bottom-[-150px] left-[30%] h-96 w-96 rounded-full bg-[#f5e8d8]/35 blur-3xl" />

      </div>


      {/* =========================================================
          MAIN PAGE
      ========================================================== */}

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-20">


        {/* =======================================================
            IMAGE + TEXT HERO PANEL

            This is intentionally compact.
            The illustration becomes part of the page rather
            than looking like a separate pasted image.
        ======================================================== */}

        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/80 bg-[#f5f1e9]/70 shadow-sm">

          {/* Soft colour wash over the entire image panel */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#e7f4ef]/85 via-[#faf4e9]/35 to-transparent" />

          <div className="relative grid min-h-[300px] sm:min-h-[340px] lg:min-h-[365px] lg:grid-cols-[0.9fr_1.1fr]">


            {/* =================================================
                TEXT SIDE
            ================================================== */}

            <div className="relative z-10 flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-11 lg:px-12">

              {/* Small label */}

              <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-teal-700 shadow-sm backdrop-blur-sm">

                <HeartHandshake
                  size={15}
                  strokeWidth={1.8}
                />

                Support

              </div>


              {/* Heading */}

              <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-[42px]">

                You don't have to handle{' '}

                <span className="text-teal-600">
                  everything alone.
                </span>

              </h1>


              {/* Short description */}

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">

                Choose what feels right for you. We're here to help you find
                information, connect with support, or get urgent help when
                you need it.

              </p>

            </div>


            {/* =================================================
                IMAGE SIDE

                The image blends into the background instead
                of looking like a rectangular image pasted onto
                the page.
            ================================================== */}

            <div className="relative min-h-[230px] overflow-hidden sm:min-h-[270px] lg:min-h-full">

              {/* Image */}

              <img
                src={supportIllustration}
                alt="Two people talking in a calm supportive setting"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />


              {/* Left fade */}

              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f5f1e9]/95 to-transparent sm:w-44 lg:w-52" />


              {/* Bottom fade */}

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f5f1e9]/45 to-transparent" />


              {/* Soft overall tint */}

              <div className="absolute inset-0 bg-[#e9f3ee]/10" />

            </div>

          </div>

        </div>


        {/* =========================================================
            SUPPORT OPTIONS
        ========================================================== */}

        <section className="mt-8">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Choose an option
            </h2>

            <span className="hidden text-xs text-slate-400 sm:block">
              Take your time
            </span>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">


            {/* ===================================================
                INFORMATION & ADVICE
            ==================================================== */}

            <Link
              to="/support/information"
              className="group relative overflow-hidden rounded-[26px] border border-blue-100/80 bg-white/75 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >

              {/* Decorative sticker */}

              <div className="absolute right-5 top-5 flex h-11 w-11 -rotate-6 items-center justify-center rounded-xl bg-blue-50 text-blue-500 shadow-sm transition-all duration-300 group-hover:rotate-0 group-hover:scale-110">

                <BookOpen
                  size={21}
                  strokeWidth={1.7}
                />

              </div>


              {/* Main icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">

                <BookOpen
                  size={27}
                  strokeWidth={1.7}
                />

              </div>


              <h3 className="mt-7 text-xl font-semibold text-slate-800">
                Information & Advice
              </h3>


              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">

                Trusted information and helpful guidance about mental
                wellbeing.

              </p>


              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">

                <span>
                  Explore
                </span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

            </Link>


            {/* ===================================================
                TALK TO SOMEONE
            ==================================================== */}

            <Link
              to="/support/talk"
              className="group relative overflow-hidden rounded-[26px] border border-teal-100/80 bg-white/75 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
            >

              {/* Decorative sticker */}

              <div className="absolute right-5 top-5 flex h-11 w-11 rotate-6 items-center justify-center rounded-xl bg-rose-50 text-rose-500 shadow-sm transition-all duration-300 group-hover:rotate-0 group-hover:scale-110">

                <MessageCircleHeart
                  size={21}
                  strokeWidth={1.7}
                />

              </div>


              {/* Main icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-transform duration-300 group-hover:scale-105">

                <MessageCircleHeart
                  size={27}
                  strokeWidth={1.7}
                />

              </div>


              <h3 className="mt-7 text-xl font-semibold text-slate-800">
                Talk to Someone
              </h3>


              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">

                Learn how to reach out and start a conversation when things
                feel difficult.

              </p>


              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-600">

                <span>
                  Learn more
                </span>

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

            </Link>

          </div>

        </section>


        {/* =========================================================
    URGENT HELP
========================================================= */}

<section className="mt-10 overflow-hidden rounded-[30px] border border-red-100 bg-gradient-to-br from-[#fff7f5] via-[#fffafa] to-[#fff4f1] shadow-sm">

  {/* Top accent */}

  <div className="h-1.5 bg-gradient-to-r from-red-400 via-rose-500 to-orange-400" />

  <div className="relative p-6 sm:p-8 lg:p-9">

    {/* Soft background decoration */}

    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-100/40 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-orange-100/30 blur-3xl" />


    {/* =====================================================
        HEADING
    ====================================================== */}

    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

      <div className="flex gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">

          <ShieldAlert
            size={25}
            strokeWidth={1.8}
          />

        </div>


        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-500">
            Urgent Help
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            Need help right now?
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            If you feel unsafe, are in immediate danger, or feel that you
            may hurt yourself or someone else, please reach out for urgent
            help rather than dealing with it alone.
          </p>

        </div>

      </div>


      {/* Emergency sticker */}

      <div className="flex w-fit items-center gap-2 rounded-full border border-red-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-red-500 shadow-sm">

        <AlertTriangle size={15} />

        Available when you need it

      </div>

    </div>


    {/* =====================================================
        HELP OPTIONS
    ====================================================== */}

    <div className="relative mt-7 grid gap-4 md:grid-cols-2">


      {/* ===================================================
          112
      ==================================================== */}

      <a
        href="tel:112"
        className="group relative overflow-hidden rounded-[24px] border border-red-200 bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg active:translate-y-0 sm:p-6"
      >

        {/* Hover glow */}

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />


        <div className="relative flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-transform duration-300 group-hover:scale-105">

            <Siren
              size={24}
              strokeWidth={1.8}
            />

          </div>


          <div className="min-w-0 flex-1">

            <p className="text-xs font-semibold uppercase tracking-wide text-red-500">
              Emergency Services
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-800">
              Call 112
            </h3>

            <p className="mt-1 text-sm leading-5 text-slate-500">
              For immediate emergencies involving your safety or someone
              else's safety.
            </p>

          </div>


          <ArrowRight
            size={20}
            className="mt-1 shrink-0 text-red-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500"
          />

        </div>


        {/* Number */}

        <div className="relative mt-5 flex items-center justify-between rounded-xl bg-red-50/80 px-4 py-3">

          <span className="text-sm font-medium text-red-700">
            Emergency number
          </span>

          <span className="text-xl font-bold tracking-wide text-red-600">
            112
          </span>

        </div>

      </a>


      {/* ===================================================
          TELE-MANAS
      ==================================================== */}

      <a
        href="tel:14416"
        className="group relative overflow-hidden rounded-[24px] border border-rose-200 bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg active:translate-y-0 sm:p-6"
      >

        {/* Hover glow */}

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-rose-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />


        <div className="relative flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 transition-transform duration-300 group-hover:scale-105">

            <Phone
              size={23}
              strokeWidth={1.8}
            />

          </div>


          <div className="min-w-0 flex-1">

            <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
              Mental Health Support
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-800">
              Call Tele-MANAS
            </h3>

            <p className="mt-1 text-sm leading-5 text-slate-500">
              Free 24×7 tele-mental-health support through India's national
              Tele-MANAS service.
            </p>

          </div>


          <ArrowRight
            size={20}
            className="mt-1 shrink-0 text-rose-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-rose-500"
          />

        </div>


        {/* Number */}

        <div className="relative mt-5 flex items-center justify-between rounded-xl bg-rose-50/80 px-4 py-3">

          <span className="text-sm font-medium text-rose-700">
            24×7 helpline
          </span>

          <span className="text-xl font-bold tracking-wide text-rose-600">
            14416
          </span>

        </div>

      </a>

    </div>


    {/* =====================================================
        BOTTOM NOTE
    ====================================================== */}

    <div className="relative mt-6 flex items-start gap-3 rounded-2xl border border-red-100/80 bg-white/60 px-4 py-3.5">

      <Phone
        size={17}
        className="mt-0.5 shrink-0 text-red-400"
      />

      <p className="text-xs leading-5 text-slate-500">

        Tapping a number on a phone will open your calling interface with
        the number ready to call. You will still need to press the call
        button.

      </p>

    </div>

  </div>

</section>

        {/* =========================================================
            PRIVACY
        ========================================================== */}

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-violet-500">

          <ShieldCheck
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Your wellbeing and privacy matter.
          </span>

        </div>

      </section>

    </main>
  )
}

export default Support