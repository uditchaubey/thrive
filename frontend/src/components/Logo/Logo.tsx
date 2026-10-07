import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Thrive logo"
      >
        <path
          d="M29 51C29 51 27.5 37 18 29C10.5 22.7 4 22.5 4 22.5C4 22.5 4.8 34.5 12.5 41.5C18 46.5 24 48.5 29 51Z"
          fill="#A8D8CE"
        />

        <path
          d="M29 51C29 51 30.5 37 40 29C47.5 22.7 54 22.5 54 22.5C54 22.5 53.2 34.5 45.5 41.5C40 46.5 34 48.5 29 51Z"
          fill="#79BBAF"
        />

        <path
          d="M29 47C29 47 21 31 24 18C26 9.5 29 5 29 5C29 5 32 9.5 34 18C37 31 29 47 29 47Z"
          fill="#9FD2C7"
        />
      </svg>

      <div>
        <div className="text-3xl font-semibold tracking-tight text-teal-700">
          Thrive
        </div>

        <div className="text-sm text-slate-600">
          Your wellbeing, our priority
        </div>
      </div>
    </Link>
  )
}

export default Logo