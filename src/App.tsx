import Navbar from "./components/Navbar"
import Upload from "./pages/Upload"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <p>Application running in <b>{process.env.NODE_ENV}</b> mode.</p>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home endPointBase={process.env.REACT_APP_ENDPOINT_BASE}/>} />
          <Route path="/upload" element={<Upload endPointBase={process.env.REACT_APP_ENDPOINT_BASE}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
