import {
  BarChart3,
  Headphones,
  Heart,
  ShieldCheck,
} from 'lucide-react'

function FeatureHighlights() {
  return (
    <section className="mx-6 mb-12 lg:mx-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-100 bg-white/80 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Private & Secure */}
          <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5 lg:border-b-0 lg:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
              <ShieldCheck size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="font-medium text-slate-800">
                Private & Secure
              </h3>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                Your wellbeing data stays protected.
              </p>
            </div>
          </div>

          {/* Track & Reflect */}
          <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5 md:border-r lg:border-b-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-500">
              <BarChart3 size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="font-medium text-slate-800">
                Track & Reflect
              </h3>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                Understand your wellbeing patterns.
              </p>
            </div>
          </div>

          {/* Personalized Support */}
          <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5 lg:border-b-0 lg:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-400">
              <Heart size={23} fill="currentColor" strokeWidth={1.5} />
            </div>

            <div>
              <h3 className="font-medium text-slate-800">
                Personalized Support
              </h3>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                Find resources suited to your needs.
              </p>
            </div>
          </div>

          {/* Talk to a Counselor */}
          <div className="flex items-center gap-4 px-6 py-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">
              <Headphones size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="font-medium text-slate-800">
                Talk to a Counselor
              </h3>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                Find professional support when needed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureHighlights