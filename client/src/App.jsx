import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import EditData from "./components/EditData"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Results from "./components/Results"
import axios from 'axios'


const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`http://localhost:8080/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setUser(usr);
    })();
  }, []);
  console.log(user)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-black dark:text-gray-200 min-h-screen'>
        {user ? <>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route path='/editdata/:id' element={<EditData />} />
            <Route path='/' element={<Results />} />
          </Routes>
        </>
          : (<Login user={user} setUser={setUser} />)}
        <Footer />
      </div>
    </div>
  )
}

export default App
