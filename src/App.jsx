import { Route, Routes } from "react-router";

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
