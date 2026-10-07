import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo/Logo'


function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Support', path: '/support' },
  ]

  return (
    <header className="relative z-50">
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12 xl:px-16">
       <div className="shrink-0">
  <Logo />
</div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 lg:flex xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`border-b-2 pb-2 text-[17px] transition ${
                isActive(link.path)
                  ? 'border-teal-600 text-teal-700'
                  : 'border-transparent text-slate-700 hover:text-teal-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop authentication */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/login"
            className="rounded-2xl border border-teal-200 bg-white px-7 py-3.5 text-[16px] text-slate-700 transition hover:bg-teal-50"          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-2xl bg-teal-600 px-7 py-3.5 text-[16px] text-white shadow-sm transition hover:bg-teal-700"          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2 text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 ${
                  isActive(link.path)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-2 flex gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-xl border border-teal-200 px-4 py-3 text-center"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-xl bg-teal-600 px-4 py-3 text-center text-white"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar