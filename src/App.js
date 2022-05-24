import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// components
import MyNavbar from './components/MyNavbar'
// pages
import Home from './pages/Home/Home'
import Facilities from './pages/Facilities/Facilities'
import BookASchedule from './pages/BookASchedule/BookASchedule'
import Contact from './pages/Contact/Contact'
import GuitarLesson from './pages/Lessons/GuitarLesson'
import DrumLesson from './pages/Lessons/DrumLesson'
import Performances from './pages/Performances/Performances'
import OurInstructors from './pages/OurInstructors/OurInstructors'

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/book-a-schedule' element={<BookASchedule />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/guitar-lessons' element={<GuitarLesson />} />
          <Route path='/drum-lessons' element={<DrumLesson />} />
          <Route path='/performances' element={<Performances />} />
          <Route path='/our-instructors' element={<OurInstructors />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
