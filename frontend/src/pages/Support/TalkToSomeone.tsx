import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircleHeart, ShieldCheck } from 'lucide-react'
function TalkToSomeone() {
  const steps = [
    {
      number: '01',
      title: 'Choose someone you trust',
      text: 'This could be a close friend, family member, teacher, mentor, or anyone who makes you feel comfortable and heard.',
    },
    {
      number: '02',
      title: 'Start small',
      text: 'You do not need to explain everything at once. Simply saying “I have not been feeling like myself lately” can be enough to begin.',
    },
    {
      number: '03',
      title: 'Be honest about how you feel',
      text: 'Try to describe what has been happening and how it has been affecting you. You do not need the perfect words.',
    },
    {
      number: '04',
      title: 'Tell them what you need',
      text: 'Sometimes you may want advice. Other times, you may simply want someone to listen. It is okay to tell them which one you need.',
    },
    {
      number: '05',
      title: 'Give yourself time',
      text: 'One conversation does not have to solve everything. If things continue to feel difficult, consider reaching out again or speaking with a professional.',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#eef8f5] via-[#faf8fc] to-[#fff8f3] text-slate-800">

      {/* =========================================================
          SOFT BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-100/35 blur-3xl" />

        <div className="absolute right-[-120px] top-[30%] h-96 w-96 rounded-full bg-purple-100/25 blur-3xl" />

        <div className="absolute bottom-[-150px] left-[35%] h-96 w-96 rounded-full bg-orange-100/20 blur-3xl" />

      </div>


      {/* =========================================================
          PAGE CONTENT
      ========================================================== */}

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-10">

  <Link
    to="/support"
    className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-x-0.5 hover:bg-white hover:text-teal-700"
  >
    <ArrowLeft
      size={16}
      className="transition-transform duration-200 group-hover:-translate-x-0.5"
    />

    Back to Support
  </Link>

        {/* =======================================================
            SMALL INTRO
        ======================================================== */}

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 shadow-sm">

            <MessageCircleHeart
              size={28}
              strokeWidth={1.6}
            />

          </div>


          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
            Talk to Someone
          </p>


          <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-[42px]">

            You don't have to carry
            <span className="text-teal-600"> everything by yourself.</span>

          </h1>


          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">

            Talking about what you're going through can make difficult
            feelings feel a little less heavy. You don't need to have
            everything figured out before reaching out.

          </p>

        </div>


        {/* =========================================================
            SHORT QUOTE
        ========================================================== */}

        <div className="mx-auto mt-10 max-w-2xl rounded-[26px] border border-white/90 bg-white/60 px-7 py-6 text-center shadow-sm backdrop-blur-sm sm:px-10">

          <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg">

            “You don't need the perfect words.
            <br className="hidden sm:block" />
            You just need a place to begin.”

          </p>

        </div>


        {/* =========================================================
            HOW TO REACH OUT
        ========================================================== */}

        <section className="mt-12">

          <div className="mb-6">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-500">
              A simple place to start
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-800">
              Reaching out doesn't have to be complicated.
            </h2>

          </div>


          {/* =====================================================
              STEPS
          ====================================================== */}

          <div className="space-y-3">

            {steps.map((step) => (

              <div
                key={step.number}
                className="group flex gap-4 rounded-[22px] border border-white/90 bg-white/65 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md sm:gap-6 sm:p-6"
              >

                {/* Number */}

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xs font-bold text-teal-600 transition-transform duration-300 group-hover:scale-105">

                  {step.number}

                </div>


                {/* Content */}

                <div>

                  <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =========================================================
            CONVERSATION STARTERS
        ========================================================== */}

        <section className="mt-12 rounded-[28px] border border-purple-100/80 bg-purple-50/45 p-7 sm:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-500">
            Don't know what to say?
          </p>


          <h2 className="mt-2 text-2xl font-semibold text-slate-800">
            You can start with something simple.
          </h2>


          <div className="mt-6 space-y-3">

            <div className="rounded-2xl bg-white/75 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              “I've been feeling a little overwhelmed lately. Can we talk?”
            </div>

            <div className="rounded-2xl bg-white/75 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              “I don't really know what's wrong, but I haven't been feeling like myself.”
            </div>

            <div className="rounded-2xl bg-white/75 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              “I think I could use some support right now.”
            </div>

          </div>

        </section>


        {/* =========================================================
            FINAL REASSURANCE
        ========================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center">

          <p className="text-lg font-medium leading-7 text-slate-700">
            Asking for support is not a weakness.
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            If someone you trust cannot help, that does not mean you should
            stop reaching out. There are other people and professional
            resources who can listen and help.
          </p>

        </div>


        {/* =========================================================
            PRIVACY
        ========================================================== */}

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-violet-500">

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

export default TalkToSomeone