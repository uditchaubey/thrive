import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import StressAndOverwhelm from './pages/Resources/StressAndOverwhelm'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resources from './pages/Resources/Resources'
import Support from './pages/Support/Support'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Information from './pages/Support/Information'
import TalkToSomeone from './pages/Support/TalkToSomeone'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/support" element={<Support />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/resources/stress-and-overwhelm"
          element={<StressAndOverwhelm />}
        />

        <Route
          path="/support/information"
          element={<Information />}
        />

        <Route
          path="/support/talk"
          element={<TalkToSomeone />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App