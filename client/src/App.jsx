import { useState } from "react"
import { Route, Routes } from 'react-router-dom'
import EditData from "./components/EditData"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Results from "./components/Results"

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-black dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route path='/editdata/:id' element={<EditData />} />
          <Route path='/' element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
