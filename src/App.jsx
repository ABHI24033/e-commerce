


import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Navbar from "./components/Navbar"
import Term_Condition from "./pages/Term_Condition"

function App() {


  return (
    <>
    {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/term_condition" element={<Term_Condition />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
