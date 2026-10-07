import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Brain,
  ChevronDown,
  Clock3,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

function Information() {
  const [openTopic, setOpenTopic] = useState<number | null>(null)

  const topics = [
    {
      title: 'Stress & Academic Pressure',
      shortDescription:
        'Understanding pressure, expectations and feeling overwhelmed.',
      icon: Brain,
      iconStyle: 'bg-purple-50 text-purple-600',
      content: `Academic pressure can come from many different places — exams, assignments, expectations from yourself or others, competition, or simply trying to keep up with everything at once. A certain amount of pressure is normal, but when it begins to affect your sleep, concentration, relationships or everyday mood, it may be a sign that you need to slow down and look after yourself.

      One useful first step is to separate what is within your control from what is not. You may not be able to change an upcoming exam or an assignment deadline, but you can decide how you organise your time, when you take breaks and who you ask for help. Breaking a large task into smaller steps can also make it feel less overwhelming.

      Try not to measure your worth entirely through grades or achievements. Taking a break does not mean you are being unproductive. Talking to a friend, teacher, mentor or someone you trust can also make academic pressure feel more manageable. If stress continues for a long period or starts seriously interfering with everyday life, consider speaking with a qualified mental-health professional.`,
    },

    {
      title: 'Sleep, Rest & Daily Routines',
      shortDescription:
        'How sleep and everyday routines can influence your wellbeing.',
      icon: Moon,
      iconStyle: 'bg-blue-50 text-blue-600',
      content: `Sleep and rest are closely connected with how we feel and function during the day. When you are not getting enough quality sleep, it can become harder to concentrate, regulate emotions, study effectively or deal with everyday stress. At the same time, stress and difficult emotions can make it harder to sleep, creating a cycle that can be frustrating.

      A consistent routine can help. Try to keep roughly similar sleeping and waking times when possible, and give yourself some time to wind down before bed. Reducing stimulating activities immediately before sleeping may also help. Your environment matters too — a quieter, darker and comfortable space can make it easier to rest.

      Rest is not limited to sleep. Your mind also needs moments when you are not studying, working or constantly consuming information. A short walk, listening to music, spending time with someone you care about, or simply taking a few minutes away from your screen can give you space to reset.

      If sleep problems continue for a long time or significantly affect your daily life, consider discussing them with a healthcare professional rather than trying to manage everything alone.`,
    },

    {
      title: 'Understanding Your Feelings',
      shortDescription:
        'Recognising emotions and giving yourself space to understand them.',
      icon: Heart,
      iconStyle: 'bg-rose-50 text-rose-500',
      content: `Everyone experiences difficult emotions. Feeling sad, frustrated, anxious, lonely, angry or overwhelmed from time to time does not automatically mean something is wrong with you. Emotions can be influenced by relationships, academic pressure, changes in life, lack of sleep, uncertainty and many other experiences.

      Sometimes it can help simply to pause and name what you are feeling. Instead of thinking "I feel bad", you might notice that you are worried about something specific, disappointed about an event, lonely, or mentally exhausted. Putting a more precise name to an emotion can make it easier to understand what you might need.

      You do not have to immediately fix every difficult feeling. Give yourself permission to experience it without judging yourself for having it. Writing things down, talking with someone you trust or taking a quiet break can help create some distance from overwhelming thoughts.

      If difficult feelings become intense, continue for a long time, or begin interfering with school, work, relationships or your ability to manage everyday life, reaching out to a qualified professional can be an important next step. Asking for support is not a sign of weakness.`,
    },

    {
      title: 'Building Healthier Habits',
      shortDescription:
        'Small, realistic changes that can support your overall wellbeing.',
      icon: Sparkles,
      iconStyle: 'bg-emerald-50 text-emerald-600',
      content: `Wellbeing does not usually come from changing everything about your life overnight. Small and realistic habits can be easier to maintain and can gradually create a stronger foundation for your mental and physical wellbeing.

      Start with something manageable. This could mean getting outside for a short walk, drinking enough water, making time for a proper meal, keeping a more regular sleep routine, spending some time away from your phone, or making space for an activity that you genuinely enjoy. The goal is not perfection — it is consistency and finding what works for you.

      Social connection is another important part of wellbeing. Spending time with people you trust, checking in with a friend or simply having a conversation can help reduce feelings of isolation. Likewise, giving yourself time to rest is a healthy habit rather than something you need to earn.

      Be patient with yourself when routines don't go perfectly. Missing a day does not erase your progress. If you are struggling to maintain everyday routines because of persistent emotional difficulties, consider reaching out to someone you trust or a qualified professional for additional support.`,
    },
  ]

  const resources = [
    {
      title: 'WHO — Adolescent Mental Health',
      description:
        'Evidence-based information about mental health, common challenges and ways wellbeing can be supported.',
      source: 'World Health Organization',
      href: 'https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health',
    },
    {
      title: 'UNICEF India — Mental Wellbeing',
      description:
        'Information and guidance focused on the mental wellbeing of young people.',
      source: 'UNICEF India',
      href: 'https://www.unicef.org/india/mental-well-being-young-people',
    },
    {
      title: 'Tele-MANAS',
      description:
        'Information about India’s national tele-mental-health support service.',
      source: 'Government of India',
      href: 'https://www.dghs.mohfw.gov.in/national-mental-health-programme.php',
    },
  ]

  const toggleTopic = (index: number) => {
    setOpenTopic(openTopic === index ? null : index)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#eef8f4] via-[#faf8fc] to-[#fff8f3] text-slate-800">

      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-100/35 blur-3xl" />

        <div className="absolute right-[-140px] top-[25%] h-[420px] w-[420px] rounded-full bg-purple-100/30 blur-3xl" />

        <div className="absolute bottom-[-160px] left-[30%] h-96 w-96 rounded-full bg-orange-100/25 blur-3xl" />

      </div>


      {/* =========================================================
          PAGE CONTENT
      ========================================================== */}

      <section className="mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-8 sm:pt-10 lg:px-10">


        {/* =======================================================
            BACK TO SUPPORT
        ======================================================== */}

        <Link
          to="/support"
          className="group inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-x-0.5 hover:bg-white hover:text-teal-700"
        >

          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />

          Back to Support

        </Link>


        {/* =========================================================
            COMPACT HEADER
        ========================================================== */}

        <div className="mt-7 rounded-[30px] border border-white/80 bg-white/55 px-7 py-8 shadow-sm backdrop-blur-sm sm:px-10">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
              <BookOpen
                size={24}
                strokeWidth={1.7}
              />
            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
                Information & Advice
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Find something useful.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Explore a few common wellbeing topics below. Open a topic when
                you want to learn more — no extra pages needed.
              </p>

            </div>

          </div>

        </div>


        {/* =========================================================
            TOPICS / ACCORDION
        ========================================================== */}

        <section className="mt-10">

          <div className="mb-5">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-500">
              Explore topics
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-slate-800">
              Start wherever feels relevant.
            </h2>

          </div>


          <div className="space-y-3">

            {topics.map((topic, index) => {

              const Icon = topic.icon
              const isOpen = openTopic === index

              return (
                <div
                  key={topic.title}
                  className={`overflow-hidden rounded-[24px] border bg-white/75 shadow-sm backdrop-blur-sm transition-all duration-300 ${
                    isOpen
                      ? 'border-teal-200/80 bg-white/90 shadow-md'
                      : 'border-white/90 hover:border-teal-100 hover:bg-white/85'
                  }`}
                >

                  {/* =================================================
                      ACCORDION HEADER
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => toggleTopic(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >

                    {/* Icon */}

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${topic.iconStyle} transition-transform duration-300 ${
                        isOpen ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>


                    {/* Title */}

                    <div className="min-w-0 flex-1">

                      <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                        {topic.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        {topic.shortDescription}
                      </p>

                    </div>


                    {/* Arrow */}

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-teal-50 text-teal-600'
                          : 'group-hover:bg-teal-50 group-hover:text-teal-600'
                      }`}
                    >

                      <ChevronDown
                        size={19}
                        strokeWidth={1.8}
                      />

                    </div>

                  </button>


                  {/* =================================================
                      ACCORDION CONTENT
                  ================================================== */}

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-slate-100 px-5 pb-7 pt-6 sm:px-6">

                        <div className="max-w-3xl">

                          <p className="whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-7">
                            {topic.content}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </section>


        {/* =========================================================
            TRUSTED RESOURCES
        ========================================================== */}

        <section className="mt-12">

          <div className="mb-5">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-500">
              Go a little deeper
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-slate-800">
              Trusted information
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Want to explore beyond Thrive? These organisations provide
              evidence-based information and additional support.
            </p>

          </div>


          <div className="space-y-3">

            {resources.map((resource) => (

              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[22px] border border-white/90 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal-600">

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.7}
                  />

                </div>


                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="text-sm font-semibold text-slate-800 sm:text-base">
                      {resource.title}
                    </h3>

                    <span className="rounded-full bg-teal-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-teal-700">
                      {resource.source}
                    </span>

                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    {resource.description}
                  </p>

                </div>

                <ArrowUpRight
                  size={18}
                  className="hidden shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-600 sm:block"
                />

              </a>

            ))}

          </div>

        </section>


        {/* =========================================================
            SMALL SUPPORT NOTE
        ========================================================== */}

        <div className="mt-10 rounded-[24px] border border-purple-100/80 bg-purple-50/45 p-6">

          <div className="flex gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-purple-500 shadow-sm">

              <Clock3
                size={21}
                strokeWidth={1.7}
              />

            </div>


            <div>

              <h3 className="font-semibold text-slate-800">
                Take things at your own pace.
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                The information here is intended to help you understand
                wellbeing topics. It is not a diagnosis or a substitute for
                professional care.
              </p>

            </div>

          </div>

        </div>


        {/* =========================================================
            PRIVACY
        ========================================================== */}

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-violet-500">

          <ShieldCheck
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Thrive provides information, not a diagnosis.
          </span>

        </div>

      </section>

    </main>
  )
}

export default Information