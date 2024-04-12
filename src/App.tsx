import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import AgeCalculator from './components/projects/AgeCal'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/AgeCalculator' element={<AgeCalculator />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
