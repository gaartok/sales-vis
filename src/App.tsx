import Navbar from "./components/Navbar"
import Upload from "./pages/Upload"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

const endPointBase:any = process.env.REACT_APP_ENDPOINT_BASE;

function App() {
  return (
    <>
      <Navbar />
      <p>Application running in <b>{process.env.NODE_ENV}</b> mode.</p>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home endPointBase = { endPointBase }/>} />
          <Route path="/upload" element={<Upload endPointBase={ endPointBase }/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
