import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  HeartHandshake,
  Leaf,
  Lightbulb,
  ListChecks,
  MessageCircleHeart,
  Moon,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wind,
  Video,
  AlertCircle,
  Smartphone,
  GraduationCap,
  WalletCards,
  Home,
} from 'lucide-react'

type AccordionItem = {
  title: string
  content: string
}

function StressAndOverwhelm() {
  const [openStrategy, setOpenStrategy] = useState<number | null>(null)
  const [openScenario, setOpenScenario] = useState<number | null>(null)

  const strategies: AccordionItem[] = [
    {
      title: 'Break overwhelming tasks into smaller steps',
      content:
        'Instead of holding the whole task in your head, identify the very next physical action. “Finish my project” can become “open the document and write the first paragraph.” Smaller actions can make a task feel more approachable and give you a clear place to begin.',
    },
    {
      title: 'Prioritise what actually needs attention',
      content:
        'When everything feels urgent, choose the top one to three things that genuinely need attention first. You can use a simple urgent-versus-important list, or simply mark your most important task for today. Not everything has to be solved at the same time.',
    },
    {
      title: 'Plan your time realistically',
      content:
        'A weekly planner, time-blocking or short focus sessions can make your workload more predictable. One simple approach is 25 minutes of focused work followed by a 5-minute break. Adjust the timing to what works for you rather than treating one method as a rule.',
    },
    {
      title: 'Take genuine breaks',
      content:
        'A break is more useful when it actually gives your brain a change of pace. Try stretching, walking, getting some fresh air, drinking water or simply stepping away from your desk. You do not have to wait until you are completely exhausted before taking a pause.',
    },
    {
      title: 'Protect your sleep and rest',
      content:
        'Try to keep your sleep and wake times reasonably consistent and give yourself a calmer period before bed. During stressful academic periods, sacrificing sleep can make studying feel harder rather than easier. Rest is part of being productive, not the opposite of it.',
    },
    {
      title: 'Move your body',
      content:
        'Movement does not have to mean a hard workout. Walking, stretching, dancing, sport, yoga or another activity you enjoy can give you a useful change of environment and help you step away from a stressful thought loop.',
    },
    {
      title: 'Try slow breathing',
      content:
        'Sit or stand comfortably and slow your breathing down. You could try breathing in for 4 counts, holding for 4, and breathing out for 6. Repeat several times without forcing the breath. If a breathing exercise makes you uncomfortable, stop and return to normal breathing.',
    },
    {
      title: 'Use grounding when your thoughts are racing',
      content:
        'Bring your attention back to what is happening around you. Try noticing 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell and 1 thing you can taste. The goal is not to make every thought disappear; it is simply to reconnect with the present moment.',
    },
    {
      title: 'Practise mindfulness',
      content:
        'Mindfulness means paying attention to the present moment with less judgement. You might practise through a short guided meditation, mindful walking, eating slowly or noticing your breathing for a few minutes. It can be more useful as a small regular habit than something you only try when everything feels difficult.',
    },
    {
      title: 'Try a relaxation exercise',
      content:
        'Progressive muscle relaxation is one option. Starting with one area of your body, gently tense the muscles for a few seconds and then release them. Move through different muscle groups. This can be particularly useful when stress shows up physically as tension.',
    },
    {
      title: 'Reduce unnecessary digital distractions',
      content:
        'Consider muting notifications, using Do Not Disturb during study or sleep, or temporarily leaving stressful group chats. You do not need to disappear from the internet. The goal is simply to create periods where your attention is not constantly being pulled somewhere else.',
    },
    {
      title: 'Talk to someone',
      content:
        'You do not need to prepare a perfect explanation. You can simply say, “I have been feeling really stressed lately.” A friend, family member, mentor, teacher, counsellor or another trusted person can help you feel less alone and may help you see the situation more clearly.',
    },
    {
      title: 'Write things down',
      content:
        'If your thoughts feel tangled, put them somewhere outside your head. Try writing “What is stressing me today?” followed by “What is actually within my control?” You can also write freely for a few minutes without worrying about grammar or structure.',
    },
    {
      title: 'Keep a few simple routines',
      content:
        'When everything feels chaotic, a few predictable anchors can help: a regular wake time, meals, a short study block, movement or checking in with someone. You do not need a perfect routine. A few reliable habits can be enough to create some structure.',
    },
    {
      title: 'Stay connected',
      content:
        'Stress can make you want to isolate yourself, especially during exams. Try to maintain small points of connection: a quick call, a meal with someone, a short walk with a friend or a simple message. Support does not have to mean a long emotional conversation.',
    },
    {
      title: 'Set realistic expectations',
      content:
        'Ask yourself what “good enough” looks like for this particular task. You do not need to give every assignment, conversation or decision the maximum possible amount of energy. Adjusting expectations can be a practical way of making room for what genuinely matters.',
    },
    {
      title: 'Ask for academic help early',
      content:
        'If you are falling behind, consider contacting a teacher, professor, tutor, teaching assistant or academic support service sooner rather than later. Asking for clarification is not a sign that you are incapable. It can prevent a small academic problem from becoming a much larger source of stress.',
    },
    {
      title: 'Set boundaries when your plate is full',
      content:
        'It is okay to decline an additional commitment when you genuinely do not have the capacity. A simple “I cannot take that on right now” can be enough. You do not always need a long explanation for protecting your time and wellbeing.',
    },
    {
      title: 'Recognise when rest is more useful than pushing harder',
      content:
        'Sometimes another hour at the desk is not actually another hour of learning. Ask yourself: “Am I absorbing anything right now, or am I just sitting here feeling stressed?” If your concentration has completely dropped, a genuine break or sleep may be more useful than continuing to push.',
    },
  ]

  const scenarios: AccordionItem[] = [
    {
      title: 'Exam stress',
      content:
        'Break revision into smaller daily targets rather than one enormous study block. Practise past papers to become familiar with the format, and use slow breathing or grounding if anxiety rises. One difficult moment during an exam does not erase everything you prepared beforehand.',
    },
    {
      title: 'Too many assignments and deadlines',
      content:
        'Write every deadline in one place. Decide what genuinely needs to be excellent, what needs to be completed adequately, and what can be postponed. If a deadline genuinely cannot be met, contact the relevant teacher or institution early and ask what options are available.',
    },
    {
      title: 'Procrastination',
      content:
        'Instead of asking yourself to “finish the assignment,” ask yourself to open the document, read the question or write one sentence. Short focus sessions can make starting easier. Try to understand what is making the task difficult instead of immediately judging yourself as lazy.',
    },
    {
      title: 'Fear of failure',
      content:
        'A result is information about one outcome, not a complete description of your ability or worth. Try separating process goals from outcome goals: focus on what you can control today, such as preparing, practising or asking for help.',
    },
    {
      title: 'Pressure from parents or family',
      content:
        'If it feels safe to do so, explain how the pressure is affecting you rather than only discussing the result you are expected to achieve. A trusted adult, counsellor or mentor can sometimes help if having the conversation alone feels difficult.',
    },
    {
      title: 'Comparing yourself with classmates',
      content:
        'You usually see your own struggles in full detail while seeing only a small part of someone else’s life. Notice when comparison is increasing your stress and consider stepping away from triggering social media or group chats. Compare your current progress with your own previous progress instead.',
    },
    {
      title: 'Social pressure',
      content:
        'You are allowed to say no to plans, activities or conversations that are adding unnecessary pressure. Healthy friendships should have room for boundaries. If a social environment consistently leaves you feeling worse, it may be worth talking to someone you trust about it.',
    },
    {
      title: 'Relationship problems affecting studies',
      content:
        'It is normal for relationship difficulties to affect concentration. Give yourself some space to process what you are feeling rather than expecting yourself to instantly switch it off. A trusted friend, mentor or counsellor can provide a place to talk without having to carry everything alone.',
    },
    {
      title: 'Financial stress',
      content:
        'Look into scholarships, hardship funds, fee support or other services offered by your institution. If possible, separate the things you can influence from the things you cannot. Financial stress is not a personal failure, and asking for practical help can be an important step.',
    },
    {
      title: 'Feeling behind everyone else',
      content:
        'There is no single timeline that everyone has to follow. People change courses, take breaks, graduate at different times and discover different paths. Bring your attention back to the next step that is meaningful for you rather than trying to catch up to someone else’s timeline.',
    },
    {
      title: 'Too many responsibilities',
      content:
        'Put every responsibility onto one list rather than carrying it all mentally. Then ask what can be delegated, postponed, reduced or dropped. If everything feels equally important, another person can sometimes help you decide what genuinely needs attention first.',
    },
    {
      title: 'Starting college or university',
      content:
        'Adjustment can take time. Try building one or two new connections rather than expecting yourself to immediately feel at home. Keeping some familiar routines and staying connected with people from home can help while you gradually create a new support network.',
    },
    {
      title: 'Homesickness',
      content:
        'Missing home does not mean you are failing to adapt. Keep a few familiar routines, schedule calls with people you care about and give yourself opportunities to become part of your new environment. Both staying connected to home and building new connections can matter.',
    },
    {
      title: 'Balancing academics and personal life',
      content:
        'Schedule personal time as deliberately as you schedule study time. Look honestly at where your time is going and identify areas that can be adjusted. Balance changes from week to week; it does not have to look perfect every day.',
    },
  ]

  const quickSteps = [
    'Pause. You do not have to solve everything right now.',
    'Slow your breathing for a few moments.',
    'Ask: “What is the one thing that actually needs to happen next?”',
    'Temporarily put everything else aside.',
    'Drink some water or change your physical environment.',
    'Notice a few things around you to reconnect with the present.',
    'Message or speak to someone you trust if you can.',
    'Choose one small action you can take in the next five minutes.',
  ]

  const effects = [
    {
      icon: Brain,
      title: 'Thoughts',
      text: 'Racing thoughts, repetitive thinking, difficulty focusing, indecision and harsh self-talk can become more noticeable.',
    },
    {
      icon: HeartHandshake,
      title: 'Emotions',
      text: 'You might feel irritable, tearful, restless, worried, emotionally flat or simply “on edge.”',
    },
    {
      icon: Wind,
      title: 'Body',
      text: 'Stress can show up through muscle tension, headaches, stomach discomfort, fatigue, sweating or a faster heartbeat.',
    },
    {
      icon: Moon,
      title: 'Sleep',
      text: 'Racing thoughts can make it difficult to fall asleep, while ongoing stress can also disrupt sleep patterns.',
    },
    {
      icon: GraduationCap,
      title: 'Concentration',
      text: 'Stress can make reading, remembering information or making decisions feel harder than usual.',
    },
    {
      icon: Users,
      title: 'Relationships',
      text: 'You may withdraw, become more irritable or cancel plans when your mental bandwidth is low.',
    },
  ]

  const causes = [
    {
      icon: GraduationCap,
      title: 'Academic pressure',
      text: 'Exams, deadlines, competitive grading, entrance exams, career decisions and fear of disappointing others.',
    },
    {
      icon: Users,
      title: 'Family & social pressure',
      text: 'Expectations, comparison, conflict, relationships, friendship groups and pressure to meet other people’s standards.',
    },
    {
      icon: WalletCards,
      title: 'Money & life changes',
      text: 'Tuition, living costs, part-time work, moving away from home, uncertainty about jobs and adapting to a new environment.',
    },
    {
      icon: Smartphone,
      title: 'Digital pressure',
      text: 'Comparison, FOMO, constant notifications, late-night scrolling, cyberbullying and the feeling that you always need to be available.',
    },
  ]

  const externalResources = [
    {
      title: 'Doing What Matters in Times of Stress',
      organisation: 'World Health Organization',
      description:
        'A free illustrated stress-management guide with practical exercises and accompanying audio. It is designed for anyone experiencing stress.',
      href: 'https://www.who.int/europe/publications/i/item/9789240003910',
      icon: BookOpen,
      tag: 'Free guide',
    },
    {
      title: 'Stress',
      organisation: 'American Psychological Association',
      description:
        'A collection of psychology-informed information and articles covering stress and healthy ways of coping.',
      href: 'https://www.apa.org/topics/stress',
      icon: Brain,
      tag: 'Information',
    },
    {
      title: 'Coping With Stress',
      organisation: 'Centers for Disease Control and Prevention',
      description:
        'Plain-language public health information about coping with stress and recognising when stress may be affecting wellbeing.',
      href: 'https://www.cdc.gov/mental-health/living-with/coping-with-stress.html',
      icon: ShieldCheck,
      tag: 'Public health',
    },
    {
      title: 'NIMHANS',
      organisation: 'National Institute of Mental Health and Neurosciences',
      description:
        'India’s leading mental-health and neuroscience institute, with public education and mental-health information.',
      href: 'https://nimhans.ac.in',
      icon: Home,
      tag: 'India',
    },
    {
      title: 'The Live Love Laugh Foundation',
      organisation: 'Indian mental-health nonprofit',
      description:
        'Mental-health awareness resources, including student and school-oriented material.',
      href: 'https://www.thelivelovelaughfoundation.org',
      icon: HeartHandshake,
      tag: 'India',
    },
  ]

  const videos = [
    {
      title: 'How to Make Stress Your Friend',
      creator: 'Kelly McGonigal · TED',
      description:
        'A psychologist explores a different way of thinking about the stress response and the role of social connection.',
      href: 'https://www.youtube.com/watch?v=RcGyVTAoXEU',
      duration: '≈ 14 min',
    },
    {
      title: 'Does Stress Affect Your Memory?',
      creator: 'Elizabeth Cox · TED-Ed',
      description:
        'Explains why stress can affect memory and why students may sometimes experience the feeling of “blanking out.”',
      href: 'https://www.youtube.com/watch?v=hyg7lcU4g8E',
      duration: '≈ 5 min',
    },
    {
      title: 'How Stress Affects Your Brain',
      creator: 'Madhumita Murgia · TED-Ed',
      description:
        'A short visual explanation of how ongoing stress can affect the brain and why stress is not always the same experience.',
      href: 'https://www.youtube.com/watch?v=WuyPuH9ojCE',
      duration: '≈ 4 min',
    },
  ]

  const apps = [
    {
      title: 'Insight Timer',
      description:
        'Meditation, breathing and sleep content with a large free library and optional paid features.',
      href: 'https://insighttimer.com',
    },
    {
      title: 'Smiling Mind',
      description:
        'A free mindfulness platform developed with psychologists and educators, including material designed for young people.',
      href: 'https://www.smilingmind.com.au',
    },
    {
      title: 'Wysa',
      description:
        'A digital self-help tool offering wellbeing exercises. Treat it as a self-help resource, not a replacement for professional care.',
      href: 'https://www.wysa.com',
    },
    {
      title: 'Headspace',
      description:
        'Meditation, sleep and focus content with beginner-friendly guided practices.',
      href: 'https://www.headspace.com',
    },
  ]

  const books = [
    {
      title: "Why Zebras Don't Get Ulcers",
      author: 'Robert M. Sapolsky',
      description:
        'A science-focused explanation of the physiology of stress and why prolonged stress can affect the body.',
    },
    {
      title: 'The Upside of Stress',
      author: 'Kelly McGonigal',
      description:
        'Explores how the way we understand and respond to stress can influence how we experience it.',
    },
    {
      title: 'Full Catastrophe Living',
      author: 'Jon Kabat-Zinn',
      description:
        'A deeper introduction to mindfulness-based approaches to stress management.',
    },
    {
      title: "Why Has Nobody Told Me This Before?",
      author: 'Dr. Julie Smith',
      description:
        'Accessible chapters covering difficult emotions, motivation and practical psychological strategies.',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f7fffd] via-white to-[#faf8ff] text-slate-800">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
        <div className="absolute -right-40 top-[35%] h-[28rem] w-[28rem] rounded-full bg-violet-100/25 blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-96 w-96 rounded-full bg-sky-100/20 blur-3xl" />
      </div>

      {/* Top navigation */}
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-7 sm:px-8 lg:px-10">
        <Link
          to="/resources"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur transition hover:-translate-x-0.5 hover:border-teal-200 hover:text-teal-700"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to Resources
        </Link>
      </section>

      {/* Editorial header */}
      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 lg:px-10 lg:pb-14">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/80 px-4 py-2 text-sm font-semibold text-teal-700">
            <Sparkles size={16} />
            A Thrive resource
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Stress &amp;{' '}
            <span className="text-teal-600">overwhelm.</span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            When everything starts feeling like too much, you do not have to
            solve everything at once. This guide helps you understand what
            stress can feel like and find one manageable next step.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
              <Clock3 size={15} className="text-teal-600" />
              Read at your own pace
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
              <ShieldCheck size={15} className="text-violet-500" />
              Educational, not diagnostic
            </span>
          </div>
        </div>
      </section>

      {/* Quick reset */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-violet-50 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-teal-200/20 blur-2xl" />
          <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-violet-200/20 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm">
                <Wind size={25} />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Need a reset?
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Feeling overwhelmed right now?
              </h2>

              <p className="mt-3 max-w-md leading-7 text-slate-600">
                Start here. You do not need to figure out your entire week in
                the next five minutes.
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
              <div className="space-y-3">
                {quickSteps.map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What stress is */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              Start with understanding
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What are stress and overwhelm?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Stress is your body and mind&apos;s natural reaction to a demand,
              challenge or change. A little stress can sometimes help you
              prepare and respond. The difficult part is when stress becomes
              very intense, happens repeatedly or does not seem to ease.
            </p>

            <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
              <div className="flex gap-3">
                <Brain className="mt-0.5 shrink-0 text-violet-500" size={21} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Overwhelm is not a diagnosis.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    It can simply be the feeling that the demands around you
                    seem bigger than your ability to deal with them in that
                    moment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Usually manageable
              </h3>

              <div className="mt-5 space-y-3">
                {[
                  'Stress eases when the deadline, event or difficult period passes.',
                  'You can generally continue eating, sleeping and connecting with people.',
                  'You can use a coping tool and feel at least somewhat better.',
                  'You can still think clearly enough to take your next step.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-teal-600"
                    />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50/70 to-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Worth paying attention to
              </h3>

              <div className="mt-5 space-y-3">
                {[
                  'Stress continues for weeks or does not seem to ease.',
                  'Sleep, eating, classes or everyday routines are being consistently disrupted.',
                  'Concentration and basic decisions are becoming unusually difficult.',
                  'Things that normally help no longer seem to make much difference.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-violet-500"
                    />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-slate-600">
                If your experience sounds more like this, it does not mean
                something is “wrong” with you. It may simply be a sign that
                some extra support could help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effects */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            Notice the signals
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Stress can show up in different ways.
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            You do not have to experience all of these. The point is simply to
            notice what stress may be doing to your everyday life.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {effects.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={`rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                index % 3 === 0
                  ? 'border-teal-100 bg-teal-50/50'
                  : index % 3 === 1
                    ? 'border-violet-100 bg-violet-50/50'
                    : 'border-sky-100 bg-sky-50/50'
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Icon size={21} className="text-teal-600" />
              </div>
              <h3 className="mt-5 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Causes */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                Why it happens
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Student life can put pressure on you from a lot of directions.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {causes.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
                >
                  <Icon size={21} className="text-teal-600" />
                  <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <ListChecks size={24} />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
            Practical toolkit
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Things you can try.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            There is no single “correct” way to manage stress. Explore the
            ideas that feel realistic for where you are right now.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          {strategies.map((strategy, index) => {
            const isOpen = openStrategy === index

            return (
              <div
                key={strategy.title}
                className="border-b border-slate-100 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenStrategy(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-teal-50/40 sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-slate-800">
                      {strategy.title}
                    </span>
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-teal-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="bg-slate-50/60 px-5 pb-6 pl-[4.5rem] pr-8 sm:px-7 sm:pb-7 sm:pl-[4.75rem]">
                    <p className="max-w-3xl text-sm leading-7 text-slate-600">
                      {strategy.content}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Student situations */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
            Your situation
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Stress does not always look the same.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Find the situation that sounds closest to yours. You do not have
            to read every section.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {scenarios.map((scenario, index) => {
            const isOpen = openScenario === index

            return (
              <div
                key={scenario.title}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? 'border-violet-200 bg-violet-50/60'
                    : 'border-slate-100 bg-white hover:border-violet-100 hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenScenario(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-800">
                    {scenario.title}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-violet-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-7 text-slate-600">
                      {scenario.content}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Professional help */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
                <HeartHandshake size={24} />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                You do not have to wait
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                When might extra support help?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Self-help tools can be useful, but you do not need to wait
                until things become unbearable before talking to a
                professional.
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/75 p-6 backdrop-blur">
              <div className="space-y-4">
                {[
                  'Stress or low mood is affecting you most days for several weeks.',
                  'You are struggling to attend classes, eat, sleep or maintain basic routines.',
                  'You are consistently withdrawing from people or activities you usually enjoy.',
                  'You feel unable to relax or things feel unmanageable no matter what you try.',
                  'You are using alcohol, drugs or other harmful coping methods to get through the day.',
                  'Physical symptoms such as headaches, stomach problems or exhaustion are not improving.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-bold text-slate-900">
                Asking for help is not a failure.
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                You can talk to a counsellor, psychologist, doctor, trusted
                adult or another qualified professional.
              </p>
            </div>

            <Link
              to="/support"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Explore Support
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted resources */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              Go a little deeper
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Trusted resources.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              These are external resources selected for their credibility and
              usefulness.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {externalResources.map(
            ({ title, organisation, description, href, icon: Icon, tag }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Icon size={21} />
                  </div>

                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                    {tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-1 text-sm font-medium text-teal-700">
                  {organisation}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  Open resource
                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            ),
          )}
        </div>
      </section>

      {/* Videos */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-violet-100 bg-violet-50/45 p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
              <Video size={22} />
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Watch &amp; understand.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Short videos can sometimes explain an idea more easily than
              another long article.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {videos.map((video) => (
              <a
                key={video.title}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <PlayCircle size={26} className="text-violet-500" />
                  <span className="text-xs font-medium text-slate-400">
                    {video.duration}
                  </span>
                </div>

                <h3 className="mt-5 font-bold leading-6 text-slate-900">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-violet-700">
                  {video.creator}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {video.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  Watch video
                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
            Optional tools
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Digital tools you can explore.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            These are wellbeing tools, not replacements for professional care.
            Check their current features and pricing before using them.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <a
              key={app.title}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-100 hover:shadow-md"
            >
              <Smartphone size={21} className="text-sky-600" />

              <h3 className="mt-4 font-bold text-slate-900">{app.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {app.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sky-700">
                Visit official site
                <ExternalLink size={13} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Reading */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Want to go deeper?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Further reading.
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              A few books for anyone who wants to explore stress, mindfulness
              and emotional wellbeing in more depth.
            </p>
          </div>

          <div className="space-y-3">
            {books.map((book) => (
              <div
                key={book.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {book.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-amber-700">
                      {book.author}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final support CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-teal-100 bg-gradient-to-r from-teal-50 to-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700">
                <MessageCircleHeart size={20} />
                <span className="font-semibold">Need more than self-help?</span>
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Thrive has a dedicated Support section with information about
                talking to someone and finding appropriate help.
              </p>
            </div>

            <Link
              to="/support"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Go to Support
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-5 sm:p-6">
          <div className="flex gap-3">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-violet-600"
            />

            <div>
              <h2 className="font-semibold text-slate-900">
                A note from Thrive
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Thrive is here to help you understand and manage everyday
                stress with practical, educational information. It is not a
                diagnosis and is not a substitute for professional care.
                Everyone&apos;s experience of stress is different. Self-help
                strategies can be useful, but if stress feels bigger than you
                can manage on your own, reaching out to a counsellor, doctor,
                trusted professional or another appropriate source of support
                is a strong and sensible step.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you or someone you know is in immediate danger or crisis,
                please use appropriate emergency services or crisis support.
                Visit our Support page for the options available through
                Thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StressAndOverwhelm