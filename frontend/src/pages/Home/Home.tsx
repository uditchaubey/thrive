import {
  ArrowRight,
  BarChart3,
  Brain,
  Leaf,
  ShieldCheck,
  UserRound,
  Smile,
} from 'lucide-react'

import heroImage from '../../assets/images/thrive-hero.png'
import FeatureHighlights from '../../components/FeatureHighlights/FeatureHighlights'
function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 pb-14 pt-6 sm:pb-16 sm:pt-8 lg:px-10 lg:pb-18 lg:pt-8">        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-2 xl:gap-6">

          {/* LEFT */}
          <div className="relative z-10">
           <h1 className="max-w-2xl text-5xl font-bold leading-[1.06] tracking-tight text-slate-800 sm:text-6xl lg:text-[56px] xl:text-[66px]">
              Your wellbeing
              <br />
              <span className="text-teal-600">matters.</span>
            </h1>

            <p className="mt-6 max-w-[590px] text-lg leading-8 text-slate-600 sm:text-xl">              A safe and private space for students to check in,
              understand their feelings, and get the support they need.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <button
                type="button"
                className="group flex min-h-[78px] items-center justify-between rounded-2xl bg-teal-600 px-6 py-4 text-left text-white shadow-sm transition hover:bg-teal-700 w-full sm:w-[310px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Smile size={23} />
                  </div>

                  <div>
                    <div className="font-medium">
                      Start Your Check-In
                    </div>

                    <div className="mt-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs">
                      Coming Soon
                    </div>
                  </div>
                </div>

                <ArrowRight
                  size={22}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="group flex min-h-[78px] items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 text-left text-slate-700 shadow-sm transition hover:border-teal-200 hover:bg-teal-50/30 w-full sm:w-[310px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-500">
                    <BarChart3 size={22} />
                  </div>

                  <div>
                    <div className="font-medium">
                      Explore My Wellbeing
                    </div>

                    <div className="mt-1 inline-block rounded-full bg-violet-50 px-2.5 py-0.5 text-xs text-violet-500">
                      Coming Soon
                    </div>
                  </div>
                </div>

                <ArrowRight
                  size={22}
                  className="text-slate-500 transition group-hover:translate-x-1"
                />
              </button>

            </div>

            {/* Privacy */}
            <div className="mt-8 flex items-center gap-3 text-sm text-violet-500 sm:text-[15px]">              <ShieldCheck size={23} strokeWidth={1.8} />

              <span>
                Your privacy is important. Your data is secure and confidential.
              </span>
            </div>
          </div>

          {/* RIGHT / ILLUSTRATION */}
            <div className="relative mx-auto mt-2 flex min-h-[500px] w-full max-w-[720px] items-center justify-center lg:mt-0 lg:min-h-[620px]">
            {/* Soft background glow */}
            <div className="absolute h-[390px] w-[390px] rounded-full bg-blue-50/80 blur-[2px] sm:h-[480px] sm:w-[480px] lg:h-[530px] lg:w-[530px]" />

            {/* Illustration */}
            <img
              src={heroImage}
              alt="Student practicing mindfulness"
              className="relative z-10 w-[420px] max-w-[92%] object-contain sm:w-[500px] lg:w-[570px] xl:w-[650px]"
            />

            {/* Bubble 1 */}
            <div className="absolute left-[1%] top-[4%] z-20 hidden items-center gap-3 rounded-full bg-purple-50/95 px-4 py-2.5 text-purple-900 shadow-sm sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                <Brain size={20} />
              </div>

              <span className="fonttext-sm font-medium">
                Understand
                <br />
                your feelings
              </span>
            </div>

            {/* Bubble 2 */}
            <div className="absolute right-[1%] top-[7%] z-20 hidden items-center gap-3 rounded-full bg-emerald-50/95 px-4 py-2.5 text-emerald-900 shadow-sm sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <BarChart3 size={20} />
              </div>

              <span className="fonttext-sm font-medium">
                Track your
                <br />
                wellbeing
              </span>
            </div>

            {/* Bubble 3 */}
            <div className="absolute bottom-[18%] left-[-1%] z-20 hidden items-center gap-3 rounded-full bg-green-50/95 px-4 py-2.5  text-green-900 shadow-sm sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Leaf size={20} />
              </div>

              <span className="text-sm font-medium">
                Build healthy
                <br />
                habits
              </span>
            </div>

            {/* Bubble 4 */}
            <div className="absolute bottom-[16%] right-[-2%] z-20 hidden items-center gap-3 rounded-full bg-blue-50/95 px-4 py-2.5 text-blue-900 shadow-sm sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <UserRound size={20} />
              </div>

              <span className="text-sm font-medium">
                Connect with
                <br />
                support
              </span>
            </div>
          </div>
        </div>
      </section>

     
      <FeatureHighlights/>
    </main>
  )
}

export default Home